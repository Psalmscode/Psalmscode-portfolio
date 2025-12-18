// Mobile menu toggle
function toggleMenu() {
  const nav = document.getElementById("nav-links");
  if (nav) nav.classList.toggle("show");
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");
  const button = document.getElementById("submitBtn");

  // Safety check
  if (!form || !status || !button) {
    console.error("Form elements not found");
    return;
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    status.textContent = "Sending message...";
    status.style.color = "#aaa";
    button.disabled = true;

    const formData = new FormData(form);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/mosesiyanusamson@gmail.com",
        {
          method: "POST",
          headers: {
            Accept: "application/json"
          },
          body: formData
        }
      );

      const result = await response.json();

      if (response.ok && result.success === "true") {
        status.textContent = "Message sent successfully!";
        status.style.color = "lime";
        form.reset();
      } else {
        status.textContent = "Message failed. Please try again.";
        status.style.color = "red";
        console.error(result);
      }
    } catch (error) {
      status.textContent = "Network error. Try again later.";
      status.style.color = "red";
      console.error(error);
    } finally {
      button.disabled = false;
    }
  });
});
