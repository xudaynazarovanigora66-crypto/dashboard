document.addEventListener("DOMContentLoaded", async () => {
  const container = document.querySelector("[data-home-products]");
  if (!container) return;

  const response = await fetch("/data/products.json");
  if (!response.ok) throw new Error(`Could not load products: ${response.status}`);
  const products = await response.json();

  function render() {
    container.replaceChildren();
    products.forEach((product) => {
      const card = document.createElement("article");
      card.className = "feature-card";
      const image = document.createElement("img");
      image.src = product.image;
      image.alt = product.name[PizzaApp.currentLanguage()];
      image.loading = "lazy";
      const details = document.createElement("div");
      details.className = "feature-card-details";
      const name = document.createElement("h3");
      name.textContent = product.name[PizzaApp.currentLanguage()];
      const price = document.createElement("span");
      price.className = "product-price";
      price.textContent = `${product.price.toLocaleString("ru-RU")} so‘m`;
      const button = document.createElement("button");
      button.className = "button button-outline";
      button.type = "button";
      button.textContent = PizzaApp.translate("home.add");
      button.addEventListener("click", () => {
        PizzaApp.addToCart(product.id);
        button.textContent = PizzaApp.translate("home.added");
        window.setTimeout(() => { button.textContent = PizzaApp.translate("home.add"); }, 1100);
      });
      details.append(name, price, button);
      card.append(image, details);
      container.append(card);
    });
  }

  render();
  window.addEventListener("pizza:language-change", render);
});
