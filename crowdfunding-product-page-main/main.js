// DOM Elements & variables
const mobMenuIconEl = document.getElementById('mobile-menu-control');
const mobNavEl = document.getElementById('top-nav');
const backdropEl = document.getElementById('backdrop');

// Functions

function toggleMenu() {
    mobNavEl.classList.toggle('active');
    mobMenuIconEl.classList.toggle('active');
    backdropEl.classList.toggle('bdrop-active');
}


// Event listeners

mobMenuIconEl.addEventListener('click', toggleMenu);