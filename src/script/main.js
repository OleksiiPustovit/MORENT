import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';

// eslint-disable-next-line no-unused-vars
const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination],
  slidesPerView: 3,
  spaceBetween: 24,
  loop: true,
  clickable: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

/* import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

const swiper = new Swiper('.swiper', {
  slidesPerView: 4,
  spaceBetween: 19,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
 */
