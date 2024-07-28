import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.min.css';

export function initializeSkillsSwiper() {
  document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 6,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
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

    document.querySelectorAll('.swiper-slide').forEach(slide => {
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
      document.querySelectorAll('.swiper-slide').forEach(s => s.classList.remove('active'));
      slide.classList.add('active');
    }

    function updateActiveSlide() {
      document.querySelectorAll('.swiper-slide').forEach(s => s.classList.remove('active'));
      let activeIndex = swiper.realIndex;
      document.querySelectorAll('.swiper-slide')[activeIndex].classList.add('active');
    }

    // Initialize the active slide on page load
    updateActiveSlide();
  });
}
