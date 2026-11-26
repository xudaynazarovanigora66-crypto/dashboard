const experience = window.quizExperience.getExperience();
const level = Math.floor(experience / 5) + 1;
const progressInLevel = experience % 5;

document.querySelector("#exp-total").textContent = String(experience);
document.querySelector("#exp-level").textContent = String(level);
document.querySelector("#exp-next").textContent =
  progressInLevel === 0
    ? "Keyingi darajaga 5 EXP qoldi"
    : `Keyingi darajagacha ${5 - progressInLevel} EXP`;
document.querySelector("#exp-progress-fill").style.width = `${(progressInLevel / 5) * 100}%`;
document.querySelector("#exp-progress").setAttribute("aria-valuenow", String(progressInLevel));
