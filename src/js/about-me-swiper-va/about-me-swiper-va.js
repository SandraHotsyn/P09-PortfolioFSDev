import Swiper, { Navigation, Keyboard } from 'swiper';
import 'swiper/swiper-bundle.css';

Swiper.use([Navigation, Keyboard]);

export function initializeSkillsSwiper() {
  document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.about-me-swiper .swiper-container', {
      slidesPerView: 6,
      spaceBetween: 0,
      loop: true,
      navigation: {
        nextEl: '.about-me-swiper .swiper-button-next',
      },
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      simulateTouch: true,
      on: {
        slideChangeTransitionEnd: function () {
          updateActiveSlide();
        }
      }
    });

    document.querySelectorAll('.about-me-swiper .swiper-slide').forEach(slide => {
      slide.addEventListener('click', () => {
        setActiveSlide(slide);
      });

      slide.addEventListener('focus', () => {
        setActiveSlide(slide);
      });

      slide.addEventListener('mouseover', () => {
        setActiveSlide(slide);
      });
    });

    function setActiveSlide(slide) {
      document.querySelectorAll('.about-me-swiper .swiper-slide').forEach(s => s.classList.remove('active'));
      slide.classList.add('active');
    }

    function updateActiveSlide() {
      document.querySelectorAll('.about-me-swiper .swiper-slide').forEach(s => s.classList.remove('active'));
      let activeIndex = swiper.realIndex;
      document.querySelectorAll('.about-me-swiper .swiper-slide')[activeIndex].classList.add('active');
    }

    updateActiveSlide();
  });
}
