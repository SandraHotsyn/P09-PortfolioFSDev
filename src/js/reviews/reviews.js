import axios from 'axios';
import { renderReviewsError, renderReviewsSuccess } from './renderReviews';
import Swiper from 'swiper';
import { Keyboard, Navigation } from 'swiper/modules';

export function reviewSection() {
  const swiperReviews = new Swiper('.reviews-swiper', {
    modules: [Navigation, Keyboard],
    navigation: {
      nextEl: '.reviews-swiper-button-right',
      prevEl: '.reviews-swiper-button-left',
    },

    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        // spaceBetween: 0,
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 16,
      },
      1440: {
        slidesPerView: 4,
        slidesPerGroup: 1,
        spaceBetween: 16,
      },
    },
  });

  async function fetchReviews() {
    return (await axios.get(`https://portfolio-js.b.goit.study/api/reviews`))
      .data;
  }

  async function getReviews() {
    try {
      const responseReviews = await fetchReviews();
      renderReviewsSuccess(responseReviews);
    } catch (error) {
      onError();
      renderReviewsError();
    }
  }

  getReviews();

  function onError() {
    iziToast.error({
      title: 'Error',
      message: 'Sorry, there are no reviews!',
      theme: 'dark',
      color: 'rgb(239, 64, 64)',
    });
  }
}
