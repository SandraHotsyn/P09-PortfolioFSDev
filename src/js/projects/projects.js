import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const btnNextEl = document.querySelector('.swiper-button-next ');
btnNextEl.style.color = '#FAFAFA';
btnNextEl.style.position = 'static';
btnNextEl.style.width = '64px';
btnNextEl.style.height = '64px';
btnNextEl.style.margin = '0';
const btnPrevEl = document.querySelector('.swiper-button-prev ');
btnPrevEl.style.position = 'static';
btnPrevEl.style.width = '64px';
btnPrevEl.style.height = '64px';
btnPrevEl.style.color = '#FAFAFA';
btnPrevEl.style.margin = '0';

function upSwiperSlideDisplay() {
  const swiperSlides = document.querySelectorAll('.swiper-slide');
  if (window.innerWidth >= 1440) {
    swiperSlides.forEach(slide => {
      slide.style.display = 'flex';
    });
  } else {
    swiperSlides.forEach(slide => {
      slide.style.display = 'block';
    });
  }
}
upSwiperSlideDisplay();
window.addEventListener('resize', upSwiperSlideDisplay);

export const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  // spaceBetween: 30,
  loop: false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  // breakpoints: {
  //   320: {
  //     slidesPerView: 1,
  //   },
  //   1400: {
  //     slidesPerView: 1,
  //   },
  // },
});
