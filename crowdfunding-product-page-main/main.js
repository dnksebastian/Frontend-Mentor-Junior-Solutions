// DOM Elements & variables
const mobMenuIconEl = document.getElementById('mobile-menu-control');
const mobNavEl = document.getElementById('top-nav');
const backdropEl = document.getElementById('backdrop');

const backProjectBtn = document.getElementById('back-project-btn');
const closeModalBtn = document.getElementById('close-modal');
const pledgesDialogEl = document.getElementById('selection-modal');

const modalOptionsElements = [... pledgesDialogEl.querySelectorAll('.pledge-li')];
console.log(modalOptionsElements);

// Functions

function toggleMenu() {
    mobNavEl.classList.toggle('active');
    mobMenuIconEl.classList.toggle('active');
    backdropEl.classList.toggle('bdrop-active');
    document.body.classList.toggle('body-no-scroll');
}

function showModal() {
pledgesDialogEl.showModal();
document.body.classList.add('body-no-scroll');
}

function closeModal() {
pledgesDialogEl.close();
document.body.classList.remove('body-no-scroll');
};


function pickedOption() {
    modalOptionsElements.forEach((el) => {
        if (el.querySelector('input').checked) {
            console.log(el.querySelector('.pledge-name').textContent);
            el.classList.add('option-picked');
        } else {
            el.classList.remove('option-picked');
        }
    });
}



// Event listeners

mobMenuIconEl.addEventListener('click', toggleMenu);
backProjectBtn.addEventListener('click', showModal);
closeModalBtn.addEventListener('click', closeModal);
modalOptionsElements.forEach((el) => {
    el.addEventListener('click', pickedOption);
})