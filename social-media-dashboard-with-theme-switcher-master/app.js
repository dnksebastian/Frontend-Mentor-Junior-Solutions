const rootElement = document.querySelector(":root");
const toggleSwitchElement = document.getElementById("toggleSwitch");


let toggleColorMode = () => {
rootElement.classList.toggle('light');
};


toggleSwitchElement.addEventListener('click', toggleColorMode);