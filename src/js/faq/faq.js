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
      content.style.display = 'none';
      header.addEventListener('click', () => {
        const isVisible = content.style.display === 'block';
        content.style.display = isVisible ? 'none' : 'block';
        openIcon.style.display = isVisible ? 'block' : 'none';
        closeIcon.style.display = isVisible ? 'none' : 'block';
      });
    });
  });
}
