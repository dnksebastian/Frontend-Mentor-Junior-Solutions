const navElement = document.getElementById("navigation");
const menuIconElement = document.getElementById("menuicon");


const toggleMobileMenu = () => {
menuIconElement.classList.toggle("menu-active");
navElement.classList.toggle("show-mob-menu");
}

menuIconElement.addEventListener('click', toggleMobileMenu);

console.log(navElement, menuIconElement);