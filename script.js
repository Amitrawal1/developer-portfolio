const profileLinks = {
  github: "#",
  linkedin: "#",
  email: "your-email@example.com"
};

const setContactLinks = () => {
  const githubLink = document.getElementById("github-link");
  const linkedinLink = document.getElementById("linkedin-link");
  const emailLink = document.getElementById("email-link");

  githubLink.href = profileLinks.github;
  linkedinLink.href = profileLinks.linkedin;
  emailLink.href = `mailto:${profileLinks.email}`;
};

const setupMobileNav = () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");
  const navAnchors = navLinks.querySelectorAll("a");

  menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isExpanded));
    navLinks.classList.toggle("open");
  });

  navAnchors.forEach((anchor) => {
    anchor.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
};

document.addEventListener("DOMContentLoaded", () => {
  setContactLinks();
  setupMobileNav();
});
