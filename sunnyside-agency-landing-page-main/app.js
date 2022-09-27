/* Selecting elements */

const hamburgerIconElement = document.getElementById('hamburger');

const navigationElement = document.getElementById('navigation');

/* Functions */

const toggleMobileMenu = () => {
    navigationElement.classList.toggle('showmenu');
    hamburgerIconElement.classList.toggle('iconfade');
};


/* Event listeners */

hamburgerIconElement.addEventListener('click', toggleMobileMenu);
