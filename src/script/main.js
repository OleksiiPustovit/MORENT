import Swiper from 'swiper';

// eslint-disable-next-line no-unused-vars
const swiper = new Swiper('.swiper', {
  spaceBetween: 24,
  loop: true,
  clickable: true,
  breakpoints: {
    1025: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 1.5,
      spaceBetween: 16,
    },
    200: {
      slidesPerView: 1.5,
      spaceBetween: 16,
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

slider.params.control = thumbs;
thumbs.params.control = slider;
