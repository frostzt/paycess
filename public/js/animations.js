/* eslint-disable */
gsap.from('#menu-link', {
  x: 300,
  duration: 1,
  opacity: 0,
});

// Header animation timeline
let logoTL = gsap.timeline();
logoTL.from('.logo', { opacity: 0, duration: 1 });
logoTL.from('.header__description', { opacity: 0, duration: 0.5 });
logoTL.from('.next-section', { opacity: 0, duration: 0.5 });
