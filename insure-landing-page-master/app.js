// Elements

const menuIconElement = document.getElementById('hamburger');
const navbarTopElement = document.getElementById('navigation-top');

// Functions

const showNavbar = () => {
    menuIconElement.classList.toggle('icon-toggle');
    navbarTopElement.classList.toggle('show-nav');
};


const hideMenu = () => {
    navbarTopElement.classList.remove('show-nav');
    menuIconElement.classList.remove('icon-toggle');
}

// Event listeners

menuIconElement.addEventListener('click', showNavbar);
navbarTopElement.addEventListener('click', hideMenu);
