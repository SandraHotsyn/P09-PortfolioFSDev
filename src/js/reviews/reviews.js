import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import 'swiper/css';
// import Swiper from 'swiper/bundle';
// import 'swiper/swiper-bundle.min.css';

export function reviewSection() {
  const createMarkup = ({ review, avatar_url, author }) => {
    return `<li class="rev-list-item ">
        <img src="${avatar_url}" alt="${author}" class="rev-item-img">
        <h3 class="rev-item-title">${author}</h3>
        <p class="rev-item-text">${review}</p>
      </li>`;
  };

  const createList = arrayList => {
    return arrayList.map(createMarkup).join('');
  };

  const list = document.querySelector('.reviews-list');
  fetch('https://portfolio-js.b.goit.study/api/reviews')
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }

      return response.json();
    })
    .then(data => {
      const createListMarkup = createList(data);
      list.insertAdjacentHTML('beforeend', createListMarkup);

      const swiper = new Swiper('.swiper-container', {
        modules: [Navigation, Pagination],
        direction: 'horizontal',
        loop: true,
        // slidesPerView: 4,
        // slidesPerGroup: 4,
        // spaceBetween: 16,
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 20,
          },
          1440: {
            slidesPerView: 4,
            slidesPerGroup: 1,
            spaceBetween: 20,
          },
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        scrollbar: {
          el: '.swiper-scrollbar',
          draggable: true,
        },
      });
      const revBtnNextEl = document.querySelector('.rev-right-btn ');

      revBtnNextEl.style.color = '#FAFAFA';
      revBtnNextEl.style.position = 'static';
      revBtnNextEl.style.width = '64px';
      revBtnNextEl.style.height = '64px';
      revBtnNextEl.style.margin = '0';
      revBtnNextEl.style.display = 'flex';
      const revBtnPrevEl = document.querySelector('.rev-left-btn ');
      revBtnPrevEl.style.position = 'static';
      revBtnPrevEl.style.width = '64px';
      revBtnPrevEl.style.height = '64px';
      revBtnPrevEl.style.color = '#FAFAFA';
      revBtnPrevEl.style.margin = '0';
      revBtnPrevEl.style.display = 'flex';
    })
    .catch(error => {
      console.log('Not found', error);
    });
}

function noReviews() {
  const createMarkup = `<li class="rev-list-item ">
        <img src="${avatar_url}" alt="${author}" class="rev-item-img">
        <h3 class="rev-item-title">${author}</h3>
        <p class="rev-item-text">${review}</p>
      </li>`;
}
