// Init EmailJS
(function () {
  emailjs.init({
    publicKey: "S1_6exSxxOa0Ii3HC",
  });
})();

// Contact form submission
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const templateParams = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
        subject: document.getElementById("subject").value,
      };

      emailjs.send("service_h0un01o", "template_iwgzydk", templateParams)
        .then(function () {
          alert("Message sent successfully!");
        })
        .catch(function (error) {
          alert("Oops... something went wrong.");
          console.error("EmailJS error:", error);
        });
    });
  }

  // Year update
  document.getElementById("year").textContent = new Date().getFullYear();

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener("click", e => {
      const tgt = a.getAttribute("href").slice(1);
      if (!tgt) return;
      const el = document.getElementById(tgt);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // Example: quick hire button (if exists)
  const hireBtn = document.getElementById("hireBtn");
  if (hireBtn) {
    hireBtn.addEventListener("click", function () {
      // left blank intentionally
    });
  }
});
