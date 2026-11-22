# Pizza House

## Ishga tushirish

1. Node.js 18 yoki undan yangisini o‘rnating.
2. PowerShell’da `Copy-Item .env.example .env` buyrug‘ini bajarib, `.env` ichidagi `TELEGRAM_BOT_TOKEN` qiymatiga BotFather bergan bot tokenini kiriting. `TELEGRAM_CHAT_ID` siz avval bergan `8983060286` qiymatidan foydalanadi; kerak bo‘lsa uni `.env` ichida o‘zgartiring. Tokenni frontend fayllariga qo‘ymang.
3. `npm install` va `npm run build:css` buyruqlarini bajaring.
4. Saqlangan `.env` sozlamalarini yuklash uchun serverni `npm start` bilan ishga tushiring yoki qayta ishga tushiring. `http://localhost:3000` sahifasini oching. VS Code Live Server orqali ochmang: u `/api/order` endpointini ishlatmaydi.

SCSS manbalari `styles/scss/` ichida, ularning global kirish fayli `styles/scss/pizza.scss`. Kompilyatsiya qilingan CSS `styles/pizza.css` ga yoziladi.

## Tuzilma

- `pages/` — bosh sahifa, biz haqimizda va buyurtma sahifalari
- `partials/` — barcha sahifalarda ishlatiladigan header va footer
- `js/` — til almashtirish, menyu, sahifa va savat logikasi
- `styles/scss/` — Sass partiallari va global `pizza.scss`
- `data/products.json` — menyu mahsulotlari, narxlari va rasmlari
- `server.js` — sahifalarni taqdim etish va Telegram’ga buyurtma yuborish API’si

Yangi pitsa qo‘shish uchun `data/products.json` fayliga noyob `id`, narx, ikki tildagi nom/tavsif va `images/` ichidagi rasm yo‘lini kiriting. Buyurtma summasi serverda mahsulot katalogi asosida hisoblanadi.
