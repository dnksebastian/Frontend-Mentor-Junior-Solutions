const topFormElement = document.getElementById("top-form");
const topInputElement = document.getElementById("email");

const bottomFormElement = document.getElementById('botform');
const bottomInputElement = document.getElementById('botform-input')

function validateForm(event) {
    console.log("test");
    event.preventDefault();
}


console.log(topFormElement, bottomFormElement);

topFormElement.addEventListener("submit", validateForm);
bottomFormElement.addEventListener("submit", validateForm);