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

    applyStyles('.ac-trigger', {
      position: 'relative',
    });

    applyCustomStyles();
  });
}

const applyStyles = (selector, styles) => {
  document.querySelectorAll(selector).forEach(element => {
    Object.assign(element.style, styles);
  });
};

applyStyles('.ac-trigger, .ac-text', { color: '#fafafacc' });
applyStyles('.ac-panel, .ac', { backgroundColor: '#1c1d20' });
applyStyles('.ac', { border: '0px solid #fafafa' });

const applyCustomStyles = () => {
  const styleElement = document.createElement('style');
  styleElement.textContent = `
    .ac .ac-trigger::after {
      content: '>';
      text-align: center;
      width: 34px;
      height: 34px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px solid rgba(250, 250, 250, 0.2);
      border-radius: 50%;
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
      pointer-events: none; /* Ensures the pseudo-element does not interfere with clicks */
    }
    
    .ac.is-active > .ac-header .ac-trigger::after {
      content: '^';
    }

    .ac .ac-trigger:focus {
      color: #8a8a8a;
    }

    @media only screen and (min-width: 768px) {
      .ac .ac-trigger::after {
        width: 40px;
        height: 40px;
      }
    }
  `;
  document.head.append(styleElement);
};
