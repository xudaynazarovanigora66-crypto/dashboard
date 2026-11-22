(function () {
  const translations = {
    uz: {
      "nav.home": "Bosh sahifa", "nav.about": "Biz haqimizda", "nav.pizza": "Pitsalar", "nav.menu": "Menyu", "nav.buy": "Buyurtma", "nav.delivery": "Yetkazib berish", "nav.contact": "Aloqa", "nav.favorites": "Sevimlilar", "nav.cart": "Savat",
      "footer.note": "Mazali lahzalar har bir bo‘lakda.",
      "home.title": "Pizza House — mazali pitsa", "home.eyebrow": "Yangi pishirilgan. Mehr bilan.",
      "home.heading": "Har bir bo‘lakda <span>baxt</span> bor.", "home.description": "Sevimli masalliqlaringiz bilan tayyorlangan issiq pitsa — kuningizning eng mazali qismi.",
      "home.cta": "Pitsalarni ko‘rish", "home.rating": "Har kuni yangi masalliqlar", "home.badge": "Issiq va mazali!",
      "home.pizzaAlt": "Pepperoni pitsa", "home.favoriteEyebrow": "Mijozlar tanlovi", "home.favoriteTitle": "Sevimli pitsalar",
      "home.allMenu": "Barcha menyu", "home.promo": "Mazali pitsa uchun eng yaxshi vaqt — hozir!",
      "home.orderNow": "Buyurtma berish", "home.add": "Savatga qo‘shish", "home.added": "Savatga qo‘shildi",
      "home.pagesEyebrow": "Sayt bo‘limlari", "home.pagesTitle": "Sahifalarni tanlang",
      "about.title": "Biz haqimizda — Pizza House", "about.eyebrow": "Biz haqimizda",
      "about.heading": "Pitsa — bu shunchaki taom emas.", "about.intro": "Bu — bir dasturxon atrofida jam bo‘lish, suhbat va unutilmas mazali lahzalar.",
      "about.imageAlt": "Yangi pishirilgan pitsa", "about.storyEyebrow": "Bizning hikoyamiz",
      "about.storyTitle": "Har kuni — yangi xamir, yangi masalliqlar.",
      "about.story": "Biz har bir pitsani buyurtma kelganda tayyorlaymiz. Sifatli masalliqlar, mehr va e’tibor — har bir bo‘lakning siri.",
      "about.valueOneTitle": "Yangi masalliqlar", "about.valueOne": "Har kuni tanlangan mahsulotlar.",
      "about.valueTwoTitle": "Mehr bilan", "about.valueTwo": "Har bir buyurtmaga alohida e’tibor.", "about.cta": "Menyuni ko‘rish",
      "buy.title": "Pitsalar — Pizza House", "buy.eyebrow": "Pizza House menyusi", "buy.heading": "Bugun qaysi pitsa?",
      "buy.intro": "Sevimli ta’bingizni tanlang — biz uni yangi tayyorlaymiz.", "buy.menuEyebrow": "Yangi va mazali",
      "buy.menuTitle": "Bizning pitsalar", "buy.fresh": "Buyurtmaga tayyorlanadi", "buy.cartTitle": "Savat",
      "buy.empty": "Savat hozircha bo‘sh.", "buy.emptyHint": "Pitsalardan birini tanlang.", "buy.total": "Jami",
      "buy.checkout": "Buyurtma berish", "buy.add": "Savatga qo‘shish", "buy.added": "Qo‘shildi",
      "buy.detailsTitle": "Yetkazib berish ma’lumotlari", "buy.name": "Ismingiz", "buy.phone": "Telefon raqamingiz",
      "buy.address": "Yetkazib berish manzili", "buy.sendOrder": "Buyurtmani yuborish", "buy.cancel": "Bekor qilish",
      "buy.sending": "Buyurtma yuborilmoqda…", "buy.sent": "Rahmat! Buyurtmangiz qabul qilindi.",
      "buy.failed": "Buyurtmani yuborib bo‘lmadi. Iltimos, qayta urinib ko‘ring.",
      "buy.telegramNotConfigured": "Telegram bot sozlanmagan. .env fayliga TELEGRAM_BOT_TOKEN kiriting va serverni qayta ishga tushiring.",
      "buy.telegramRejected": "Telegram buyurtmani qabul qilmadi. Bot tokeni va chat ID ni tekshiring, botga /start yuboring.",
      "buy.telegramUnreachable": "Telegram serveriga ulanib bo‘lmadi. Internet ulanishini tekshirib, qayta urinib ko‘ring.",
      "buy.serverUnavailable": "Saytning Node.js serveri ishlamayapti. Loyiha papkasida npm start buyrug‘ini ishga tushiring; Live Server buyurtma API sini ishlatmaydi.",
      "pizza.eyebrow": "Pizza House pitsalari", "pizza.heading": "Mazali pitsalarni tanlang", "pizza.intro": "Har bir retsept yangi masalliqlar, quyuq sous va mukammal pech pishirish bilan tayyorlanadi.", "pizza.allEyebrow": "To‘liq assortiment", "pizza.allTitle": "Barcha pitsalar", "pizza.featureLabel": "O‘rta qiziqish", "pizza.add": "Savatga qo‘shish",
      "menu.eyebrow": "Bugungi menyu", "menu.heading": "Nima istaysiz?", "menu.intro": "Pitsa tanlang, buyurtmaga qo‘shing va mazali lahzani yoqtiring.", "menu.filterAll": "Hammasi", "menu.filterPizza": "Pitsalar", "menu.filterClassic": "Klassik",
      "delivery.eyebrow": "Tez va qulay", "delivery.heading": "Pitsa — uyingizgacha", "delivery.intro": "Manzilingizni belgilang, buyurtmangizni tasdiqlang va issiq pitsani kuting.", "delivery.stepOneTitle": "Pitsani tanlang", "delivery.stepOneText": "Menyudan sevimli pitsangizni savatga qo‘shing.", "delivery.stepTwoTitle": "Ma’lumotni kiriting", "delivery.stepTwoText": "Ismingiz, telefoningiz va yetkazib berish manzilini ko‘rsating.", "delivery.stepThreeTitle": "Buyurtmani tasdiqlang", "delivery.stepThreeText": "Buyurtma qayta ishlanadi va siz tezda xabar olasiz.", "delivery.infoEyebrow": "Ma’lumot", "delivery.infoTitle": "Qulay yetkazib berish", "delivery.infoOne": "Shahar bo‘ylab yetkazib berish", "delivery.infoTwo": "Buyurtmani holatini kuzatish", "delivery.infoThree": "Naqd yoki karta orqali to‘lov", "delivery.cta": "Buyurtma berish",
      "contact.eyebrow": "Bog‘lanish", "contact.heading": "Savolingiz bormi?", "contact.intro": "Taklif, savol yoki maxsus buyurtma haqida bemalol yozing.", "contact.detailsTitle": "Pizza House bilan bog‘laning", "contact.detailsText": "Javob berish vaqti odatda bir necha daqiqa.", "contact.phoneLabel": "Telefon", "contact.emailLabel": "Email", "contact.name": "Ismingiz", "contact.phone": "Telefon raqamingiz", "contact.message": "Xabar", "contact.submit": "Xabar yuborish",
      "favorites.eyebrow": "Sizning tanlovingiz", "favorites.heading": "Sevimli pitsalar", "favorites.intro": "Eng ko‘p yoqtirilgan mazali pitsalar bir joyda.",
      "buy.price": "dona", "buy.remove": "Olib tashlash", "buy.formError": "Iltimos, barcha maydonlarni to‘ldiring."
    },
    ru: {
      "nav.home": "Главная", "nav.about": "О нас", "nav.pizza": "Пиццы", "nav.menu": "Меню", "nav.buy": "Заказ", "nav.delivery": "Доставка", "nav.contact": "Контакты", "nav.favorites": "Избранное", "nav.cart": "Корзина",
      "footer.note": "Вкусные моменты в каждом кусочке.",
      "home.title": "Pizza House — вкусная пицца", "home.eyebrow": "Свежая выпечка. С любовью.",
      "home.heading": "Счастье в каждом <span>кусочке</span>.", "home.description": "Горячая пицца с любимыми ингредиентами — самая вкусная часть вашего дня.",
      "home.cta": "Выбрать пиццу", "home.rating": "Свежие ингредиенты каждый день", "home.badge": "Горячо и вкусно!",
      "home.pizzaAlt": "Пицца Пепперони", "home.favoriteEyebrow": "Выбор гостей", "home.favoriteTitle": "Любимые пиццы",
      "home.allMenu": "Все меню", "home.promo": "Лучшее время для вкусной пиццы — сейчас!",
      "home.orderNow": "Заказать", "home.add": "В корзину", "home.added": "Добавлено",
      "home.pagesEyebrow": "Разделы сайта", "home.pagesTitle": "Выберите страницу",
      "about.title": "О нас — Pizza House", "about.eyebrow": "О нас",
      "about.heading": "Пицца — это больше, чем просто еда.", "about.intro": "Это встречи за одним столом, разговоры и незабываемые вкусные моменты.",
      "about.imageAlt": "Свежая пицца", "about.storyEyebrow": "Наша история",
      "about.storyTitle": "Каждый день — свежее тесто и ингредиенты.",
      "about.story": "Мы готовим каждую пиццу после оформления заказа. Качественные продукты, забота и внимание — секрет каждого кусочка.",
      "about.valueOneTitle": "Свежие продукты", "about.valueOne": "Тщательно отбираем каждый день.",
      "about.valueTwoTitle": "С заботой", "about.valueTwo": "Внимание к каждому заказу.", "about.cta": "Посмотреть меню",
      "buy.title": "Пиццы — Pizza House", "buy.eyebrow": "Меню Pizza House", "buy.heading": "Какую пиццу сегодня?",
      "buy.intro": "Выберите любимый вкус — мы приготовим его свежим.", "buy.menuEyebrow": "Свежо и вкусно",
      "buy.menuTitle": "Наши пиццы", "buy.fresh": "Готовим после заказа", "buy.cartTitle": "Корзина",
      "buy.empty": "Корзина пока пуста.", "buy.emptyHint": "Выберите пиццу из меню.", "buy.total": "Итого",
      "buy.checkout": "Оформить заказ", "buy.add": "В корзину", "buy.added": "Добавлено",
      "buy.detailsTitle": "Данные для доставки", "buy.name": "Ваше имя", "buy.phone": "Номер телефона",
      "buy.address": "Адрес доставки", "buy.sendOrder": "Отправить заказ", "buy.cancel": "Отмена",
      "buy.sending": "Отправляем заказ…", "buy.sent": "Спасибо! Ваш заказ принят.",
      "buy.failed": "Не удалось отправить заказ. Попробуйте ещё раз.",
      "buy.telegramNotConfigured": "Telegram-бот не настроен. Добавьте TELEGRAM_BOT_TOKEN в файл .env и перезапустите сервер.",
      "buy.telegramRejected": "Telegram не принял заказ. Проверьте токен и chat ID, затем отправьте боту /start.",
      "buy.telegramUnreachable": "Не удалось подключиться к Telegram. Проверьте интернет и попробуйте ещё раз.",
      "buy.serverUnavailable": "Сервер Node.js не запущен. В папке проекта выполните npm start; Live Server не поддерживает API заказов.",
      "pizza.eyebrow": "Пиццы Pizza House", "pizza.heading": "Выберите вкусную пиццу", "pizza.intro": "Каждый рецепт готовится из свежих ингредиентов с густым соусом и идеальной выпечкой.", "pizza.allEyebrow": "Полный ассортимент", "pizza.allTitle": "Все пиццы", "pizza.featureLabel": "Популярное", "pizza.add": "В корзину",
      "menu.eyebrow": "Меню сегодня", "menu.heading": "Что желаете?", "menu.intro": "Выберите пиццу, добавьте в заказ и насладитесь вкусным моментом.", "menu.filterAll": "Все", "menu.filterPizza": "Пиццы", "menu.filterClassic": "Классические",
      "delivery.eyebrow": "Быстро и удобно", "delivery.heading": "Пицца — прямо к вам", "delivery.intro": "Укажите адрес, подтвердите заказ и ожидайте горячую пиццу.", "delivery.stepOneTitle": "Выберите пиццу", "delivery.stepOneText": "Добавьте любимую пиццу из меню в корзину.", "delivery.stepTwoTitle": "Введите данные", "delivery.stepTwoText": "Укажите имя, телефон и адрес доставки.", "delivery.stepThreeTitle": "Подтвердите заказ", "delivery.stepThreeText": "Заказ будет обработан, и вы скоро получите уведомление.", "delivery.infoEyebrow": "Информация", "delivery.infoTitle": "Удобная доставка", "delivery.infoOne": "Доставка по городу", "delivery.infoTwo": "Отслеживание заказа", "delivery.infoThree": "Оплата наличными или картой", "delivery.cta": "Заказать",
      "contact.eyebrow": "Связаться", "contact.heading": "Есть вопрос?", "contact.intro": "Напишите о предложении, вопросе или индивидуальном заказе.", "contact.detailsTitle": "Свяжитесь с Pizza House", "contact.detailsText": "Мы обычно отвечаем в течение нескольких минут.", "contact.phoneLabel": "Телефон", "contact.emailLabel": "Email", "contact.name": "Ваше имя", "contact.phone": "Номер телефона", "contact.message": "Сообщение", "contact.submit": "Отправить сообщение",
      "favorites.eyebrow": "Ваш выбор", "favorites.heading": "Любимые пиццы", "favorites.intro": "Самые популярные вкусные пиццы собраны в одном месте.",
      "buy.price": "шт.", "buy.remove": "Удалить", "buy.formError": "Пожалуйста, заполните все поля."
    }
  };

  const languageKey = "pizza-language";
  const cartKey = "pizza-cart";

  function readStored(key, fallback) {
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : fallback;
    } catch (error) {
      console.error(`Could not read ${key} from local storage:`, error);
      return fallback;
    }
  }

  function currentLanguage() {
    return localStorage.getItem(languageKey) === "ru" ? "ru" : "uz";
  }

  function translate(key) {
    return translations[currentLanguage()][key] || key;
  }

  function applyTranslations() {
    const language = currentLanguage();
    document.documentElement.lang = language;
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const value = translate(element.dataset.i18n);
      if (value.includes("<span>")) element.innerHTML = value;
      else element.textContent = value;
    });
    document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
      element.alt = translate(element.dataset.i18nAlt);
    });
    document.querySelectorAll("[data-language]").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.language === language));
    });
    document.title = translate(document.querySelector("title")?.dataset.i18n || "home.title");
  }

  function saveCart(cart) {
    localStorage.setItem(cartKey, JSON.stringify(cart));
    window.dispatchEvent(new CustomEvent("pizza:cart-change"));
  }

  function cartCount() {
    const cart = readStored(cartKey, []);
    return Array.isArray(cart) ? cart.reduce((total, item) => total + (Number(item.quantity) || 0), 0) : 0;
  }

  function updateHeaderCart() {
    document.querySelectorAll("[data-cart-count]").forEach((element) => {
      element.textContent = String(cartCount());
    });
  }

  function addToCart(id) {
    const cart = readStored(cartKey, []);
    const validCart = Array.isArray(cart) ? cart : [];
    const existing = validCart.find((item) => item.id === id);
    if (existing) existing.quantity = Math.min(99, (Number(existing.quantity) || 0) + 1);
    else validCart.push({ id, quantity: 1 });
    saveCart(validCart);
  }

  window.PizzaApp = {
    translate,
    currentLanguage,
    readCart: () => {
      const cart = readStored(cartKey, []);
      return Array.isArray(cart) ? cart : [];
    },
    saveCart,
    addToCart
  };

  document.addEventListener("DOMContentLoaded", async () => {
    const includes = Array.from(document.querySelectorAll("[data-include]"));
    await Promise.all(includes.map(async (container) => {
      const response = await fetch(container.dataset.include);
      if (!response.ok) throw new Error(`Could not load ${container.dataset.include}: ${response.status}`);
      container.innerHTML = await response.text();
    })).catch((error) => console.error("Could not load shared page sections:", error));

    document.querySelectorAll("[data-language]").forEach((button) => {
      button.addEventListener("click", () => {
        localStorage.setItem(languageKey, button.dataset.language);
        applyTranslations();
        window.dispatchEvent(new CustomEvent("pizza:language-change"));
      });
    });
    const menuToggle = document.querySelector(".menu-toggle");
    const navigation = document.querySelector(".primary-nav");
    if (menuToggle && navigation) {
      menuToggle.addEventListener("click", () => {
        const expanded = menuToggle.getAttribute("aria-expanded") === "true";
        menuToggle.setAttribute("aria-expanded", String(!expanded));
        navigation.classList.toggle("is-open", !expanded);
      });
      navigation.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
          menuToggle.setAttribute("aria-expanded", "false");
          navigation.classList.remove("is-open");
        });
      });
    }
    document.querySelectorAll("[data-current-year]").forEach((element) => {
      element.textContent = String(new Date().getFullYear());
    });
    applyTranslations();
    updateHeaderCart();
    window.addEventListener("pizza:cart-change", updateHeaderCart);
  });
})();
