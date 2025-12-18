// Mobile menu toggle
function toggleMenu() {
  document.getElementById("nav-links").classList.toggle("show");
}

// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");
  const button = document.getElementById("submitBtn");

  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    status.textContent = "Sending message...";
    status.style.color = "#aaa";
    button.disabled = true;
    button.textContent = "Sending...";

    const formData = new FormData(form);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/mosesiyanusamson@gmail.com",
        {
          method: "POST",
          headers: { "Accept": "application/json" },
          body: formData
        }
      );

      const data = await response.json();

      if (response.ok) {
        status.textContent = "Message sent successfully!";
        status.style.color = "lime";
        form.reset();
      } else {
        status.textContent = "Something went wrong. Try again.";
        status.style.color = "red";
      }

    } catch (err) {
      status.textContent = "Network error. Try again later.";
      status.style.color = "red";
    } finally {
      button.disabled = false;
      button.textContent = "Send Message";
    }
  });
});
