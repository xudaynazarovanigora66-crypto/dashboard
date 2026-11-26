const questionBank = [
  {
    category: "QURILMALAR",
    question: "Kompyuterda hisob-kitob va buyruqlarni bajaradigan asosiy qism qaysi?",
    options: ["Protsessor (CPU)", "Monitor", "Sichqoncha", "Karnay"],
    correctAnswer: "Protsessor (CPU)",
    explanation: "Protsessor buyruqlarni bajaradi va kompyuter ishini boshqaradi.",
  },
  {
    category: "XOTIRA",
    question: "Kompyuter o‘chirilganda ma’lumotlari yo‘qoladigan tezkor xotira qaysi?",
    options: ["RAM", "SSD", "USB fleshka", "DVD"],
    correctAnswer: "RAM",
    explanation: "RAM dasturlar ishlayotgan paytda kerakli ma’lumotlarni vaqtincha saqlaydi.",
  },
  {
    category: "WEB",
    question: "Veb-sahifaning asosiy tuzilishini yaratishda qaysi til ishlatiladi?",
    options: ["HTML", "CSS", "SQL", "Python"],
    correctAnswer: "HTML",
    explanation: "HTML veb-sahifadagi sarlavha, matn va rasmlar kabi qismlarni belgilaydi.",
  },
  {
    category: "WEB DIZAYN",
    question: "Veb-sahifaning ranglari va ko‘rinishini qaysi til bilan sozlaymiz?",
    options: ["CSS", "HTML", "SQL", "Bash"],
    correctAnswer: "CSS",
    explanation: "CSS veb-sahifaning ranglari, shriftlari va joylashuvini bezatadi.",
  },
  {
    category: "DASTURLASH",
    question: "Veb-sahifaga harakat va interaktivlik qo‘shish uchun qaysi til ko‘p ishlatiladi?",
    options: ["JavaScript", "HTML", "CSS", "JPEG"],
    correctAnswer: "JavaScript",
    explanation: "JavaScript tugmalar, menyular va boshqa interaktiv imkoniyatlarni ishlatadi.",
  },
  {
    category: "OPERATSION TIZIM",
    question: "Kompyuter qurilmalari va dasturlarining ishlashini qaysi dastur boshqaradi?",
    options: ["Operatsion tizim", "Matn muharriri", "Kalkulyator", "Veb-sayt"],
    correctAnswer: "Operatsion tizim",
    explanation: "Windows va Linux — kompyuterni boshqaradigan operatsion tizimlar.",
  },
  {
    category: "INTERNET",
    question: "Veb-sahifaning internetdagi manzili nima deb ataladi?",
    options: ["URL", "RAM", "CPU", "PDF"],
    correctAnswer: "URL",
    explanation: "URL — internetdagi sahifaning manzili.",
  },
  {
    category: "BRAUZER",
    question: "Google Chrome kabi brauzerning asosiy vazifasi nima?",
    options: [
      "Veb-sahifalarni ochish",
      "Kompyuter qismlarini almashtirish",
      "Rasm chizish",
      "Elektr quvvatini boshqarish",
    ],
    correctAnswer: "Veb-sahifalarni ochish",
    explanation: "Brauzer orqali internetdagi veb-saytlarni ko‘rish mumkin.",
  },
  {
    category: "XAVFSIZLIK",
    question: "Soxta xabar orqali parol yoki karta ma’lumotini olishga urinish nima deyiladi?",
    options: ["Fishing (phishing)", "Zaxira nusxa", "Dasturlash", "Formatlash"],
    correctAnswer: "Fishing (phishing)",
    explanation: "Fishing — odamni aldab, maxfiy ma’lumotlarini qo‘lga kiritishga urinish.",
  },
  {
    category: "PAROL XAVFSIZLIGI",
    question: "Qaysi parol xavfsizroq hisoblanadi?",
    options: [
      "Uzun va noyob parol",
      "123456",
      "password",
      "Ism va tug‘ilgan yil",
    ],
    correctAnswer: "Uzun va noyob parol",
    explanation: "Uzun, taxmin qilish qiyin va boshqa joyda ishlatilmagan parol xavfsizroq.",
  },
  {
    category: "BULUTLI XOTIRA",
    question: "Bulutli saqlash (cloud storage) nimaga yordam beradi?",
    options: [
      "Fayllarni internetdagi serverlarda saqlashga",
      "Kompyuterni sovitishga",
      "Ekran yorqinligini oshirishga",
      "Sichqonchani tozalashga",
    ],
    correctAnswer: "Fayllarni internetdagi serverlarda saqlashga",
    explanation: "Bulutli xizmatlar fayllarni internet orqali saqlash va ulashishga yordam beradi.",
  },
  {
    category: "SONLAR TIZIMI",
    question: "Kompyuterlar ma’lumotni ikkilik sanoq tizimida qaysi raqamlar bilan ifodalaydi?",
    options: ["0 va 1", "1 va 2", "0 dan 9 gacha", "A va B"],
    correctAnswer: "0 va 1",
    explanation: "Ikkilik sanoq tizimida faqat 0 va 1 raqamlari ishlatiladi.",
  },
  {
    category: "SUN’IY INTELLEKT",
    question: "Sun’iy intellekt tizimlari ko‘pincha qanday ma’lumotlardan o‘rganadi?",
    options: ["Ma’lumotlar va misollardan", "Faqat elektr simlaridan", "Monitor rangidan", "Tarmoq kabeli uzunligidan"],
    correctAnswer: "Ma’lumotlar va misollardan",
    explanation: "AI tizimlari misollar va ma’lumotlardagi qonuniyatlarni o‘rganadi.",
  },
  {
    category: "DASTURLASH",
    question: "Dasturdagi xato odatda qanday nomlanadi?",
    options: ["Bug", "Link", "Pixel", "Folder"],
    correctAnswer: "Bug",
    explanation: "Dasturdagi xato ko‘pincha “bug” deb ataladi.",
  },
  {
    category: "ZAXIRA NUSXA",
    question: "Muhim fayllarning zaxira nusxasini yaratishdan maqsad nima?",
    options: [
      "Fayllarni yo‘qolishdan saqlash",
      "Fayllarni avtomatik chop etish",
      "Ekranni kattalashtirish",
      "Internet tezligini o‘zgartirish",
    ],
    correctAnswer: "Fayllarni yo‘qolishdan saqlash",
    explanation: "Zaxira nusxa asl fayl yo‘qolsa yoki buzilsa, uni tiklashga yordam beradi.",
  },
  {
    category: "OPERATSION TIZIM",
    question: "Quyidagilardan qaysi biri operatsion tizim?",
    options: ["Windows", "Google Chrome", "Microsoft Word", "YouTube"],
    correctAnswer: "Windows",
    explanation: "Windows — kompyuterlar uchun operatsion tizim.",
  },
  {
    category: "MA’LUMOTLAR BAZASI",
    question: "Ma’lumotlar bazasi nima uchun ishlatiladi?",
    options: [
      "Ma’lumotlarni tartibli saqlash uchun",
      "Kompyuterni yoqish uchun",
      "Rasm rangini o‘zgartirish uchun",
      "Internet kabelini ulash uchun",
    ],
    correctAnswer: "Ma’lumotlarni tartibli saqlash uchun",
    explanation: "Ma’lumotlar bazasi ko‘p ma’lumotni tartib bilan saqlash va topishga yordam beradi.",
  },
  {
    category: "TARMOQ",
    question: "IP manzil tarmoqda nimani aniqlashga yordam beradi?",
    options: [
      "Qurilmani",
      "Ekran o‘lchamini",
      "Fayl turini",
      "Batareya rangini",
    ],
    correctAnswer: "Qurilmani",
    explanation: "IP manzil tarmoqdagi qurilmani aniqlash uchun ishlatiladi.",
  },
  {
    category: "DASTURLASH",
    question: "Ochiq kodli dastur deganda nima tushuniladi?",
    options: [
      "Manba kodini ko‘rish va litsenziya doirasida ishlatish mumkin bo‘lgan dastur",
      "Faqat internetsiz ishlaydigan dastur",
      "Faqat pullik dastur",
      "Kodlari umuman mavjud bo‘lmagan dastur",
    ],
    correctAnswer: "Manba kodini ko‘rish va litsenziya doirasida ishlatish mumkin bo‘lgan dastur",
    explanation: "Ochiq kodli dasturda manba kodini ko‘rish mumkin; foydalanish shartlari litsenziyaga bog‘liq.",
  },
  {
    category: "SUN’IY INTELLEKT",
    question: "Generativ sun’iy intellekt nima qila oladi?",
    options: [
      "Matn yoki rasm yaratishi mumkin",
      "Kompyuterga elektr tokini yetkazadi",
      "Buzilgan ekranni jismonan tuzatadi",
      "Internet kabelini ishlab chiqaradi",
    ],
    correctAnswer: "Matn yoki rasm yaratishi mumkin",
    explanation: "Generativ AI berilgan so‘rov asosida matn, rasm va boshqa mazmunni yaratishi mumkin.",
  },
];

questionBank.push(
  {
    difficulty: 0,
    category: "QURILMALAR",
    question: "Monitorning asosiy vazifasi nima?",
    options: ["Tasvirni ko‘rsatish", "Ovoz yozish", "Internet tarqatish", "Fayl saqlash"],
    correctAnswer: "Tasvirni ko‘rsatish",
    explanation: "Monitor kompyuterdagi matn, rasm va videoni ekranda ko‘rsatadi.",
  },
  {
    difficulty: 0,
    category: "FAYLLAR",
    question: "Faylni tasodifan o‘chirib yuborsangiz, avval qayerdan qidirasiz?",
    options: ["Recycle Bin yoki Trash", "Brauzer tarixi", "Kalkulyator", "Wi-Fi sozlamalari"],
    correctAnswer: "Recycle Bin yoki Trash",
    explanation: "O‘chirilgan fayl ko‘pincha avval Recycle Bin yoki Trash papkasiga tushadi.",
  },
  {
    difficulty: 1,
    category: "ELEKTRON POCHTA",
    question: "Elektron pochta manzilida odatda qaysi belgi bo‘ladi?",
    options: ["@", "#", "%", "&"],
    correctAnswer: "@",
    explanation: "Email manzilida foydalanuvchi nomi va domenni @ belgisi ajratadi.",
  },
  {
    difficulty: 1,
    category: "WI-FI",
    question: "Wi-Fi tarmoqqa qanday ulanish imkonini beradi?",
    options: [
      "Simsiz ulanish",
      "Qurilmani elektrdan uzish",
      "Ekranni tozalash",
      "Fayllarni avtomatik chop etish",
    ],
    correctAnswer: "Simsiz ulanish",
    explanation: "Wi-Fi qurilmalarga tarmoqqa simsiz ulanish imkonini beradi.",
  },
  {
    difficulty: 2,
    category: "XAVFSIZLIK",
    question: "Ikki bosqichli tasdiqlash (2FA) nimaga yordam beradi?",
    options: [
      "Hisobni qo‘shimcha himoyalashga",
      "Internetni tezlashtirishga",
      "Ekran rangini o‘zgartirishga",
      "Fayl hajmini kattalashtirishga",
    ],
    correctAnswer: "Hisobni qo‘shimcha himoyalashga",
    explanation: "2FA paroldan tashqari yana bir tasdiqlash usulini talab qiladi.",
  },
  {
    difficulty: 2,
    category: "XAVFSIZLIK",
    question: "Notanish odam yuborgan kutilmagan fayl kelsa, nima qilish xavfsizroq?",
    options: [
      "Ochmasdan, jo‘natuvchini tekshirish",
      "Darhol barcha do‘stlarga yuborish",
      "Parolni faylga kiritish",
      "Kompyuter himoyasini o‘chirish",
    ],
    correctAnswer: "Ochmasdan, jo‘natuvchini tekshirish",
    explanation: "Kutilmagan fayl zararli bo‘lishi mumkin; avval kim yuborganini aniqlang.",
  },
  {
    difficulty: 3,
    category: "TEXNIK YORDAM",
    question: "Boshqa qurilmalar internetga ulangan, lekin sizniki ulanmagan. Avval nimani tekshirasiz?",
    options: [
      "Qurilmadagi Wi-Fi yoqilganini",
      "Monitor o‘lchamini",
      "Klaviatura tilini",
      "Fayl nomini",
    ],
    correctAnswer: "Qurilmadagi Wi-Fi yoqilganini",
    explanation: "Muammo bitta qurilmada bo‘lsa, avval uning Wi-Fi ulanishini tekshirish ma’qul.",
  },
  {
    difficulty: 3,
    category: "YANGILANISHLAR",
    question: "Dasturlarni ishonchli manbadan yangilab turish nima uchun kerak?",
    options: [
      "Xavfsizlik va xatolarni tuzatish uchun",
      "Ekran kattaligini oshirish uchun",
      "Barcha fayllarni o‘chirish uchun",
      "Internetni doim bepul qilish uchun",
    ],
    correctAnswer: "Xavfsizlik va xatolarni tuzatish uchun",
    explanation: "Yangilanishlar xavfsizlik muammolarini tuzatishi va dastur ishini yaxshilashi mumkin.",
  },
  {
    difficulty: 4,
    category: "SUN’IY INTELLEKT",
    question: "AI javobida manba ko‘rsatilmagan bo‘lsa, muhim ma’lumot bilan nima qilish kerak?",
    options: [
      "Ishonchli manbadan tekshirish",
      "Uni darhol haqiqat deb qabul qilish",
      "Parol sifatida ishlatish",
      "Boshqa barcha ma’lumotlarni o‘chirish",
    ],
    correctAnswer: "Ishonchli manbadan tekshirish",
    explanation: "AI foydali bo‘lishi mumkin, ammo muhim faktlarni alohida tekshirish lozim.",
  },
  {
    difficulty: 4,
    category: "MA’LUMOTLAR",
    question: "Jadval dasturidagi formula odatda nima uchun ishlatiladi?",
    options: [
      "Qiymatlarni avtomatik hisoblash uchun",
      "Monitorni yoqish uchun",
      "Internet kabelini tekshirish uchun",
      "Rasmni qog‘ozga chizish uchun",
    ],
    correctAnswer: "Qiymatlarni avtomatik hisoblash uchun",
    explanation: "Jadval formulalari sonlar ustida hisob-kitoblarni tez bajarishga yordam beradi.",
  },
);

const questions = window.quizQuestionUtils.selectProgressiveQuestions(questionBank);

const quizCard = document.querySelector("#quiz-card");
const questionText = document.querySelector("#question-text");
const questionLevel = document.querySelector("#quiz-level");
const questionCounter = document.querySelector("#question-counter");
const questionKicker = document.querySelector("#question-kicker");
const answers = document.querySelector("#answers");
const feedback = document.querySelector("#feedback");
const nextButton = document.querySelector("#next-button");
const progress = document.querySelector("#progress");
const progressFill = document.querySelector("#progress-fill");
const scoreElement = document.querySelector("#score");
const streakElement = document.querySelector("#streak");
const confetti = document.querySelector("#confetti");

let currentQuestion = 0;
let score = 0;
let streak = 0;
let answered = false;

function renderQuestion() {
  const question = questions[currentQuestion];
  const number = String(currentQuestion + 1).padStart(2, "0");

  answered = false;
  questionText.textContent = question.question;
  questionLevel.textContent = question.category;
  questionCounter.innerHTML = `${number} <span>/ 20</span>`;
  questionKicker.textContent = `SAVOL ${number}`;
  feedback.textContent = "Javob variantini tanla!";
  feedback.className = "feedback";
  nextButton.disabled = true;
  nextButton.innerHTML = 'Next question <span aria-hidden="true">→</span>';
  answers.replaceChildren(
    ...question.options.map((option, index) => {
      const button = document.createElement("button");
      button.className = "answer";
      button.type = "button";
      button.dataset.answer = String(index);
      button.innerHTML = `<span class="answer__letter">${String.fromCharCode(65 + index)}</span><span>${option}</span>`;
      return button;
    }),
  );
  progress.setAttribute("aria-valuenow", String(currentQuestion));
}

function chooseAnswer(event) {
  const button = event.target.closest(".answer");
  if (!button || answered) return;

  answered = true;
  const selectedAnswer = Number(button.dataset.answer);
  const question = questions[currentQuestion];

  answers.querySelectorAll(".answer").forEach((answerButton) => {
    answerButton.disabled = true;
  });

  if (selectedAnswer === question.answer) {
    score += 5;
    streak += 1;
  } else {
    streak = 0;
  }

  feedback.textContent = "Javob qabul qilindi. Natijang test oxirida ko‘rsatiladi.";
  feedback.className = "feedback";
  progress.setAttribute("aria-valuenow", String(currentQuestion + 1));
  progressFill.style.width = `${((currentQuestion + 1) / questions.length) * 100}%`;
  nextButton.disabled = false;
  if (currentQuestion === questions.length - 1) {
    nextButton.innerHTML = 'See results <span aria-hidden="true">✦</span>';
  }
}

function advanceQuestion() {
  if (!answered) return;
  if (currentQuestion === questions.length - 1) {
    showResults();
    return;
  }
  currentQuestion += 1;
  renderQuestion();
}

function showResults() {
  window.quizExperience.awardCompletion();
  scoreElement.textContent = String(score);
  streakElement.textContent = String(streak);
  const perfectScore = score === 100;
  const title = perfectScore
    ? "ALO! SEN ZO‘RSAN!"
    : score >= 70
      ? "AJOYIB NATIJA!"
      : score >= 40
        ? "YAXSHI ISH!"
        : "YANA BIR BOR URINIB KO‘R!";
  const message = perfectScore
    ? "Barcha savollarga to‘g‘ri javob berding. 100 IQ — zo‘r natija! 🌟"
    : `20 ta savoldan ${score / 5} tasiga to‘g‘ri javob berding. Mashq qilsang, yanada yaxshi bo‘ladi!`;
  const emoji = perfectScore ? "🏆" : score >= 70 ? "🎉" : score >= 40 ? "💪" : "🌱";

  quizCard.innerHTML = `
    <div class="result">
      <div class="result__emoji" aria-hidden="true">${emoji}</div>
      <p class="question-kicker">TEST YAKUNLANDI</p>
      <h2 class="result__title">${title}</h2>
      <p class="result__score">${score}<span> / 100 IQ</span></p>
      <p class="result__message">${message}</p>
      <button class="next-button result__restart" id="restart-button" type="button">
        Play again <span aria-hidden="true">↻</span>
      </button>
    </div>`;

  if (perfectScore) {
    confetti.innerHTML = Array.from({ length: 48 }, (_, index) =>
      `<span class="confetti__piece" style="--i:${index};--hue:${(index * 47) % 360}"></span>`,
    ).join("");
    window.setTimeout(() => confetti.replaceChildren(), 3600);
  }
}

function restartQuiz() {
  window.location.reload();
}

answers.addEventListener("click", chooseAnswer);
nextButton.addEventListener("click", advanceQuestion);
document.addEventListener("click", (event) => {
  if (event.target.closest("#restart-button")) restartQuiz();
});

renderQuestion();
