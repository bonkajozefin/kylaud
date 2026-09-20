// Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("active");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.textContent = isOpen ? "✕" : "☰";
  });

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.textContent = "☰";
    });
  });
}

// Dynamic copyright year
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Region accordion (Global Presence page)
document.querySelectorAll(".region-item").forEach((item) => {
  const head = item.querySelector(".region-item-head");
  if (!head) return;
  head.addEventListener("click", () => {
    const isActive = item.classList.contains("active");
    document.querySelectorAll(".region-item").forEach((i) => i.classList.remove("active"));
    if (!isActive) item.classList.add("active");
  });
});
