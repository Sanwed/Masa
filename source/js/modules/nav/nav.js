import {accordions} from '../../vendor/init-accordion.js';

const body = document.body;
const overlays = document.querySelectorAll('[data-overlay]');
const navBtn = document.querySelector('[data-nav="button"]');
const nav = document.querySelector('[data-nav="nav"]');
const navItems = nav.querySelectorAll('[data-nav="link"]');

const toggleNav = () => {
  body.classList.toggle('overflow');
  navBtn.classList.toggle('is-active');
  overlays.forEach((el) => {
    el.classList.toggle('is-opened');
  });
};

const closeNav = () => {
  body.classList.remove('overflow');
  navBtn.classList.remove('is-active');
  overlays.forEach((el) => {
    el.classList.remove('is-opened');
  });
};

const initNav = () => {
  navBtn.addEventListener('click', () => {
    toggleNav();
  });

  overlays.forEach((el) => {
    el.addEventListener('click', () => {
      closeNav();
      accordions.closeAllAccordion(nav);
    });
  });

  navItems.forEach((el) => {
    el.addEventListener('click', () => {
      closeNav();
      accordions.closeAllAccordion(nav);
    });
  });

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      closeNav();
      accordions.closeAllAccordion(nav);
    }
  });
};

export {initNav};
