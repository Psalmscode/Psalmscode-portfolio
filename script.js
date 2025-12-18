function toggleMenu() {
  document.getElementById("nav-links").classList.toggle("show");
}

(function () {
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");
  const button = document.getElementById("submitBtn") || document.querySelector('button[type="submit"]');

  if (!form) return;

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    if (status) {
      status.textContent = "Sending message...";
      status.style.color = "#aaa";
    }
    if (button) {
      button.disabled = true;
      button.textContent = "Sending...";
    }

    const formData = new FormData(form);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/mosesiyanusamson@gmail.com",
        {
          method: "POST",
          headers: {
            "Accept": "application/json"
          },
          body: formData
        }
      );

      const data = await response.json();

      if (response.ok) {
        if (status) {
          status.textContent = "Message sent successfully!";
          status.style.color = "lime";
        }
        form.reset();
      } else {
        if (status) {
          status.textContent = "Something went wrong. Please try again.";
          status.style.color = "red";
        }
      }
    } catch (error) {
      if (status) {
        status.textContent = "Network error. Try again later.";
        status.style.color = "red";
      }
    } finally {
      if (button) {
        button.disabled = false;
        button.textContent = "Send Message";
      }
    }
  });
})();