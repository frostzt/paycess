/* eslint-disable */
const parallex = (e) => {
  this.querySelectorAll('.parallax').forEach((item) => {
    const speed = item.getAttribute('data-speed');
    const x = (window.innerWidth - e.pageX * speed) / 100;
    const y = (window.innerHeight - e.pageY * speed) / 100;
    item.style.transfrom = `translateX(${x}px) translateY(${y}px)`;
    console.log(x);
    console.log(y);
    console.log('fied');
  });
};

document.addEventListener('mousemove', parallex);
