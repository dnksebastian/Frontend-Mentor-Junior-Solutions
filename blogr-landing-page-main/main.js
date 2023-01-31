// DOM Elements
const topMenuIconEl = document.getElementById("menu-icon");
const topNavEl = document.getElementById("top-nav");
const topNavElements = [...document.querySelectorAll('.topnav-label')];

// Functions

function toggleMenu() {
  topNavEl.classList.toggle("visible");
  topMenuIconEl.classList.toggle('menu-open');
}

function styleActiveMenuEl(e) {
  const navEl = e.target;
    navEl.parentElement.nextElementSibling.classList.toggle('dropdown-visible');
    navEl.nextElementSibling.classList.toggle('arrow-active');
};

// Listeners

topMenuIconEl.addEventListener("click", toggleMenu);

topNavElements.forEach(el => {
  el.addEventListener('click', styleActiveMenuEl);
});
