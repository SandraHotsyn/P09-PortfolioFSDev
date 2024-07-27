import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const btnNextEl = document.querySelector('.swiper-button-next');
btnNextEl.style.color = '#FAFAFA';
btnNextEl.style.background = '#1C1D20';
btnNextEl.style.padding = '18px';
export const swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
