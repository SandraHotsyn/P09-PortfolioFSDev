import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

export function initializeAccordion() {
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.faq-list .faq-item').forEach(element => {
      const header = element.querySelector('.faq-header');
      const button = element.querySelector('.faq-btn-trigger');
      const content = element.querySelector('.faq-content');
      const openIcon = button.querySelector('.faq-btn-open');
      const closeIcon = button.querySelector('.faq-btn-close');
      openIcon.style.display = 'block';
      closeIcon.style.display = 'none';
      content.style.maxHeight = '0';
      content.style.opacity = '0';
      content.style.overflow = 'hidden';

      header.addEventListener('click', () => {
        const isActive = element.classList.contains('active');

        if (isActive) {
          content.style.maxHeight = content.scrollHeight + 'px';
          content.style.opacity = '1';
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              content.style.maxHeight = '0';
              content.style.opacity = '0';
            });
          });
          openIcon.style.display = 'block';
          closeIcon.style.display = 'none';
        } else {
          content.style.maxHeight = content.scrollHeight + 'px';
          content.style.opacity = '1';
          openIcon.style.display = 'none';
          closeIcon.style.display = 'block';
        }
        element.classList.toggle('active');
      });
    });
  });
}
