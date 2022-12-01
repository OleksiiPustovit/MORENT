import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';

// eslint-disable-next-line no-unused-vars
const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination],
  slidesPerView: 'auto',
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

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
