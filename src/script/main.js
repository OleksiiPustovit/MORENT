import Swiper from 'swiper';
// import 'swiper/swiper-bundle.css';

// eslint-disable-next-line no-unused-vars
const swiper = new Swiper('.swiper', {
  spaceBetween: 24,
  loop: true,
  clickable: true,
  breakpoints: {
    1025: {
      slidesPerView: 3,
    },
    200: {
      slidesPerView: 1,
    },
  },
});

document.getElementById('filter-btn').onclick
= function() {
    document.getElementById('sidebar').classList.toggle('sidebar-active');
  };

const slider = new Swiper('.gallery-slider', {
  slidesPerView: 1,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  loopedSlides: 1,
});

const thumbs = new Swiper('.gallery-thumbs', {
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  slideToClickedSlide: true,
});

slider.controller.control = thumbs;
thumbs.controller.control = slider;
