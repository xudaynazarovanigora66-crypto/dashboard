(() => {
  const storageKey = "til-sinovi-experience";

  function getExperience() {
    const storedValue = Number(window.localStorage.getItem(storageKey));
    return Number.isSafeInteger(storedValue) && storedValue >= 0 ? storedValue : 0;
  }

  function awardCompletion() {
    const experience = getExperience() + 1;
    window.localStorage.setItem(storageKey, String(experience));
    return experience;
  }

  window.quizExperience = {
    getExperience,
    awardCompletion,
  };
})();
