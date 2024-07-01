// DOM Elements
const formElement = document.getElementById("calculator-form");

// Functions
const submitForm = (e) => {
  e.preventDefault();

  console.log("form sent");
};

// Event listeners
formElement.addEventListener("submit", submitForm);
