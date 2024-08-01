import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const btnNextEl = document.querySelector('.swiper-button-next ');
btnNextEl.style.color = '#1c1d20';
btnNextEl.style.position = 'static';
btnNextEl.style.width = '64px';
btnNextEl.style.height = '64px';
btnNextEl.style.margin = '0';
btnNextEl.style.border = '1px solid rgba(250, 250, 250, 0.5)';
btnNextEl.style.borderRadius = '60px';

const btnPrevEl = document.querySelector('.swiper-button-prev ');
btnPrevEl.style.position = 'static';
btnPrevEl.style.width = '64px';
btnPrevEl.style.height = '64px';
btnPrevEl.style.color = '#1c1d20';
btnPrevEl.style.margin = '0';
btnPrevEl.style.border = '1px solid rgba(250, 250, 250, 0.5)';
btnPrevEl.style.borderRadius = '60px';

export const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 15,
  loop: false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
});

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
