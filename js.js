document.addEventListener("DOMContentLoaded", function () {
  //слайдер в конце
  new Swiper(".swiper-container", {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    //нужно правильно настроить html
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
    },
  });
});

//слайдер в начале
const swiper = new Swiper(".custom-swiper-container", {
  loop: true,
  pagination: {
    el: ".custom-swiper-pagination",
    clickable: true,
    bulletClass: "swiper-pagination-bullet",
    bulletActiveClass: "swiper-pagination-bullet-active",
  },
});
const burgerMenu = document.querySelector(".burger-menu");
const closeMenu = document.querySelector(".close-menu");
const mobileNav = document.querySelector(".mobile-nav");

burgerMenu.addEventListener("click", function () {
  this.classList.toggle("active");
  mobileNav.classList.toggle("active");
});

closeMenu.addEventListener("click", function () {
  burgerMenu.classList.remove("active");
  mobileNav.classList.remove("active");
});
