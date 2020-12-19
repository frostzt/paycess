/* eslint-disable */
const cursor = document.querySelector('.cursor');
cursor.addEventListener('mousemove', (e) => {
  cursor.style.left = `${e.pageX}px`;
  cursor.style.top = `${e.pageY}px`;
  console.log(e.pageX, e.pageY);
});
