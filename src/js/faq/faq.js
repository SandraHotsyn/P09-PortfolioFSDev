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

document.querySelectorAll('.ac-trigger').forEach(trigger => {
  trigger.style.color = '#fafafa';
});

document.querySelectorAll('.ac-panel').forEach(panel => {
  panel.style.backgroundColor = '#1c1d20';
});

document.querySelectorAll('.ac-text').forEach(text => {
  text.style.color = '#fafafa';
});
