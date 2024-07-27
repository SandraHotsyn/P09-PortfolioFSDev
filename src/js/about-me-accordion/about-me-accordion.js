import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

export function initializeAccordionAboutMe() {
  document.addEventListener('DOMContentLoaded', () => {
    new Accordion('.acoordion-about-me-container', {
      duration: 400,
      showMultiple: true,
      elementClass: 'accordion-button-list',
      triggerClass: 'about-me-accordion-button',
      panelClass: 'content-about-me',
      activeClass: 'is-active',
    });
  });
}



