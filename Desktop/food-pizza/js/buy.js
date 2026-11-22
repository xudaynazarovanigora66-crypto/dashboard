document.addEventListener("DOMContentLoaded", async () => {
  const productList = document.querySelector("[data-product-list]");
  if (!productList) return;

  const response = await fetch("/data/products.json");
  if (!response.ok) throw new Error(`Could not load products: ${response.status}`);
  const products = await response.json();
  const productById = new Map(products.map((product) => [product.id, product]));
  const cartItems = document.querySelector("[data-cart-items]");
  const cartEmpty = document.querySelector("[data-cart-empty]");
  const cartTotal = document.querySelector("[data-cart-total]");
  const checkoutButton = document.querySelector("[data-checkout]");
  const checkoutForm = document.querySelector("[data-checkout-form]");
  const status = document.querySelector("[data-order-status]");
  const money = (amount) => `${amount.toLocaleString("ru-RU")} so‘m`;

  function renderProducts() {
    productList.replaceChildren();
    products.forEach((product) => {
      const card = document.createElement("article");
      card.className = "product-card";
      const imageWrap = document.createElement("div");
      imageWrap.className = "product-image-wrap";
      const image = document.createElement("img");
      image.src = product.image;
      image.alt = product.name[PizzaApp.currentLanguage()];
      image.loading = "lazy";
      imageWrap.append(image);
      const body = document.createElement("div");
      body.className = "product-card-body";
      const name = document.createElement("h3");
      name.textContent = product.name[PizzaApp.currentLanguage()];
      const description = document.createElement("p");
      description.className = "product-description";
      description.textContent = product.description[PizzaApp.currentLanguage()];
      const footer = document.createElement("div");
      footer.className = "product-card-footer";
      const price = document.createElement("strong");
      price.className = "product-price";
      price.textContent = money(product.price);
      const button = document.createElement("button");
      button.className = "button button-primary add-button";
      button.type = "button";
      button.textContent = PizzaApp.translate("buy.add");
      button.setAttribute("aria-label", `${PizzaApp.translate("buy.add")}: ${name.textContent}`);
      button.addEventListener("click", () => {
        PizzaApp.addToCart(product.id);
        renderCart();
      });
      footer.append(price, button);
      body.append(name, description, footer);
      card.append(imageWrap, body);
      productList.append(card);
    });
  }

  function renderCart() {
    const cart = PizzaApp.readCart().filter((item) => productById.has(item.id));
    cartItems.replaceChildren();
    let total = 0;
    cart.forEach((item) => {
      const product = productById.get(item.id);
      const quantity = Math.min(99, Math.max(1, Number(item.quantity) || 1));
      total += product.price * quantity;
      const row = document.createElement("div");
      row.className = "cart-item";
      const info = document.createElement("div");
      info.className = "cart-item-info";
      const name = document.createElement("strong");
      name.textContent = product.name[PizzaApp.currentLanguage()];
      const subtotal = document.createElement("span");
      subtotal.textContent = money(product.price * quantity);
      info.append(name, subtotal);
      const controls = document.createElement("div");
      controls.className = "quantity-controls";
      const decrease = document.createElement("button");
      decrease.type = "button";
      decrease.textContent = "−";
      decrease.setAttribute("aria-label", PizzaApp.translate("buy.remove"));
      decrease.addEventListener("click", () => updateQuantity(item.id, quantity - 1));
      const count = document.createElement("span");
      count.textContent = String(quantity);
      const increase = document.createElement("button");
      increase.type = "button";
      increase.textContent = "+";
      increase.setAttribute("aria-label", PizzaApp.translate("buy.add"));
      increase.addEventListener("click", () => updateQuantity(item.id, quantity + 1));
      controls.append(decrease, count, increase);
      row.append(info, controls);
      cartItems.append(row);
    });
    cartEmpty.hidden = cart.length > 0;
    cartItems.hidden = cart.length === 0;
    cartTotal.textContent = money(total);
    checkoutButton.disabled = cart.length === 0;
    if (cart.length === 0) checkoutForm.hidden = true;
  }

  function updateQuantity(id, quantity) {
    const cart = PizzaApp.readCart()
      .map((item) => item.id === id ? { ...item, quantity } : item)
      .filter((item) => item.quantity > 0);
    PizzaApp.saveCart(cart);
    renderCart();
  }

  checkoutButton.addEventListener("click", () => {
    status.textContent = "";
    checkoutForm.hidden = false;
    checkoutForm.querySelector("input").focus();
  });
  document.querySelector("[data-cancel-checkout]").addEventListener("click", () => {
    checkoutForm.hidden = true;
    status.textContent = "";
  });
  checkoutForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const submitButton = checkoutForm.querySelector("[data-submit-order]");
    if (!checkoutForm.reportValidity()) return;
    const formData = new FormData(checkoutForm);
    const order = {
      name: formData.get("name").trim(),
      phone: formData.get("phone").trim(),
      address: formData.get("address").trim(),
      language: PizzaApp.currentLanguage(),
      items: PizzaApp.readCart().map(({ id, quantity }) => ({ id, quantity }))
    };
    if (!order.items.length) return;

    submitButton.disabled = true;
    status.className = "order-status is-pending";
    status.textContent = PizzaApp.translate("buy.sending");
    try {
      const orderResponse = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(order)
      });
      const contentType = orderResponse.headers.get("content-type") || "";
      if (!contentType.includes("application/json")) {
        const error = new Error("Order API is unavailable. Start the Node.js server with npm start.");
        error.code = "ORDER_API_UNAVAILABLE";
        throw error;
      }
      const result = await orderResponse.json();
      if (!orderResponse.ok) {
        const error = new Error(`Order request failed: ${orderResponse.status}`);
        error.code = result.code;
        throw error;
      }
      PizzaApp.saveCart([]);
      checkoutForm.reset();
      renderCart();
      status.className = "order-status is-success";
      status.textContent = PizzaApp.translate("buy.sent");
    } catch (error) {
      console.error("Could not submit order:", error);
      status.className = "order-status is-error";
      if (error instanceof TypeError || error.code === "ORDER_API_UNAVAILABLE") {
        error.code = "ORDER_API_UNAVAILABLE";
      }
      const messageKey = {
        ORDER_API_UNAVAILABLE: "buy.serverUnavailable",
        TELEGRAM_NOT_CONFIGURED: "buy.telegramNotConfigured",
        TELEGRAM_REJECTED: "buy.telegramRejected",
        TELEGRAM_UNREACHABLE: "buy.telegramUnreachable"
      }[error.code] || "buy.failed";
      status.textContent = PizzaApp.translate(messageKey);
    } finally {
      submitButton.disabled = false;
    }
  });

  renderProducts();
  renderCart();
  window.addEventListener("pizza:language-change", () => {
    renderProducts();
    renderCart();
  });
  window.addEventListener("pizza:cart-change", renderCart);
});
