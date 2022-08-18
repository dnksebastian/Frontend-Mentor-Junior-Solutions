const sideMenuOpenElement = document.getElementById("open-menu");
const sideMenuCloseElement = document.getElementById("close-menu");
const overlayElement = document.getElementById("side-overlay");
const navigationElement = document.getElementById("nav-menu");
const sideMenuItems = document.querySelectorAll(".drop-helper a");
const sideMenuItemsArr = Array.from(sideMenuItems);


const closeMenu = () => {
overlayElement.style.display = "none"
navigationElement.style.display = "none"    
};

const openMenu = () => {
overlayElement.style.display = "block"
navigationElement.style.display = "flex"
};

const toggleDropdown = (event) => {
    event.target.parentElement.nextElementSibling.classList.toggle('dropdown-active');
    event.target.nextElementSibling.classList.toggle('drop-icon-active');
};



sideMenuCloseElement.addEventListener("click", closeMenu);
sideMenuOpenElement.addEventListener("click", openMenu);
overlayElement.addEventListener("click", closeMenu);

sideMenuItemsArr.forEach(element => {
    element.addEventListener("click", toggleDropdown) 
});

