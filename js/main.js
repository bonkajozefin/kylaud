// Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("active");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Dynamic copyright year
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Pre-select the sector on the enquiry form from ?sector=finance|business|ngo|other
const sectorSelect = document.getElementById("sector");
const sectorParam = new URLSearchParams(window.location.search).get("sector");
if (sectorSelect && sectorParam) {
  sectorSelect.value = sectorParam;
}

// Submit enquiry forms in the background so visitors stay on the page
document.querySelectorAll("form.contact-form").forEach((form) => {
  const status = form.querySelector(".form-status");
  const submit = form.querySelector('button[type="submit"]');

  const show = (message, isError) => {
    if (!status) return;
    status.textContent = message;
    status.classList.toggle("error", isError);
    status.classList.add("show");
  };

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (submit) submit.disabled = true;

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        form.reset();
        show("Thank you. Your message has been sent. We reply within one business day.", false);
      } else {
        const data = await response.json().catch(() => ({}));
        const detail = data.errors ? data.errors.map((e) => e.message).join(", ") : "";
        show(detail || "Sorry, something went wrong. Please email info@kylaud.com instead.", true);
      }
    } catch (error) {
      show("Sorry, we couldn't send your message. Please email info@kylaud.com instead.", true);
    } finally {
      if (submit) submit.disabled = false;
    }
  });
});
