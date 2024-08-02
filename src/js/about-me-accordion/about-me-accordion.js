import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

export function initializeAccordionAboutMe() {
  document.addEventListener('DOMContentLoaded', () => {
    const accordionItems = document.querySelectorAll('.acrdn-button-list');

    accordionItems.forEach((item) => {
      const button = item.querySelector('.about-me-acrdn-button');
      const content = item.querySelector('.content-about-me');
      const iconUp = button.querySelector('.about-me-btn-open');
      const iconDown = button.querySelector('.about-me-btn-close');

      const toggleAccordion = () => {
        const isActive = item.classList.contains('is-active');

        if (isActive) {
          item.classList.remove('is-active');
          content.style.height = '0px';
          iconUp.classList.remove('visible');
          iconDown.classList.add('visible');
        } else {
          item.classList.add('is-active');
          content.style.height = content.scrollHeight + 'px';
          iconUp.classList.add('visible');
          iconDown.classList.remove('visible');
        }
      };

      button.addEventListener('click', toggleAccordion);

      if (item.classList.contains('is-active')) {
        content.style.height = content.scrollHeight + 'px';
        iconUp.classList.add('visible');
        iconDown.classList.remove('visible');
      } else {
        content.style.height = '0px';
        iconUp.classList.remove('visible');
        iconDown.classList.add('visible');
      }
    });
  });
}


