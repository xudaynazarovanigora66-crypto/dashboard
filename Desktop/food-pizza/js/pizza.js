document.addEventListener("DOMContentLoaded", async () => {
  const list = document.querySelector("[data-pizza-list]");
  const feature = document.querySelector("[data-pizza-feature]");
  if (!list || !feature) return;
  const response = await fetch("/data/products.json");
  if (!response.ok)
    throw new Error(`Could not load pizzas: ${response.status}`);
  const products = await response.json();
  const money = (amount) => `${amount.toLocaleString("ru-RU")} so‘m`;

  function render() {
    const lang = PizzaApp.currentLanguage();
    feature.replaceChildren();
    list.replaceChildren();
    const main = products[0];
    const featureCard = document.createElement("article");
    featureCard.className = "pizza-feature-card";
    featureCard.innerHTML = `<div class="pizza-image-slot" data-pizza-image aria-hidden="true"></div><div class="pizza-feature-copy"><span class="pizza-feature-label">${PizzaApp.translate("pizza.featureLabel")}</span><h2>${main.name[lang]}</h2><p>${main.description[lang]}</p><div class="pizza-feature-footer"><strong>${money(main.price)}</strong><button type="button" class="button button-primary" data-add="${main.id}">${PizzaApp.translate("pizza.add")}</button></div></div>`;
    feature.append(featureCard);
    featureCard
      .querySelector("[data-add]")
      .addEventListener("click", () => PizzaApp.addToCart(main.id));

    products.forEach((product) => {
      const card = document.createElement("article");
      card.className = "text-pizza-card";
      card.innerHTML = `<div class="pizza-image-slot pizza-image-slot-small" data-pizza-image aria-hidden="true"></div><div><h3>${product.name[lang]}</h3><p>${product.description[lang]}</p><div class="text-pizza-footer"><strong>${money(product.price)}</strong><button type="button" class="button button-outline" data-add="${product.id}">${PizzaApp.translate("pizza.add")}</button></div></div>`;
      card
        .querySelector("[data-add]")
        .addEventListener("click", () => PizzaApp.addToCart(product.id));
      list.append(card);
    });
  }
  render();
  window.addEventListener("pizza:language-change", render);
});
