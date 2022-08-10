const sideMenuOpenElement = document.getElementById("open-menu");
const sideMenuCloseElement = document.getElementById("close-menu");
const overlayElement = document.getElementById("side-overlay");
const navigationElement = document.getElementById("nav-menu");



const closeMenu = () => {
overlayElement.style.display = "none"
navigationElement.style.display = "none"    
};

const openMenu = () => {
overlayElement.style.display = "block"
navigationElement.style.display = "flex"
};



sideMenuCloseElement.addEventListener("click", closeMenu);
sideMenuOpenElement.addEventListener("click", openMenu);
overlayElement.addEventListener("click", closeMenu);

console.log(sideMenuOpenElement, overlayElement, navigationElement, sideMenuCloseElement);
