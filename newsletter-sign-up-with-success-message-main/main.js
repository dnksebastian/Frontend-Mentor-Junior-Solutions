// DOM Elements
const componentFormEl = document.getElementById("component-form");
const emailInputEl = document.getElementById("email");
const errMsgEl = document.getElementById("err-msg");

// Functions

const submitForm = (e) => {
  e.preventDefault();
  let isValid = validateInput();

  if (isValid) {
    console.log("submit form");
  } else {
    return;
  }
};

const validateInput = (e) => {
  if (emailInputEl.validity.valueMissing) {
    errMsgEl.textContent = "Email is required";
    return false;
  } else if (emailInputEl.validity.typeMismatch) {
    errMsgEl.textContent = "Valid email required";
    return false;
  } else if (emailInputEl.validity.valid) {
    errMsgEl.textContent = "";
    return true;
  }
};

// Event listeners

componentFormEl.addEventListener("submit", submitForm);
emailInputEl.addEventListener('input', validateInput);
emailInputEl.addEventListener('blur', validateInput);



emailInputEl.addEventListener('click', () => {
    componentFormEl.classList.add('interacted')
})
componentFormEl.addEventListener('submit', () => {
    componentFormEl.classList.add('interacted')
})