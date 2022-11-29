// DOM Elements

const topNavEl = document.getElementById("top-nav");
const topHeaderEl = document.getElementById("topheader");
const hamburgerEl = document.getElementById("hamburger-wrapper");
const openIconEl = document.getElementById("hamburger-open");
const closeIconEl = document.getElementById("hamburger-close");

console.log(topNavEl, topHeaderEl, hamburgerEl, openIconEl, closeIconEl);

// Functions

const toggleMobileMenu = () => {
  topNavEl.classList.toggle("menu-active");
  topHeaderEl.classList.toggle("menu-active");
  openIconEl.classList.toggle("hide");
  closeIconEl.classList.toggle("show");
};

// Event listeners

hamburgerEl.addEventListener("click", toggleMobileMenu);
