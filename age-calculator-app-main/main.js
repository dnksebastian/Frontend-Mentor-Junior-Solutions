// DOM Elements

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

// This prevents default input error messages
formInputEls.forEach((el) => {
  el.addEventListener("invalid", (e) => {
    // e.preventDefault();
    // el.setCustomValidity("");
  });
});

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
}

// Helper function to render error messages
function renderErrorMsgs() {
  let error = [];
  let validity = [];
  
  errorMsgs.forEach((el) => {
    let val = el.previousElementSibling.checkValidity();
    let err = el.previousElementSibling.validationMessage;
    error.push(err);
    validity.push(val);
    
    if (el.previousElementSibling.checkValidity() === false) {
      el.parentElement.firstElementChild.classList.add("error");
      el.textContent = el.previousElementSibling.validationMessage;
    } else if (el.previousElementSibling.checkValidity() === true) {
      el.textContent = "";
      el.parentElement.firstElementChild.classList.remove("error");
    }
  });
  
  console.log(error);
  console.log(validity);
}
validateInputs();

// Validation function

function validateInputs() {
  console.log('validate');
  const RegExpCheck = RegExp("^[0-9]+$");

  let inputsAreValid;

  // Check if input is empty
  formInputEls.forEach((el) => {
    if (el.value = "") {
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
  let currentTime = dayjs(currentDateYMD);
  let userTime = dayjs(userDateYMD);

  const getAgeDetails = (oldDate, newDate) => {
    const years = newDate.diff(oldDate, "year");
    const months = newDate.diff(oldDate, "month") - years * 12;
    const days = newDate.diff(
      oldDate.add(years, "year").add(months, "month"),
      "day"
    );

    return {
      years,
      months,
      days,
      allDays: newDate.diff(oldDate, "day"),
    };
  };

  let result = getAgeDetails(userTime, currentTime);

  let animateYears = new CountUp(yearsDisplayEl, 0, result.years);
  let animateMonths = new CountUp(monthsDisplayEl, 0, result.months);
  let animateDays = new CountUp(daysDisplayEl, 0, result.days);

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
  el.addEventListener("blur", setUserDate);
});
