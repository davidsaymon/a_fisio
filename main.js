const menu = document.querySelector(".menu");
const navMenu = document.querySelector(".nav-menu");

menu.addEventListener("click", () => {
  menu.classList.toggle("ativo");
  navMenu.classList.toggle("ativo");
});

document.addEventListener("DOMContentLoaded", function() {
  const scrollToTopBtn = document.getElementById("scroll-to-top");

  scrollToTopBtn.addEventListener("click", function() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});