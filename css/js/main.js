/* ============================================
   Maison Élan — Shared site behaviour
   ============================================ */

// Mobile nav toggle
document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("navToggle");
  const mainNav = document.getElementById("mainNav");

  if (navToggle && mainNav) {
    navToggle.addEventListener("click", () => {
      const isOpen = mainNav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  // Contact form (front-end only — no backend yet, just a friendly confirmation)
  const contactForm = document.getElementById("contactForm");
  const formStatus = document.getElementById("formStatus");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = contactForm.name.value.trim();
      const email = contactForm.email.value.trim();
      const message = contactForm.message.value.trim();

      if (!name || !email || !message) {
        showStatus("Please fill in every field before sending.", true);
        return;
      }

      // In a real deployment, this is where you'd send the data to a
      // backend endpoint or a service like Formspree. For now, we just
      // confirm receipt locally.
      showStatus(`Thanks, ${name} — we've received your message and will reply soon.`, false);
      contactForm.reset();
    });
  }

  function showStatus(text, isError) {
    if (!formStatus) return;
    formStatus.textContent = text;
    formStatus.style.color = isError ? "#a33636" : "#3f6b3f";
    formStatus.classList.add("visible");
  }
});
