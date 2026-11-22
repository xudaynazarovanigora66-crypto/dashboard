document.addEventListener("DOMContentLoaded", async () => {
  const list = document.querySelector("[data-favorites-list]");
  if (!list) return;
  const response = await fetch("/data/products.json");
  if (!response.ok) throw new Error(`Could not load favorites: ${response.status}`);
  const products = await response.json();
  const money = (amount) => `${amount.toLocaleString("ru-RU")} so‘m`;

  function render() {
    const lang = PizzaApp.currentLanguage();
    list.replaceChildren();
    products.forEach((product) => {
      const card = document.createElement("article");
      card.className = "favorite-card";
      card.innerHTML = `<div class="favorite-image-slot" data-pizza-image aria-hidden="true"></div><h2>${product.name[lang]}</h2><p>${product.description[lang]}</p><div><strong>${money(product.price)}</strong><button type="button" class="button button-primary" data-add="${product.id}">${PizzaApp.translate("buy.add")}</button></div>`;
      card.querySelector("[data-add]").addEventListener("click", () => PizzaApp.addToCart(product.id));
      list.append(card);
    });
  }
  render();
  window.addEventListener("pizza:language-change", render);
});
