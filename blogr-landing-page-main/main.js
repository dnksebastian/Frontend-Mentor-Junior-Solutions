// DOM Elements
const topMenuIconEl = document.getElementById("menu-icon");
const topNavEl = document.getElementById("top-nav");

console.log(topMenuIconEl, topNavEl);

// Functions

function toggleMenu() {
  topNavEl.classList.toggle("visible");
  topMenuIconEl.classList.toggle('menu-open');
}

// Listeners

topMenuIconEl.addEventListener("click", toggleMenu);
