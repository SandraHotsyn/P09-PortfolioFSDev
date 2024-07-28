import 'animate.css';

const goTopBtn = document.querySelector('.scroll-up');

goTopBtn.addEventListener('click', goTop);
window.addEventListener('scroll', trackScroll);

export function trackScroll() {
  const offset = window.scrollY;
  const coords = document.documentElement.clientHeight;
  if (offset > coords) {
    goTopBtn.classList.add('go-top--show');
  } else {
    goTopBtn.classList.remove('go-top--show');
  }
}

export function goTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}
