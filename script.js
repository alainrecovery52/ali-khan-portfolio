const roles = [
  "Front-End Web Developer",
  "Web Designer",
  "JavaScript Learner"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

const roleElement = document.querySelector(".hero h3");

function typeRole() {
  const currentRole = roles[roleIndex];

  if (!deleting) {
    roleElement.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentRole.length) {
      deleting = true;
      setTimeout(typeRole, 1500);
      return;
    }
  } else {
    roleElement.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  setTimeout(typeRole, deleting ? 60 : 100);
}

typeRole();
// ===== Smooth Scroll =====

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      e.preventDefault();

      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});


// ===== Scroll Reveal Animation =====

const sections = document.querySelectorAll("section");

const revealOnScroll = () => {
  sections.forEach(section => {
    const position = section.getBoundingClientRect().top;

    if (position < window.innerHeight - 100) {
      section.classList.add("show");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


// ===== Current Year =====

const yearElement = document.querySelector("footer p");

if (yearElement) {
  yearElement.innerHTML =
    `© ${new Date().getFullYear()} Ali Khan | All Rights Reserved.`;
}
// ===== Dark / Light Mode =====

const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    themeToggle.textContent =
      document.body.classList.contains("light-mode")
        ? "🌙"
        : "☀️";
  });
}
