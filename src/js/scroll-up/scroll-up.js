const goTopBtn = document.querySelector('.scroll-up');

goTopBtn.addEventListener('click', goTop);
window.addEventListener('scroll', trackScroll);

export function trackScroll() {
  const offset = window.pageXOffset;
  coords = document.documentElement.clientHeight;
  if (offset > coords) {
    goTopBtn.classList.add('go-top--show');
  } else {
    goTopBtn.classList.remove('go-top--show');
  }
}

export function goTop() {
  if (window.pageYOffset > 0) {
    window.scrollBy(0, -75);
    setTimeout(goTop, 10);
  }
}
