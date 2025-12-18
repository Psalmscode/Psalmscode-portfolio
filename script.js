// Mobile menu toggle
function toggleMenu() {
  document.getElementById("nav-links").classList.toggle("show");
}

const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");
const button = document.getElementById("submitBtn");

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
        body: formData,
        headers: {
          Accept: "application/json"
        }
      }
    );

    const result = await response.json();

    if (response.ok) {
      status.textContent = "Message sent successfully!";
      status.style.color = "lime";
      form.reset();
    } else {
      status.textContent = "Failed to send message.";
      status.style.color = "red";
    }
  } catch (err) {
    status.textContent = "Network error.";
    status.style.color = "red";
  } finally {
    button.disabled = false;
  }
});
