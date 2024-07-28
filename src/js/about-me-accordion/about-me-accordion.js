
import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

export function initializeAccordionAboutMe() {
  document.addEventListener('DOMContentLoaded', () => {
    const accordion = new Accordion('.acoordion-about-me-container', {
      duration: 400,
      showMultiple: true,
      elementClass: 'accordion-button-list',
      triggerClass: 'about-me-accordion-button',
      panelClass: 'content-about-me',
      activeClass: 'is-active',
    });

    setTimeout(() => {
      const firstPanel = document.querySelector('.accordion-button-list');
      if (firstPanel) {
        firstPanel.classList.add('is-active');
        const firstContent = firstPanel.querySelector('.content-about-me');
        if (firstContent) {
          firstContent.style.height = firstContent.scrollHeight + 'px';
          firstContent.classList.add('is-active');
        }
      }
    }, 100); 
  });   
}






