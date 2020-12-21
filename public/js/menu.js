/* eslint-disable */
const callMenu = () => {
  const menu = document.getElementById('menu');
  const cursor = document.querySelector('.cursor');

  // Add and remove menu
  if (menu.classList.contains('active')) {
    menu.classList.remove('active');
    cursor.classList.add('rem-cursor');
  } else {
    menu.classList.add('active');
    cursor.classList.remove('rem-cursor');
  }
};

export default callMenu;
