// DOM Elements

const formEls = [... document.querySelectorAll('.label-wrap')];

const submitBtn = document.getElementById("submit-btn");
const calculatorFormEl = document.getElementById("calc-form");
const formInputEls = [...document.querySelectorAll(".form-input")];

const dayInput = document.getElementById("day-input");
const monthInput = document.getElementById("month-input");
const yearInput = document.getElementById("year-input");

const errorMsgs = [...document.getElementsByClassName("error-msg")];

const yearsDisplayEl = document.getElementById("years-result");
const monthsDisplayEl = document.getElementById("months-result");
const daysDisplayEl = document.getElementById("days-result");

// Global variables

const DateTime = luxon.DateTime;

let currentDate = new Date();

let currentYear = currentDate.getFullYear();
let currentMonth = `${currentDate.getMonth() + 1}`.padStart(2, "0");
let currentDay = `${currentDate.getDate()}`.padStart(2, "0");

let currentDateYMD = `${currentYear}-${currentMonth}-${currentDay}`;

let userDay = 0;
let userMonth = 0;
let userYear = 0;

let userDateYMD;

let yearsResult;
let monthsResult;
let daysResult;

// Functions

// Form validation functions

// Helper function to check if a date exists
function dateIsValid(date) {
  return date instanceof Date && !isNaN(date);
}

// Helper function to set date from inputs
function setUserDate() {
  userDay = dayInput.value.trim().padStart(2, "0");
  userMonth = monthInput.value.trim().padStart(2, "0");
  userYear = yearInput.value.trim().padStart(4, "0");

  userDateYMD = `${userYear}-${userMonth}-${userDay}`;
  console.log(userDateYMD);
}

// Helper function to render error messages
function renderErrorMsgs() {
  
  errorMsgs.forEach((el) => {
    
    if (el.previousElementSibling.checkValidity() === false) {
      el.parentElement.classList.add("error");
      el.textContent = el.previousElementSibling.validationMessage;
      if (el.previousElementSibling.validity.valueMissing == true) {
        el.textContent = "This field is required"
        // I've hardcoded this because different browsers forced their own error messages
      }
    } else if (el.previousElementSibling.checkValidity() === true) {
      el.textContent = "";
      el.parentElement.classList.remove("error");
    }
  });


}


// Validation function

function validateInputs() {

  const RegExpCheck = RegExp("^[0-9]+$");
  let inputsAreValid;

  // Check if input is empty
  formInputEls.forEach((el) => {
    if (!el.value) {
      el.setCustomValidity("This field is required");
    } else {
      el.setCustomValidity("");
    }
  });

  // Check if input is numbers only

  formInputEls.forEach((el) => {
    if (el.value && !RegExpCheck.test(el.value)) {
      el.setCustomValidity("Please use only numbers");
    } else {
      el.setCustomValidity("");
    }
  });

  // Check if input has proper range (days: 1-31, month: 1-12)

  if ((dayInput.value && dayInput.value == 0) || dayInput.value > 31) {
    dayInput.setCustomValidity("Must be a valid day");
  } else {
    dayInput.setCustomValidity("");
  }

  if ((monthInput.value && monthInput.value == 0) || monthInput.value > 12) {
    monthInput.setCustomValidity("Must be a valid month");
  } else {
    monthInput.setCustomValidity("");
  }

  // Check if year is not in the future

  if (yearInput.value && yearInput.value < 0) {
    yearInput.setCustomValidity("Must be a valid year");
  } else if (yearInput.value && yearInput.value > currentYear) {
    yearInput.setCustomValidity("Must be in the past");
  } else {
    yearInput.setCustomValidity("");
  }

  renderErrorMsgs();

  if (
    !dayInput.checkValidity() ||
    !monthInput.checkValidity() ||
    !yearInput.checkValidity()
  ) {
    inputsAreValid = false;
  } else {
    inputsAreValid = true;
  }

  return inputsAreValid;
}

function validateForm() {
  let isValid = false;

  // Check if whole date is valid (e.g. 31/04/1991 (there are only 30 days in April))
  if (!dateIsValid(new Date(userDateYMD))) {
    dayInput.setCustomValidity("Must be a valid date");
    monthInput.setCustomValidity(" ");
    yearInput.setCustomValidity(" ");
    isValid = false;
  } else if (new Date(userDateYMD) > currentDateYMD) {
    dayInput.setCustomValidity("Must be in the past");
    monthInput.setCustomValidity(" ");
    yearInput.setCustomValidity(" ");
    isValid = false;
  } else {
    formInputEls.forEach((el) => {
      el.setCustomValidity("");
    });
    isValid = true;
  }
  renderErrorMsgs();
  return isValid;
}

// Calculate results


function calculateResult() {
  let currentTime = DateTime.fromISO(currentDateYMD);
  let userTime = DateTime.fromISO(userDateYMD);

  let differenceResult = currentTime.diff(userTime, ['years', 'months', 'days']).toObject();
  
  console.log(differenceResult);


  let animateYears = new CountUp(yearsDisplayEl, 0, differenceResult.years);
  let animateMonths = new CountUp(monthsDisplayEl, 0, differenceResult.months);
  let animateDays = new CountUp(daysDisplayEl, 0, differenceResult.days);

  animateYears.start();
  animateMonths.start();
  animateDays.start();
}

// Submit form

const submitForm = (e) => {
  e.preventDefault();

  if (validateInputs()) {
    validateForm();
  }

  if (validateForm()) {
    calculateResult();
  }
};

// Event listeners
calculatorFormEl.addEventListener("submit", submitForm);

formInputEls.forEach((el) => {
  el.addEventListener("blur", validateInputs);
  el.addEventListener("input", setUserDate);


  el.addEventListener("focus", (el) => {
    calculatorFormEl.classList.add('focused');
    el.target.parentElement.classList.add('fc');
    el.target.parentElement.classList.add('itcd')
  })
  el.addEventListener('blur', () => {
    el.parentElement.classList.remove('fc');
  })
});

