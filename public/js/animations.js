/* eslint-disable */
gsap.registerPlugin(ScrollTrigger);

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

// Animation for the first feature-section
let featuresOne = gsap.timeline({
  scrollTrigger: {
    trigger: '#sec-features',
    start: 'top center',
    end: 'top 100px',
    scrub: true,
  },
});
featuresOne.from('#featuresOne h2', { opacity: 0, x: -500, duration: 1 });
featuresOne.from('#featuresOne p', { opacity: 0, y: -100, duration: 0.5 });

// Animation for the second feature-section
let featuresTwo = gsap.timeline({
  scrollTrigger: {
    trigger: '#sec-features-2',
    start: 'top center',
    end: 'top 100px',
    scrub: true,
  },
});
featuresTwo.from('#featuresTwo h2', { opacity: 0, x: 500, duration: 1 });
featuresTwo.from('#featuresTwo p', { opacity: 0, y: 100, duration: 0.5 });

// Animation for the second feature-section
let featuresThree = gsap.timeline({
  scrollTrigger: {
    trigger: '#sec-features-3',
    start: 'top center',
    end: 'top 100px',
    scrub: true,
  },
});
featuresThree.from('#featuresThree h2', { opacity: 0, x: -500, duration: 1 });
featuresThree.from('#featuresThree p', { opacity: 0, y: -100, duration: 0.5 });

let secFade = gsap.timeline();
