export function initNavigation() {
  const currentPage =
    window.location.pathname.split("/").pop() || "index.html";

  const navLinks = document.querySelectorAll(".header__link");

  navLinks.forEach((link) => {
    const linkPage = link.getAttribute("href");

    link.classList.toggle(
      "active",
      linkPage === currentPage
    );
  });
}