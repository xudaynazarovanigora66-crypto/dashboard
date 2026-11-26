(() => {
  const difficultyCount = 5;
  const questionsPerDifficulty = 4;

  function shuffle(items) {
    const shuffledItems = [...items];
    for (let index = shuffledItems.length - 1; index > 0; index -= 1) {
      const swapIndex = Math.floor(Math.random() * (index + 1));
      [shuffledItems[index], shuffledItems[swapIndex]] = [
        shuffledItems[swapIndex],
        shuffledItems[index],
      ];
    }
    return shuffledItems;
  }

  function selectProgressiveQuestions(questionBank) {
    const questions = Array.from({ length: difficultyCount }, (_, difficulty) => {
      const availableQuestions = questionBank.filter((question, index) => {
        const questionDifficulty = Number.isInteger(question.difficulty)
          ? question.difficulty
          : Math.floor(index / questionsPerDifficulty);
        return questionDifficulty === difficulty;
      });

      if (availableQuestions.length < questionsPerDifficulty) {
        throw new Error(`Not enough questions for difficulty level ${difficulty + 1}.`);
      }

      return shuffle(availableQuestions).slice(0, questionsPerDifficulty);
    }).flat();

    return questions.map((question) => {
      const correctAnswer = Number.isInteger(question.answer)
        ? question.options[question.answer]
        : question.correctAnswer;
      const options = shuffle(question.options);
      const answer = options.indexOf(correctAnswer);

      if (answer === -1 || options.length !== 4) {
        throw new Error(`Invalid answer choices for question: ${question.question}`);
      }

      return { ...question, options, answer };
    });
  }

  window.quizQuestionUtils = { selectProgressiveQuestions };
})();
