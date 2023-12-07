export default {
  activeClass: "active",
  windowEl: window,
  documentEl: document,
  htmlEl: document.documentElement,
  bodyEl: document.body,
  timers: document.querySelectorAll('.h2o-timer'),
  header: document.querySelector('header'),
  overlay: document.querySelector('[data-overlay]'),
  mobileMenu: document.querySelector('.h2o-mobile-menu'),
  burger: document.querySelector('.h2o-burger'),
  slider: document.querySelector('.splide'),
  accParrent: [...document.querySelectorAll('[data-accordion-init]')],
}





