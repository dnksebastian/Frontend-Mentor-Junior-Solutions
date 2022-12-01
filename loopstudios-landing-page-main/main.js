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
  document.body.classList.toggle("lock-scroll");
};


const changeHeaderScroll = () => {
  this.scrollY > 500 ? topHeaderEl.style.opacity = "80%" : topHeaderEl.style.opacity = null;
  this.scrollY > 500 ? topHeaderEl.style.backgroundColor = "black" : topHeaderEl.style.backgroundColor = null;
  this.scrollY > 500 ? topHeaderEl.style.minHeight = "15rem" : topHeaderEl.style.minHeight = null;
};

// Event listeners

hamburgerEl.addEventListener("click", toggleMobileMenu);
window.addEventListener("scroll", changeHeaderScroll);
