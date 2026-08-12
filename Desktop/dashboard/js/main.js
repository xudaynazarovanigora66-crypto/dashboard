document.getElementById("menuButton").addEventListener("click", function () {
  var sidebar = document.getElementById("sidebar");
  if (sidebar.style.width === "300px") {
    sidebar.style.width = "0";
  } else {
    sidebar.style.width = "300px";
  }
});
let modeBtn = document.getElementById("mode-btn");

modeBtn.addEventListener("click", function () {
  if (document.body.className != "dark") {
    this.firstElementChild.src = "images/light.svg";
  } else {
    this.firstElementChild.src = "images/dark.svg";
  }
  document.body.classList.toggle("dark");
});
