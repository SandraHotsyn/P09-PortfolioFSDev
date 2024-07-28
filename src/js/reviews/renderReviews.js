const refs = {
  reviewList: document.querySelector('.reviews-list'),
};

export function renderReviewsSuccess(arr) {
  const markup = arr
    .map(
      ({ author, avatar_url, review }) =>
        `<li class="reviews-wrap swiper-slide">
            <img src="${avatar_url}" alt="${author}" class="reviews-img" width='48' height='48' />
            <div class='reviews-content'>
              <h3 class="reviews-subtitle" >${author}</h3>
              <p class="reviews-text" >${review}</p>
            </div>
          </li>`
    )
    .join('');

  refs.reviewList.innerHTML = markup;
}

export function renderReviewsError() {
  const markup = `
        <li class="reviews-wrap reviews-wrap--error swiper-slide">
          <p class="reviews-text">Not found</p>
        </li>`;

  refs.reviewList.innerHTML = markup;
}
