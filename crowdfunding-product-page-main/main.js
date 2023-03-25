// DOM Elements & variables
const mobMenuIconEl = document.getElementById('mobile-menu-control');
const mobNavEl = document.getElementById('top-nav');
const backdropEl = document.getElementById('backdrop');

const backProjectBtn = document.getElementById('back-project-btn');
const closeModalBtn = document.getElementById('close-modal');
const pledgesDialogEl = document.getElementById('selection-modal');

// Functions

function toggleMenu() {
    mobNavEl.classList.toggle('active');
    mobMenuIconEl.classList.toggle('active');
    backdropEl.classList.toggle('bdrop-active');
}

function showModal() {
pledgesDialogEl.showModal();
}

function closeModal() {
pledgesDialogEl.close();
};


// Event listeners

mobMenuIconEl.addEventListener('click', toggleMenu);
backProjectBtn.addEventListener('click', showModal);
closeModalBtn.addEventListener('click', closeModal);