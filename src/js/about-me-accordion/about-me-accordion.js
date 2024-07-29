import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

export function initializeAccordionAboutMe() {
  document.addEventListener('DOMContentLoaded', () => {
    const accordionItems = document.querySelectorAll('.accordion-button-list');

    accordionItems.forEach((item, index) => {
      const button = item.querySelector('.about-me-accordion-button');
      const content = item.querySelector('.content-about-me');
      const iconUse = button.querySelector('svg use');

      button.addEventListener('click', () => {
        const isActive = item.classList.contains('is-active');

        if (isActive) {
          item.classList.remove('is-active');
          content.style.height = '0px';
          if (iconUse) {
            iconUse.setAttribute('href', '/img/sprite/icons.svg#icon-arrow-down');
          }
        } else {
          item.classList.add('is-active');
          content.style.height = content.scrollHeight + 'px';
          if (iconUse) {
            iconUse.setAttribute('href', '/img/sprite/icons.svg#icon-arrow-up');
          }
        }
      });

      if (index === 0) {
        item.classList.add('is-active');
        content.style.height = content.scrollHeight + 'px';
        if (iconUse) {
          iconUse.setAttribute('href', '/img/sprite/icons.svg#icon-arrow-up');
        }
      } else {
        content.style.height = '0px';
      }
    });
  });
}







