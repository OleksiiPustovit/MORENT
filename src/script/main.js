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

// eslint-disable-next-line no-unused-vars
const swiper1 = new Swiper('.mySwiper', {
  spaceBetween: 10,
  slidesPerView: 3,
  freeMode: true,
});

// eslint-disable-next-line no-unused-vars
const swiper2 = new Swiper('.mySwiper2', {
  spaceBetween: 10,
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: swiper,
  },
});
