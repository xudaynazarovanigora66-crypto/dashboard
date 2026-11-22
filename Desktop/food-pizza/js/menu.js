document.addEventListener("DOMContentLoaded", async () => {
  const list = document.querySelector("[data-menu-list]");
  if (!list) return;
  const response = await fetch("/data/products.json");
  if (!response.ok) throw new Error(`Could not load menu: ${response.status}`);
  const products = await response.json();
  const money = (amount) => `${amount.toLocaleString("ru-RU")} so‘m`;
  let filter = "all";

  function render() {
    const lang = PizzaApp.currentLanguage();
    list.replaceChildren();
    products
      .filter((product) => filter === "all" || (filter === "classic" ? product.id === "classic" : product.id !== "classic"))
      .forEach((product) => {
        const card = document.createElement("article");
        card.className = "menu-text-card";
        card.innerHTML = `<div class="menu-image-slot" data-pizza-image aria-hidden="true"></div><div><h3>${product.name[lang]}</h3><p>${product.description[lang]}</p></div><strong>${money(product.price)}</strong><button type="button" class="button button-primary" data-add="${product.id}">${PizzaApp.translate("buy.add")}</button>`;
        card.querySelector("[data-add]").addEventListener("click", () => PizzaApp.addToCart(product.id));
        list.append(card);
      });
  }

  document.querySelectorAll("[data-menu-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      filter = button.dataset.menuFilter;
      document.querySelectorAll("[data-menu-filter]").forEach((item) => item.classList.toggle("is-active", item === button));
      render();
    });
  });
  render();
  window.addEventListener("pizza:language-change", render);
});
