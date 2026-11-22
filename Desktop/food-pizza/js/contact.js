document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("[data-contact-form]");
  const status = document.querySelector("[data-contact-status]");
  if (!form || !status) return;
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const button = form.querySelector('button[type="submit"]');
    button.disabled = true;
    status.className = "order-status is-pending";
    status.textContent = PizzaApp.translate("buy.sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name").trim(),
          phone: data.get("phone").trim(),
          message: data.get("message").trim(),
          language: PizzaApp.currentLanguage()
        })
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Contact request failed.");
      form.reset();
      status.className = "order-status is-success";
      status.textContent = PizzaApp.translate("buy.sent");
    } catch (error) {
      console.error("Could not send contact message:", error);
      status.className = "order-status is-error";
      status.textContent = error.message;
    } finally {
      button.disabled = false;
    }
  });
});
