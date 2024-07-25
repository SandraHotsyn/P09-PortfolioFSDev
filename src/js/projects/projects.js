import Swiper from 'swiper';
import 'swiper/css';

const swiper = new Swiper('.swiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next-project',
    prevEl: '.swiper-button-prev-project',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

swiper.on('slideChange', () => {
  document.querySelector('.swiper-button-prev').disabled = swiper.isBeginning;
  document.querySelector('.swiper-button-next').disabled = swiper.isEnd;
});
