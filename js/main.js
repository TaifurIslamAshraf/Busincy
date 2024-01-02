import Aos from "aos";
import "aos/dist/aos.css";

//Init Aos Animations
Aos.init({
  duration: 700,
  offset: 100,
});

//init licid icon
lucide.createIcons();

//pathname
export const pathName = () => {
  return window.location.pathname;
};

export const homeHeaderMobileActive = () => {
  //header active mobile
  const headerMobile = document.getElementById("mobile_menu");
  const homeNav = document.querySelector(".home-nav");
  const homeNavLi = document.querySelector(".home-nav").querySelectorAll("li");

  headerMobile.addEventListener("click", function () {
    homeNav.classList.toggle("active-mobile");
    headerMobile.classList.toggle("active-fa-bars");

    if (pathName() !== "/") {
      homeNav.classList.add("my_nav");
    }
  });

  // active pages
  const currentPath = pathName();

  homeNavLi.forEach((li) => {
    const anchor = li.querySelector("a");
    if (anchor) {
      const href = anchor.getAttribute("href");
      if (href === currentPath) {
        li.classList.add("active-path");
      }
    }
  });
};

//   testimonials swiper
export const testimonialsSwiperSlider = () => {
  const testimonialSwiper = new Swiper(".testimonialSwiper", {
    //    navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    //   },
  });

  const testimonialSwiperNextBtn = document.querySelector(
    ".testimonials-swiper-button-next"
  );
  const testimonialSwiperPrevBtn = document.querySelector(
    ".testimonials-swiper-button-prev"
  );

  testimonialSwiperNextBtn.addEventListener("click", function () {
    testimonialSwiper.slideNext();
  });
  testimonialSwiperPrevBtn.addEventListener("click", function () {
    testimonialSwiper.slidePrev();
  });
};

//home team swiper Swiper
export const teamSwiperSlider = () => {
  const teamSwiper = new Swiper(".home_team-swiper", {
    slidesPerView: 3,
    spaceBetween: 40,
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      480: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
  });
  //handling custop swiper button
  document
    .querySelector(".custom-swiper-button-prev")
    .addEventListener("click", function () {
      teamSwiper.slideNext();
    });
  document
    .querySelector(".custom-swiper-button-next")
    .addEventListener("click", function () {
      teamSwiper.slidePrev();
    });
};
