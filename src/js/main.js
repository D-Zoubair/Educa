/* Variables */
let openNav = document.querySelector("#open-nav");
let closeNav = document.querySelector("#close-nav");
let navbar = document.querySelector(".header .navbar");
let btnRegister = document.querySelector("#btn-register");
let btnLogin = document.querySelector("#btn-login");
let login = document.querySelector("#login");
let register = document.querySelector("#register");
let openLogReg = document.querySelector("#open-logReg");
let closeLogReg = document.querySelector("#close-logReg");
let loginRegisterForm = document.querySelector(".account-form");

/* Functions */

// Open and close navbar menu in mobile size
openNav.onclick = () => {
  navbar.classList.add("active");
};

closeNav.onclick = () => {
  navbar.classList.remove("active");
};

// Focus on the active button and change shape depending on the button focuses
btnRegister.onclick = () => {
  btnRegister.classList.add("active");
  btnLogin.classList.remove("active");
  login.classList.remove("active");
  register.classList.add("active");
};

btnLogin.onclick = () => {
  btnLogin.classList.add("active");
  btnRegister.classList.remove("active");
  register.classList.remove("active");
  login.classList.add("active");
};

// Open and close login/register form
openLogReg.onclick = () => {
  loginRegisterForm.classList.add("active");
};

closeLogReg.onclick = () => {
  loginRegisterForm.classList.remove("active");
};

var swiper = new Swiper(".hero__silder", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  grapCursor: true,
});

var swiper = new Swiper(".courses__slider", {
  loop: true,
  grapCursor: true,
  spaceBetween: 20,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});
