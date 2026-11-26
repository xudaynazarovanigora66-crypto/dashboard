const questionBanks = {
  ru: [
    {
      category: "SO‘ZLAR",
      question: "Какое слово используют при встрече?",
      options: ["Привет", "Пока", "Спасибо", "Извините"],
      correctAnswer: "Привет",
      explanation: "“Привет” — salomlashganda ishlatiladi.",
    },
    {
      category: "SO‘ZLAR",
      question: "Какое слово является местоимением?",
      options: ["Она", "Читать", "Быстро", "Красный"],
      correctAnswer: "Она",
      explanation: "“Она” — kishilik olmoshi.",
    },
    {
      category: "SO‘ZLAR",
      question: "Какое слово обозначает животное?",
      options: ["Кошка", "Стол", "Книга", "Окно"],
      correctAnswer: "Кошка",
      explanation: "“Кошка” — mushuk degani.",
    },
    {
      category: "KUNLAR",
      question: "Какой день идёт после понедельника?",
      options: ["Вторник", "Пятница", "Воскресенье", "Среда"],
      correctAnswer: "Вторник",
      explanation: "Понедельник dan keyin Вторник keladi.",
    },
    {
      category: "RANGLAR",
      question: "Какого цвета снег?",
      options: ["Белый", "Синий", "Зелёный", "Красный"],
      correctAnswer: "Белый",
      explanation: "“Белый” — oq rang.",
    },
    {
      category: "GRAMMATIKA",
      question: "Выберите правильное слово: «Я ___ чай».",
      options: ["Пью", "Пьёт", "Пить", "Пьём"],
      correctAnswer: "Пью",
      explanation: "“Я” bilan “пью” ishlatiladi.",
    },
    {
      category: "SONLAR",
      question: "Сколько месяцев в году?",
      options: ["Двенадцать", "Семь", "Десять", "Пять"],
      correctAnswer: "Двенадцать",
      explanation: "Bir yilda o‘n ikki oy bor.",
    },
    {
      category: "SO‘ZLAR",
      question: "Какое слово противоположно слову «большой»?",
      options: ["Маленький", "Длинный", "Быстрый", "Добрый"],
      correctAnswer: "Маленький",
      explanation: "“Большой” — katta, “маленький” — kichik.",
    },
    {
      category: "GEOGRAFIYA",
      question: "Как называется столица России?",
      options: ["Москва", "Казань", "Сочи", "Минск"],
      correctAnswer: "Москва",
      explanation: "Rossiyaning poytaxti — Москва.",
    },
    {
      category: "SALOMLASHISH",
      question: "Как правильно поздороваться утром?",
      options: ["Доброе утро", "Спокойной ночи", "До свидания", "Пока"],
      correctAnswer: "Доброе утро",
      explanation: "Ertalab “Доброе утро” deb salomlashiladi.",
    },
    {
      category: "SO‘Z TURKUMLARI",
      question: "Какое слово обозначает действие?",
      options: ["Бежать", "Красивый", "Синий", "Большой"],
      correctAnswer: "Бежать",
      explanation: "“Бежать” — yugurmoq, ya’ni harakatni bildiradi.",
    },
    {
      category: "GRAMMATIKA",
      question: "Выберите правильное слово: «У меня ___ яблока».",
      options: ["Три", "Третий", "Троих", "Третья"],
      correctAnswer: "Три",
      explanation: "“Три яблока” — to‘g‘ri birikma.",
    },
    {
      category: "GRAMMATIKA",
      question: "Какое слово стоит во множественном числе?",
      options: ["Столы", "Стол", "Окно", "Книга"],
      correctAnswer: "Столы",
      explanation: "“Столы” — ko‘plik shakli.",
    },
    {
      category: "TINISH BELGILARI",
      question: "Какой знак ставят в конце вопроса?",
      options: ["?", ".", "!", ","],
      correctAnswer: "?",
      explanation: "So‘roq gap oxirida savol belgisi qo‘yiladi.",
    },
    {
      category: "GRAMMATIKA",
      question: "Выберите правильное слово: «Они ___ в школе».",
      options: ["Учатся", "Учится", "Учусь", "Учиться"],
      correctAnswer: "Учатся",
      explanation: "“Они” bilan “учатся” shakli ishlatiladi.",
    },
    {
      category: "SO‘ZLAR",
      question: "Что означает слово «спасибо»?",
      options: ["Благодарность", "Приветствие", "Вопрос", "Прощание"],
      correctAnswer: "Благодарность",
      explanation: "“Спасибо” — minnatdorchilik bildirish so‘zi.",
    },
    {
      category: "OY NOMLARI",
      question: "Какой месяц идёт после января?",
      options: ["Февраль", "Март", "Декабрь", "Июль"],
      correctAnswer: "Февраль",
      explanation: "Январь dan keyin Февраль keladi.",
    },
    {
      category: "RANGLAR",
      question: "Какое слово обозначает цвет?",
      options: ["Зелёный", "Быстро", "Книга", "Бежать"],
      correctAnswer: "Зелёный",
      explanation: "“Зелёный” — yashil rang.",
    },
    {
      category: "SO‘ZLAR",
      question: "Что можно читать?",
      options: ["Книгу", "Воду", "Окно", "Собаку"],
      correctAnswer: "Книгу",
      explanation: "Kitobni o‘qish mumkin; rus tilida “книгу”.",
    },
    {
      category: "GAP TUZISH",
      question: "Выберите правильное предложение.",
      options: ["Я люблю читать.", "Я любить читать.", "Я любит читать.", "Я читают."],
      correctAnswer: "Я люблю читать.",
      explanation: "“Я люблю читать” — grammatik jihatdan to‘g‘ri gap.",
    },
  ],
  uz: [
    {
      category: "SO‘ZLAR",
      question: "“Salom” so‘zi qaysi ma’noda ishlatiladi?",
      options: ["Ko‘rishganda", "Xayrlashganda", "Rahmat aytganda", "Kechirim so‘raganda"],
      correctAnswer: "Ko‘rishganda",
      explanation: "“Salom” — ko‘rishganda aytiladigan so‘z.",
    },
    {
      category: "ALIFBO",
      question: "Quyidagilardan qaysi biri unli harf?",
      options: ["A", "B", "D", "K"],
      correctAnswer: "A",
      explanation: "A — o‘zbek tilidagi unli harflardan biri.",
    },
    {
      category: "IMLO",
      question: "“Kitob” so‘zining ko‘plik shakli qaysi?",
      options: ["Kitoblar", "Kitobni", "Kitobdan", "Kitobga"],
      correctAnswer: "Kitoblar",
      explanation: "Ko‘plik shakli odatda “-lar” qo‘shimchasi bilan yasaladi.",
    },
    {
      category: "SO‘ZLAR",
      question: "“Katta” so‘zining qarama-qarshi ma’nosi qaysi?",
      options: ["Kichik", "Uzun", "Baland", "Tez"],
      correctAnswer: "Kichik",
      explanation: "“Katta” so‘zining antonimi — “kichik”.",
    },
    {
      category: "TINISH BELGILARI",
      question: "Darak gap oxiriga odatda qaysi belgi qo‘yiladi?",
      options: [".", "?", ",", ":"],
      correctAnswer: ".",
      explanation: "Darak gap oxirida nuqta qo‘yiladi.",
    },
    {
      category: "SO‘ZLAR",
      question: "Olma nimaga kiradi?",
      options: ["Mevaga", "Hayvonga", "Kiyimga", "Transportga"],
      correctAnswer: "Mevaga",
      explanation: "Olma — meva.",
    },
    {
      category: "GRAMMATIKA",
      question: "“Men maktabga ___.” Gapni to‘g‘ri to‘ldiring.",
      options: ["boraman", "borasan", "boradi", "bordim"],
      correctAnswer: "boraman",
      explanation: "“Men” olmoshi bilan “boraman” ishlatiladi.",
    },
    {
      category: "SO‘Z TURKUMLARI",
      question: "Quyidagilardan qaysi biri fe’l?",
      options: ["Yugurmoq", "Chiroyli", "Ko‘k", "Katta"],
      correctAnswer: "Yugurmoq",
      explanation: "“Yugurmoq” harakatni bildiradi, demak u fe’l.",
    },
    {
      category: "MATEMATIKA",
      question: "Ikki bilan uchni qo‘shsak, nechchi bo‘ladi?",
      options: ["Besh", "To‘rt", "Olti", "Uch"],
      correctAnswer: "Besh",
      explanation: "2 + 3 = 5, ya’ni besh.",
    },
    {
      category: "SONLAR",
      question: "Bir haftada necha kun bor?",
      options: ["Yetti", "Besh", "O‘n", "O‘n ikki"],
      correctAnswer: "Yetti",
      explanation: "Bir haftada yetti kun bor.",
    },
    {
      category: "ALIFBO",
      question: "Qaysi so‘z undosh harf bilan boshlanadi?",
      options: ["Bola", "Olma", "Uzum", "Ari"],
      correctAnswer: "Bola",
      explanation: "“Bola” so‘zi undosh B harfi bilan boshlanadi.",
    },
    {
      category: "GRAMMATIKA",
      question: "“O‘quvchilar” so‘zining birlik shakli qaysi?",
      options: ["O‘quvchi", "O‘quvchilarni", "O‘quvchidan", "O‘quvchiga"],
      correctAnswer: "O‘quvchi",
      explanation: "Birlik shakli — “o‘quvchi”.",
    },
    {
      category: "GAP TUZISH",
      question: "Qaysi gap so‘roq gap?",
      options: ["Sen bugun kelasanmi?", "Men uyga bordim.", "U kitob o‘qiydi.", "Havo yaxshi."],
      correctAnswer: "Sen bugun kelasanmi?",
      explanation: "So‘roq gap savolni bildiradi va savol belgisi bilan tugaydi.",
    },
    {
      category: "SO‘ZLAR",
      question: "“Ona” so‘zi kimni bildiradi?",
      options: ["Oila a’zosini", "Kasb nomini", "Hayvon nomini", "Rang nomini"],
      correctAnswer: "Oila a’zosini",
      explanation: "Ona — oiladagi yaqin inson.",
    },
    {
      category: "FASLLAR",
      question: "Qaysi faslda havo ko‘pincha issiq bo‘ladi?",
      options: ["Yozda", "Qishda", "Kuzda", "Bahorda"],
      correctAnswer: "Yozda",
      explanation: "Yoz fasli odatda yilning eng issiq davri bo‘ladi.",
    },
    {
      category: "SO‘ZLAR",
      question: "“Chiroyli” so‘ziga ma’nodosh so‘zni toping.",
      options: ["Go‘zal", "Xunuk", "Kichik", "Sekin"],
      correctAnswer: "Go‘zal",
      explanation: "“Chiroyli” va “go‘zal” ma’nodosh so‘zlar.",
    },
    {
      category: "SO‘ZLAR",
      question: "“Tez” so‘zining qarama-qarshi ma’nosi qaysi?",
      options: ["Sekin", "Chaqqon", "Yengil", "Baland"],
      correctAnswer: "Sekin",
      explanation: "“Tez” so‘zining antonimi — “sekin”.",
    },
    {
      category: "ALIFBO",
      question: "Qaysi so‘zda “o‘” harfi bor?",
      options: ["O‘rik", "Olma", "Uzum", "Anor"],
      correctAnswer: "O‘rik",
      explanation: "“O‘rik” so‘zi o‘ harfi bilan yoziladi.",
    },
    {
      category: "GAP TUZISH",
      question: "Gap nimalardan tuziladi?",
      options: ["So‘zlardan", "Faqat harflardan", "Faqat raqamlardan", "Faqat belgilardan"],
      correctAnswer: "So‘zlardan",
      explanation: "Gap so‘zlardan tuziladi va tugallangan fikrni bildiradi.",
    },
    {
      category: "GRAMMATIKA",
      question: "“Men kitob ___.” Gapni to‘g‘ri to‘ldiring.",
      options: ["o‘qiyman", "o‘qiysan", "o‘qiydi", "o‘qiding"],
      correctAnswer: "o‘qiyman",
      explanation: "“Men” olmoshi bilan “o‘qiyman” shakli mos keladi.",
    },
  ],
};

questionBanks.ru.push(
  {
    difficulty: 0,
    category: "MUOMALA",
    question: "Что нужно сказать, когда вам помогли?",
    options: ["Спасибо", "Извините", "До свидания", "Спокойной ночи"],
    correctAnswer: "Спасибо",
    explanation: "Yordam uchun minnatdorchilik bildirishda “Спасибо” deyiladi.",
  },
  {
    difficulty: 0,
    category: "SO‘ZLAR",
    question: "Как по-русски «suv»?",
    options: ["Вода", "Хлеб", "Дом", "День"],
    correctAnswer: "Вода",
    explanation: "“Вода” — suv degani.",
  },
  {
    difficulty: 1,
    category: "GRAMMATIKA",
    question: "Выберите правильное слово: «Мы каждый день ___ в школу».",
    options: ["Ходим", "Ходит", "Хожу", "Ходят"],
    correctAnswer: "Ходим",
    explanation: "“Мы” olmoshi bilan “ходим” shakli ishlatiladi.",
  },
  {
    difficulty: 1,
    category: "SIFATLAR",
    question: "Какое слово описывает морозный день?",
    options: ["Холодный", "Холодно", "Холод", "Холодить"],
    correctAnswer: "Холодный",
    explanation: "“Холодный” — otni tavsiflaydigan sifat.",
  },
  {
    difficulty: 2,
    category: "GRAMMATIKA",
    question: "Выберите правильное слово: «Утром я ___ завтрак».",
    options: ["Ем", "Ест", "Ешь", "Едем"],
    correctAnswer: "Ем",
    explanation: "“Я” bilan “ем” fe’li ishlatiladi.",
  },
  {
    difficulty: 2,
    category: "SAVOL BERISH",
    question: "Как правильно спросить, где находится остановка?",
    options: [
      "Где находится остановка?",
      "Когда остановка находится?",
      "Кто остановка находится?",
      "Почему находится остановка?",
    ],
    correctAnswer: "Где находится остановка?",
    explanation: "Joyni so‘rash uchun “Где находится остановка?” deyiladi.",
  },
  {
    difficulty: 3,
    category: "O‘TGAN ZAMON",
    question: "Выберите правильное слово: «Вчера они ___ в музей».",
    options: ["Ходили", "Ходят", "Ходим", "Ходить"],
    correctAnswer: "Ходили",
    explanation: "“Вчера” o‘tgan vaqtni bildiradi, bu gapda “ходили” mos keladi.",
  },
  {
    difficulty: 3,
    category: "PREDLOGLAR",
    question: "Выберите правильное слово: «Я живу ___ Ташкенте».",
    options: ["В", "На", "Под", "Из"],
    correctAnswer: "В",
    explanation: "Shahar nomi bilan bu gapda “в Ташкенте” ishlatiladi.",
  },
  {
    difficulty: 4,
    category: "GRAMMATIKA",
    question: "Выберите правильное слово: «Если у меня будет время, я ___ тебе».",
    options: ["Позвоню", "Звонит", "Звонил", "Звонить"],
    correctAnswer: "Позвоню",
    explanation: "Bu shartli gapda kelajakdagi harakat uchun “позвоню” ishlatiladi.",
  },
  {
    difficulty: 4,
    category: "GRAMMATIKA",
    question: "Выберите правильное слово: «У меня нет ___».",
    options: ["Времени", "Время", "Временем", "Времена"],
    correctAnswer: "Времени",
    explanation: "“Нет” so‘zidan keyin bu birikmada “времени” shakli keladi.",
  },
);

questionBanks.uz.push(
  {
    difficulty: 0,
    category: "MUOMALA",
    question: "Yordam bergan kishiga nima deyiladi?",
    options: ["Rahmat", "Xayr", "Kechirasiz", "Xayrli tun"],
    correctAnswer: "Rahmat",
    explanation: "Minnatdorchilik bildirish uchun “rahmat” deyiladi.",
  },
  {
    difficulty: 0,
    category: "MUOMALA",
    question: "Mehmon uyga kirganda odob bilan qanday salom beradi?",
    options: ["Assalomu alaykum", "Xayrli tun", "Ko‘rishguncha", "Marhamat"],
    correctAnswer: "Assalomu alaykum",
    explanation: "Uyga kirganda “Assalomu alaykum” deb salom berish odobli muomala hisoblanadi.",
  },
  {
    difficulty: 1,
    category: "GRAMMATIKA",
    question: "“Biz har kuni maktabga ___.” Gapni to‘ldiring.",
    options: ["boramiz", "boraman", "borasan", "boradi"],
    correctAnswer: "boramiz",
    explanation: "“Biz” olmoshi bilan “boramiz” shakli mos keladi.",
  },
  {
    difficulty: 1,
    category: "SO‘ZLAR",
    question: "“Do‘st” so‘zining ko‘plik shakli qaysi?",
    options: ["Do‘stlar", "Do‘stni", "Do‘stdan", "Do‘stga"],
    correctAnswer: "Do‘stlar",
    explanation: "“Do‘st” so‘zining ko‘plik shakli “do‘stlar”.",
  },
  {
    difficulty: 2,
    category: "KUNDALIK HAYOT",
    question: "Havo sovuq bo‘lsa, qaysi kiyim foydaliroq?",
    options: ["Issiq kiyim", "Yozgi futbolka", "Suv kiyimi", "Yupqa shippak"],
    correctAnswer: "Issiq kiyim",
    explanation: "Sovuq havoda issiq kiyim tanani sovuqdan asraydi.",
  },
  {
    difficulty: 2,
    category: "SO‘Z TURKUMLARI",
    question: "“U kitobni o‘qidi” gapida fe’l qaysi?",
    options: ["o‘qidi", "kitobni", "u", "gapida"],
    correctAnswer: "o‘qidi",
    explanation: "“O‘qidi” bajarilgan harakatni bildiradi, demak u fe’l.",
  },
  {
    difficulty: 3,
    category: "GAP TUZISH",
    question: "“Agar vaqt topsam, sizga ___.” Gapni to‘ldiring.",
    options: ["qo‘ng‘iroq qilaman", "qo‘ng‘iroq qildi", "qo‘ng‘iroq qilyapsiz", "qo‘ng‘iroq qilasan"],
    correctAnswer: "qo‘ng‘iroq qilaman",
    explanation: "“Men” nazarda tutilgan, shuning uchun “qo‘ng‘iroq qilaman” mos keladi.",
  },
  {
    difficulty: 3,
    category: "SO‘ROQ SO‘ZLARI",
    question: "“Kitobni kutubxonadan oldim” gapida “kutubxonadan” qaysi so‘roqqa javob bo‘ladi?",
    options: ["Qayerdan?", "Qayerga?", "Qachon?", "Kim bilan?"],
    correctAnswer: "Qayerdan?",
    explanation: "“-dan” qo‘shimchasi bu gapda chiqish joyini bildiradi: qayerdan?",
  },
  {
    difficulty: 4,
    category: "TINISH BELGILARI",
    question: "Qaysi tinish belgisi gapni to‘g‘ri yozadi: “Aziza daftar oldi ___ Bek esa qalam oldi.”",
    options: [",", ".", "?", ":"],
    correctAnswer: ",",
    explanation: "Bu qo‘shma gap qismlarini vergul bilan ajratish mumkin.",
  },
  {
    difficulty: 4,
    category: "GAP BO‘LAKLARI",
    question: "“Daraxtlar bahorda yashil yaproqlar chiqaradi” gapida ega qaysi?",
    options: ["Daraxtlar", "bahorda", "yashil", "chiqaradi"],
    correctAnswer: "Daraxtlar",
    explanation: "Harakatni bajaruvchi “daraxtlar” — gapning egasi.",
  },
);

const language = new URLSearchParams(window.location.search).get("lang") === "ru" ? "ru" : "uz";
const isRussian = language === "ru";
const questionBank = questionBanks[language];
const questions = window.quizQuestionUtils.selectProgressiveQuestions(questionBank);

document.documentElement.lang = language;
document.title = isRussian ? "Rus tili testi — Til sinovi" : "O‘zbek tili testi — Til sinovi";
document.querySelector("#language-name").textContent = isRussian ? "Rus tilini" : "O‘zbek tilini";
document.querySelector("#language-emoji").textContent = isRussian ? "🇷🇺" : "🇺🇿";
document.querySelector("#language-label").textContent = isRussian ? "RUS TILI TESTI" : "O‘ZBEK TILI TESTI";

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
