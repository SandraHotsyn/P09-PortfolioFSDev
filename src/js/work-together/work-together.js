import { formToJSON } from 'axios';
import post from './api';

const refs = {
  footerForm: document.querySelector('.footer-form'),
  footerResponceHeader: document.querySelector('.footer-modal-header'),
  footerResponceParagr: document.querySelector('.footer-modal-p'),
  footerBtnClose: document.querySelector('.footer-close-btn'),
  footerBackdrop: document.querySelector('.backdropp'),
};

const {
  footerForm,
  footerResponceHeader,
  footerResponceParagr,
  footerBtnClose,
  footerBackdrop,
} = refs;

footerForm.addEventListener('submit', e => {
  e.preventDefault();
  renderBackdrop(
    e.target.elements.email.value,
    e.target.elements.comment.value
  );
  listeners();
});

function listeners() {
  window.addEventListener('keydown', e => {
    if (e.code === 'Escape') {
      toggleBackdrop();
    }
  });
  footerBackdrop.addEventListener('click', e => {
    if (e.target === footerBackdrop) {
      toggleBackdrop();
    }
  });
  footerBtnClose.addEventListener('click', toggleBackdrop);
}

async function renderBackdrop(email, comment) {
  const input = email.trim();
  const message = comment.trim();
  try {
    const resp = await post({ input, message });
    console.log(resp);
    if (typeof resp === `string`) {
      footerResponceParagr.textContent = resp;
      toggleBackdrop();
      return;
    }
    addHTML(resp);
    toggleBackdrop();
    footerForm.reset();
  } catch (error) {
    console.log(error);
  }
}

function addHTML({ title, message }) {
  if (!message) {
    footerResponceParagr.textContent = `${message}`;
  }
  footerResponceHeader.textContent = `${title}`;
  footerResponceParagr.textContent = `${message}`;
}

function toggleBackdrop() {
  footerBackdrop.classList.toggle('backdropp-hidden');
}
