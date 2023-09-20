import Swiper from '../../vendor/swiper.js';

let newsSlider;

const initSliders = () => {
  const heroSlider = new Swiper('.hero__slider', {
    watchSlidesProgress: true,
    slideVisibleClass: 'hero__slide--visible',
    loading: 'lazy',
    autoplay: {
      delay: 3000,
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    loop: true,
    slideClass: 'hero__slide',
    pagination: {
      el: '.hero__pagination',
      bulletClass: 'hero__bullet',
      bulletActiveClass: 'hero__bullet--active',
      clickable: true,
    },
    breakpoints: {
      320: {
        allowTouchMove: true,
      },
      768: {
        allowTouchMove: true,
      },
      1200: {
        allowTouchMove: false,
      },
    },
  });

  const programsSlider = new Swiper('.programs__slider', {
    loading: 'lazy',
    slideClass: 'programs__slide',
    navigation: {
      nextEl: '.programs-slide-next',
      prevEl: '.programs-slide-prev',
    },
    scrollbar: {
      el: '.programs__scrollbar',
      dragClass: 'programs__drag',
    },
    breakpoints: {
      320: {
        allowTouchMove: true,
        slidesPerView: 1,
      },
      768: {
        allowTouchMove: true,
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1200: {
        allowTouchMove: false,
        slidesPerView: 3,
        spaceBetween: 32,
      },
    },
  });

  newsSlider = new Swiper('.news__slider', {
    loading: 'lazy',
    slideClass: 'news__slide',
    watchSlidesProgress: true,
    slideVisibleClass: 'news__slide--visible',
    navigation: {
      nextEl: '.news-slide-next',
      prevEl: '.news-slide-prev',
    },
    pagination: {
      el: '.news__pagination',
      bulletClass: 'news__bullet',
      bulletActiveClass: 'news__bullet--active',
      clickable: true,
      renderBullet(index, className) {
        return `<span class="${className}">${index + 1}</span>`;
      },
    },
    breakpoints: {
      320: {
        allowTouchMove: true,
        slidesPerView: 1,
        spaceBetween: 20,
        grid: {
          rows: 2,
        },
      },
      768: {
        allowTouchMove: true,
        slidesPerView: 2,
        spaceBetween: 30,
        grid: {
          rows: 2,
        },
      },
      1200: {
        slidesPerView: 'auto',
        spaceBetween: 32,
        allowTouchMove: false,
      },
    },
  });

  const reviewsSlider = new Swiper('.reviews__slider', {
    loading: 'lazy',
    slideClass: 'reviews__slide',
    slideVisibleClass: 'reviews__slide--visible',
    watchSlidesProgress: true,
    navigation: {
      nextEl: '.reviews-slide-next',
      prevEl: '.reviews-slide-prev',
    },
    scrollbar: {
      el: '.reviews__scrollbar',
      dragClass: 'reviews__drag',
    },
    breakpoints: {
      320: {
        allowTouchMove: true,
      },
      768: {
        allowTouchMove: true,
        slidesPerView: 'auto',
        spaceBetween: 30,
      },
      1200: {
        allowTouchMove: false,
        slidesPerView: 2,
        spaceBetween: 32,
      },
    },
  });
};

export {initSliders, newsSlider};
