/* eslint-disable */
const callMenu = () => {
  const menu = document.getElementById('menu');
  const menuLink = document.getElementById('menu-link');

  // Add and remove menu
  if (menu.classList.contains('active')) {
    menu.classList.remove('active');
  } else {
    menu.classList.add('active');
  }
};

export default callMenu;
