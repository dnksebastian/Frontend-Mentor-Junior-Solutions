// Elements

const menuIconElement = document.getElementById('hamburger');
const navbarTopElement = document.getElementById('navigation-top');

// Functions

const showNavbar = () => {
    menuIconElement.classList.toggle('icon-toggle');
    navbarTopElement.classList.toggle('show-nav');
};

// Event listeners

menuIconElement.addEventListener('click', showNavbar);