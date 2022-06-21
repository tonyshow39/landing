const mobileMenuBtn = document.getElementById("mobile-btn");
const mobileMenu = document.getElementById("mobile-menu");
const mobileMenuCloseBtn = document.querySelector(".menu__close-btn");

const cb = (event) => {
  mobileMenu.classList.toggle("menu_mobile-open");
};

mobileMenuBtn.addEventListener("click", cb);
mobileMenuCloseBtn.addEventListener("click", cb);
