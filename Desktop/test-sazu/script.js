const questionBank = [
  {
    question: "What is “hello”?",
    options: ["A greeting", "A color", "An animal", "A number"],
    answer: 0,
    explanation: "“Hello” — salomlashish uchun ishlatiladi.",
  },
  {
    question: "She ___ a student.",
    options: ["am", "is", "are", "be"],
    answer: 1,
    explanation: "“She” bilan “is” ishlatiladi.",
  },
  {
    question: "Which one is an animal?",
    options: ["A chair", "A book", "A cat", "A cup"],
    answer: 2,
    explanation: "“Cat” — mushuk, ya’ni hayvon.",
  },
  {
    question: "I ___ apples.",
    options: ["like", "likes", "liking", "liked"],
    answer: 0,
    explanation: "“I” bilan “like” ishlatiladi: I like apples.",
  },
  {
    question: "What color is grass?",
    options: ["Blue", "Green", "Pink", "Black"],
    answer: 1,
    explanation: "“Grass” — o‘t, “green” esa yashil degani.",
  },
  {
    question: "He ___ two brothers.",
    options: ["have", "is", "has", "are"],
    answer: 2,
    explanation: "“He” bilan “has” ishlatiladi.",
  },
  {
    question: "What is the plural of “book”?",
    options: ["Bookes", "Book", "Books", "Book's"],
    answer: 2,
    explanation: "“Book” so‘zining ko‘plik shakli “books”.",
  },
  {
    question: "They ___ friends.",
    options: ["are", "is", "am", "be"],
    answer: 0,
    explanation: "“They” bilan “are” ishlatiladi.",
  },
  {
    question: "What is the opposite of “big”?",
    options: ["Long", "Small", "Fast", "Happy"],
    answer: 1,
    explanation: "“Big” — katta, “small” esa kichik degani.",
  },
  {
    question: "What do you drink when you are thirsty?",
    options: ["Water", "A shoe", "A book", "A chair"],
    answer: 0,
    explanation: "Chanqaganda suv ichamiz. “Water” — suv.",
  },
  {
    question: "We ___ football after school.",
    options: ["plays", "playing", "play", "played"],
    answer: 2,
    explanation: "“We” bilan “play” ishlatiladi: “We play football.”",
  },
  {
    question: "Where ___ you from?",
    options: ["is", "are", "am", "be"],
    answer: 1,
    explanation: "“You” bilan “are” ishlatiladi: “Where are you from?”",
  },
  {
    question: "She has three ___.",
    options: ["cat", "cates", "cats", "cat's"],
    answer: 2,
    explanation: "Uchta mushuk — “three cats”. Ko‘plikda so‘zga “s” qo‘shiladi.",
  },
  {
    question: "I can ___ a bike.",
    options: ["ride", "rides", "riding", "rode"],
    answer: 0,
    explanation: "“Can” dan keyin fe’lning oddiy shakli keladi: “ride”.",
  },
  {
    question: "What day comes after Monday?",
    options: ["Sunday", "Friday", "Tuesday", "Saturday"],
    answer: 2,
    explanation: "“Monday” dan keyin “Tuesday” keladi.",
  },
  {
    question: "He ___ TV every evening.",
    options: ["watch", "watching", "watches", "watched"],
    answer: 2,
    explanation: "“He” bilan hozirgi zamonda fe’lga “-es” qo‘shiladi: “watches”.",
  },
  {
    question: "There ___ a book on the desk.",
    options: ["are", "is", "am", "be"],
    answer: 1,
    explanation: "Bitta kitob bor, shuning uchun “there is” ishlatiladi.",
  },
  {
    question: "I am ___ years old.",
    options: ["ten", "tens", "tenth", "tenly"],
    answer: 0,
    explanation: "Yoshni aytganda son ishlatiladi: “I am ten years old.”",
  },
  {
    question: "They are ___ football now.",
    options: ["play", "plays", "played", "playing"],
    answer: 3,
    explanation: "“Are” bilan hozir davom etayotgan ishga “playing” ishlatiladi.",
  },
  {
    question: "Choose the correct sentence.",
    options: [
      "It is seven o'clock.",
      "It are seven o'clock.",
      "It seven o'clock.",
      "It am seven o'clock.",
    ],
    answer: 0,
    explanation: "Soatni aytganda “It is…” deb boshlaymiz.",
  },
];

questionBank.push(
  {
    difficulty: 0,
    question: "What do you say when you meet someone in the morning?",
    options: ["Good morning", "Good night", "Goodbye", "Thank you"],
    answer: 0,
    explanation: "Ertalab ko‘rishganda “Good morning” deyiladi.",
  },
  {
    difficulty: 0,
    question: "Which word means “maktab”?",
    options: ["School", "Station", "Kitchen", "Garden"],
    answer: 0,
    explanation: "“School” — maktab degani.",
  },
  {
    difficulty: 1,
    question: "Tom ___ breakfast at seven every day.",
    options: ["has", "have", "having", "is have"],
    answer: 0,
    explanation: "“Tom” bilan hozirgi oddiy zamonda “has” ishlatiladi.",
  },
  {
    difficulty: 1,
    question: "Could I have ___ water, please?",
    options: ["some", "many", "a", "few"],
    answer: 0,
    explanation: "Suv sanalmaydigan ot, shu sababli bu iltimosda “some water” ishlatiladi.",
  },
  {
    difficulty: 2,
    question: "Look! The children ___ in the park.",
    options: ["are playing", "plays", "played", "is playing"],
    answer: 0,
    explanation: "Hozir sodir bo‘layotgan ish uchun “are playing” ishlatiladi.",
  },
  {
    difficulty: 2,
    question: "How do I get to the station? Go ___ and turn left.",
    options: ["straight", "hungry", "careful", "yesterday"],
    answer: 0,
    explanation: "Yo‘l ko‘rsatishda “go straight” — to‘g‘ri yurish degani.",
  },
  {
    difficulty: 3,
    question: "Last weekend, we ___ our grandparents.",
    options: ["visited", "visit", "visiting", "visits"],
    answer: 0,
    explanation: "“Last weekend” o‘tgan vaqtni bildiradi, shuning uchun “visited” to‘g‘ri.",
  },
  {
    difficulty: 3,
    question: "You look tired. You ___ get some rest.",
    options: ["should", "did", "are", "was"],
    answer: 0,
    explanation: "Maslahat berishda “should” — “kerak” ma’nosida ishlatiladi.",
  },
  {
    difficulty: 4,
    question: "If it ___ tomorrow, we’ll stay at home.",
    options: ["rains", "rain", "raining", "rained"],
    answer: 0,
    explanation: "Birinchi shart gapida “if” qismida “it rains” ishlatiladi.",
  },
  {
    difficulty: 4,
    question: "I have lived here ___ 2022.",
    options: ["since", "for", "at", "during"],
    answer: 0,
    explanation: "Boshlanish vaqtini ko‘rsatishda “since 2022” ishlatiladi.",
  },
);

const difficultyLevels = ["ENG OSON", "OSON", "KEYINGI BOSQICH", "KEYINGI BOSQICH", "SO‘NGGI SAVOLLAR"];
const questions = window.quizQuestionUtils.selectProgressiveQuestions(questionBank);

const questionText = document.querySelector("#question-text");
const questionLevel = document.querySelector("#quiz-level");
const questionCounter = document.querySelector("#question-counter");
const questionKicker = document.querySelector("#question-kicker");
const answers = document.querySelector("#answers");
const feedback = document.querySelector("#feedback");
const nextButton = document.querySelector("#next-button");
const progress = document.querySelector(".progress");
const progressFill = document.querySelector("#progress-fill");
const scoreElement = document.querySelector("#score");
const streakElement = document.querySelector("#streak");
const quizCard = document.querySelector(".quiz-card");
const confetti = document.querySelector("#confetti");

let currentQuestion = 0;
let score = 0;
let streak = 0;
let hasAnswered = false;

function renderQuestion() {
  const item = questions[currentQuestion];
  const questionNumber = String(currentQuestion + 1).padStart(2, "0");

  hasAnswered = false;
  questionText.textContent = item.question;
  questionLevel.textContent = difficultyLevels[Math.floor(currentQuestion / 4)];
  questionCounter.innerHTML = `${questionNumber} <span>/ 20</span>`;
  questionKicker.textContent = `SAVOL ${questionNumber}`;
  feedback.textContent = "Javobni tanla!";
  feedback.className = "feedback";
  nextButton.disabled = true;
  nextButton.innerHTML = 'Next question <span aria-hidden="true">→</span>';
  answers.replaceChildren(
    ...item.options.map((option, index) => {
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
  if (!button || hasAnswered) return;

  hasAnswered = true;
  const selectedAnswer = Number(button.dataset.answer);
  const item = questions[currentQuestion];
  answers.querySelectorAll(".answer").forEach((answerButton) => {
    answerButton.disabled = true;
  });

  if (selectedAnswer === item.answer) {
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

function showResults() {
  window.quizExperience.awardCompletion();
  scoreElement.textContent = String(score);
  streakElement.textContent = String(streak);
  const perfectScore = score === 100;
  const resultTitle = perfectScore
    ? "ALO! SEN ZO‘RSAN!"
    : score >= 70
      ? "AJOYIB NATIJA!"
      : score >= 40
        ? "YAXSHI ISH!"
        : "YANA BIR BOR URINIB KO‘R!";
  const resultMessage = perfectScore
    ? "100 IQ! Barcha savollarga to‘g‘ri javob berding. Sen haqiqiy yulduzsan! 🌟"
    : `${questions.length} ta savoldan ${score / 5} tasiga to‘g‘ri javob berding. Yana bir bor urinib ko‘r!`;
  const resultEmoji = perfectScore ? "🏆" : score >= 70 ? "🎉" : score >= 40 ? "💪" : "🌱";

  quizCard.innerHTML = `
    <div class="result">
      <div class="result__emoji" aria-hidden="true">${resultEmoji}</div>
      <p class="question-kicker">TEST YAKUNLANDI</p>
      <h2 class="result__title">${resultTitle}</h2>
      <p class="result__score">${score}<span> / 100 IQ</span></p>
      <p class="result__message">${resultMessage}</p>
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

function advanceQuestion() {
  if (!hasAnswered) return;
  if (currentQuestion === questions.length - 1) {
    showResults();
    return;
  }
  currentQuestion += 1;
  renderQuestion();
}

function restartQuiz() {
  window.location.reload();
}

document.querySelector("#answers").addEventListener("click", chooseAnswer);
document.querySelector("#next-button").addEventListener("click", advanceQuestion);
document.addEventListener("click", (event) => {
  if (event.target.closest("#restart-button")) restartQuiz();
});

renderQuestion();
