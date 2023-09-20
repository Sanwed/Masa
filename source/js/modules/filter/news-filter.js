import {newsSlider} from '../sliders/sliders.js';

const clearSlides = (container) => {
  container.innerHTML = '';
};

const appendSlides = (container, arr) => {
  arr.forEach((el) => {
    container.append(el);
  });
};

const setActiveControl = (controlsContainer, controlToSet) => {
  Array.from(controlsContainer.children).forEach((control) => {
    control.classList.remove('is-active');
  });
  controlToSet.classList.add('is-active');
};

const filterNews = () => {
  const slidesContainer = document.querySelector('.news__slider-wrapper');
  const controlsParent = document.querySelector('.news__controls');
  const slides = slidesContainer.querySelectorAll('.news__slide');

  controlsParent.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('news__control')) {
      const control = evt.target;

      if (control.dataset.newsControl === 'common') {
        clearSlides(slidesContainer);
        appendSlides(slidesContainer, slides);
        setActiveControl(controlsParent, control);
        newsSlider.update();
      } else {
        const filteredSlides = Array.from(slides).filter((slide) => control.dataset.newsControl === slide.dataset.newsCard);

        clearSlides(slidesContainer);
        appendSlides(slidesContainer, filteredSlides);
        setActiveControl(controlsParent, control);
        newsSlider.update();
      }
    }
  });
};

export {filterNews};
