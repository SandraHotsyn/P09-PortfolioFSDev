import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

function initializeAccordionAboutMe() {
  document.addEventListener('DOMContentLoaded', () => {
    const acrdnItems = document.querySelectorAll('.acrdn-button-list');

    acrdnItems.forEach((item, index) => {
      const button = item.querySelector('.about-me-acrdn-button');
      const content = item.querySelector('.content-about-me');
      const iconUp = button.querySelector('.icon-arrow-up');
      const iconDown = button.querySelector('.icon-arrow-down');

      button.addEventListener('click', () => {
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
      });

      if (index === 0) {
        item.classList.add('is-active');
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
};
initializeAccordionAboutMe();


// import Accordion from 'accordion-js';
// import 'accordion-js/dist/accordion.min.css';

// export function initializeAccordionAboutMe() {
//   document.addEventListener('DOMContentLoaded', () => {
//     const acrdnItems = document.querySelectorAll('.acrdn-button-list');

//     acrdnItems.forEach((item, index) => {
//       const button = item.querySelector('.about-me-acrdn-button');
//       const content = item.querySelector('.content-about-me');
//       const iconUse = button.querySelector('svg use');

//       button.addEventListener('click', () => {
//         const isActive = item.classList.contains('is-active');

//         if (isActive) {
//           item.classList.remove('is-active');
//           content.style.height = '0px';
//           if (iconUse) {
//             iconUse.setAttribute('href', '/img/sprite/icons.svg#icon-arrow-down');
//           }
//         } else {
//           item.classList.add('is-active');
//           content.style.height = content.scrollHeight + 'px';
//           if (iconUse) {
//             iconUse.setAttribute('href', '/img/sprite/icons.svg#icon-arrow-up');
//           }
//         }
//       });

//       if (index === 0) {
//         item.classList.add('is-active');
//         content.style.height = content.scrollHeight + 'px';
//         if (iconUse) {
//           iconUse.setAttribute('href', '/img/sprite/icons.svg#icon-arrow-up');
//         }
//       } else {
//         content.style.height = '0px';
//       }
//     });
//   });
// }
