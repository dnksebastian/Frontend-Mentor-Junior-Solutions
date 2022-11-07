// DOM Elements
const navElement = document.getElementById('navigation');
const showMenuElement = document.getElementById('show-menu-icon');
const closeMenuElement = document.getElementById('close-menu-icon');


// Functions

const showMenu = () => {
navElement.classList.add('showmenu');
};

const closeMenu = () => {
navElement.classList.remove('showmenu');
};



// Event listeners

showMenuElement.addEventListener('click', showMenu);
closeMenuElement.addEventListener('click', closeMenu);