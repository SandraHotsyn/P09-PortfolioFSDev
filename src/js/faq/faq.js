import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

export function initializeAccordion() {
  document.addEventListener('DOMContentLoaded', () => {
    new Accordion('.accordion-container', {
      duration: 400,
      showMultiple: true,
      elementClass: 'ac',
      triggerClass: 'ac-trigger',
      panelClass: 'ac-panel',
      activeClass: 'is-active',
    });
  });
}

const applyStyles = (selector, styles) => {
  document.querySelectorAll(selector).forEach(element => {
    Object.assign(element.style, styles);
  });
};

applyStyles('.ac-trigger, .ac-text', { color: '#fafafa' });
applyStyles('.ac-panel, .ac', { backgroundColor: '#1c1d20' });
applyStyles('.ac', { border: '0px solid #eee' });
