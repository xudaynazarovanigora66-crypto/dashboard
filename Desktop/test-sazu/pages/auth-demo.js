document.querySelectorAll("[data-auth-form]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const message = document.querySelector("#auth-message");

    if (form.dataset.authForm === "signup") {
      const password = form.elements.namedItem("password").value;
      const confirmation = form.elements.namedItem("confirm-password").value;
      if (password !== confirmation) {
        message.textContent = "Parollar bir-biriga mos kelmadi.";
        message.className = "auth-message auth-message--error";
        return;
      }
      message.textContent =
        "Account yaratilmadi: backend ulanmagan. Ma’lumotlaringiz saqlanmadi.";
    } else {
      message.textContent =
        "Login tasdiqlanmadi: backend ulanmagan. Ma’lumotlaringiz saqlanmadi.";
    }

    message.className = "auth-message auth-message--info";
  });
});
