import Swiper from 'swiper';
import 'swiper/css';
// import Swiper from 'swiper/bundle';
// import 'swiper/swiper-bundle.min.css';

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
      direction: 'horizontal',
      loop: true,
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 16,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
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
  })
  .catch(error => {
    console.log('Not found', error);
  });
