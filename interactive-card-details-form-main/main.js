// DOM Elements

const cvcDisplayEl = document.querySelector(".cvc-display");
const cardnumDisplayEl = document.querySelector(".cardnum-display");
const cardholderDisplayEl = document.querySelector(".cardholder-display");
const expireMonthDisplayEl = document.querySelector(".month");
const expireYearDisplayEl = document.querySelector(".year");

const formEl = document.querySelector(".ccard-form");

const chnameInputEl = document.getElementById("cardholder-name");
const chnumberInputEl = document.getElementById("cardnumber");
const expmonthInputEl = document.getElementById("expdate-m");
const expyearInputEl = document.getElementById("expdate-y");
const cvcInputEl = document.getElementById("cvc");

const nameErrorEl = document.getElementById("nameerror");
const numErrorEl = document.getElementById("numerror");
const monthErrorEl = document.getElementById("montherror");
const yearErrorEl = document.getElementById("yearerror");
const cvcErrorEl = document.getElementById("cvcerror");

const submitBtnEl = document.getElementById("submitbtn");

const confirmViewEl = document.querySelector(".confirm-info");
const continueBtnEl = document.getElementById("btn-continue");

// Helper variables

const specialCharacters = /[!"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|]+/;
const numbers = /^[0-9 ]+$/;

let nameIsValid;
let numIsValid;
let monthIsValid;
let yearIsValid;
let cvcIsValid;

// Functions

const nameDisplay = (e) => {
  let inputName = chnameInputEl.value.trim();

  if (!inputName) {
    chnameInputEl.classList.add("invalid");
    nameErrorEl.classList.add("active-err");
    cardholderDisplayEl.textContent = "Jane Appleseed";
    nameErrorEl.textContent = "Can't be blank";
    nameIsValid = false;
  } else if (specialCharacters.test(inputName)) {
    chnameInputEl.classList.add("invalid");
    nameErrorEl.classList.add("active-err");
    cardholderDisplayEl.textContent = "Jane Appleseed";
    nameErrorEl.textContent = "Can't use special characters";
    nameIsValid = false;
  } else {
    chnameInputEl.classList.remove("invalid");
    nameErrorEl.classList.remove("active-err");
    cardholderDisplayEl.textContent = inputName;
    nameIsValid = true;
  }
};

const numDisplay = (e) => {
  let inputNum = e.target.value;

  const regex = /^(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})$/g;
  const onlyNumbers = inputNum.replace(/[^\d]/g, "");

  let finalInput = onlyNumbers.replace(regex, (regex, $1, $2, $3, $4) =>
    [$1, $2, $3, $4].filter((group) => !!group).join(" ")
  );

  e.target.value = finalInput.trim();

  if (!finalInput) {
    chnumberInputEl.classList.add("invalid");
    numErrorEl.classList.add("active-err");
    cardnumDisplayEl.textContent = "0000 0000 0000 0000";
    numErrorEl.textContent = "Can't be blank";
    numIsValid = false;
  } else if (e.target.value.length < 17) {
    chnumberInputEl.classList.add("invalid");
    numErrorEl.classList.add("active-err");
    cardnumDisplayEl.textContent = "0000 0000 0000 0000";
    numErrorEl.textContent = "Card number too short!";
    numIsValid = false;
  } else {
    chnumberInputEl.classList.remove("invalid");
    numErrorEl.classList.remove("active-err");
    cardnumDisplayEl.textContent = finalInput;
    numIsValid = true;
  }
};

const monthDisplay = (e) => {
  let userInput = e.target.value;
  const validateInput = userInput.replace(/[^\d]/g, "").trim();

  e.target.value = validateInput;

  if (!validateInput) {
    expmonthInputEl.classList.add("invalid");
    monthErrorEl.classList.add("active-err");
    monthErrorEl.textContent = "Can't be blank";
    expireMonthDisplayEl.textContent = "00";
    monthIsValid = false;
  } else if (
    +validateInput > 12 ||
    +validateInput === 0 ||
    +validateInput === 00
  ) {
    expmonthInputEl.classList.add("invalid");
    monthErrorEl.classList.add("active-err");
    monthErrorEl.textContent = "Enter valid month";
    expireMonthDisplayEl.textContent = "00";
    monthIsValid = false;
  } else if (validateInput.length < 2) {
    expmonthInputEl.classList.remove("invalid");
    monthErrorEl.classList.remove("active-err");
    expireMonthDisplayEl.textContent = `0${validateInput}`;
    monthIsValid = true;
  } else {
    expmonthInputEl.classList.remove("invalid");
    monthErrorEl.classList.remove("active-err");
    expireMonthDisplayEl.textContent = validateInput;
    monthIsValid = true;
  }
};

const yearDisplay = (e) => {
  let userInput = e.target.value;
  const validateInput = userInput.replace(/[^\d]/g, "").trim();

  e.target.value = validateInput;

  if (!validateInput) {
    expyearInputEl.classList.add("invalid");
    yearErrorEl.classList.add("active-err");
    yearErrorEl.textContent = "Can't be blank";
    expireYearDisplayEl.textContent = "00";
    yearIsValid = false;
  } else if (validateInput.length < 2) {
    expyearInputEl.classList.remove("invalid");
    yearErrorEl.classList.remove("active-err");
    expireYearDisplayEl.textContent = `0${validateInput}`;
    yearIsValid = true;
  } else {
    expyearInputEl.classList.remove("invalid");
    yearErrorEl.classList.remove("active-err");
    expireYearDisplayEl.textContent = validateInput;
    yearIsValid = true;
  }
};

const cvcDisplay = (e) => {
  let userInput = e.target.value;
  const validateInput = userInput.replace(/[^\d]/g, "").trim();

  e.target.value = validateInput;

  if (!validateInput) {
    cvcInputEl.classList.add("invalid");
    cvcErrorEl.classList.add("active-err");
    cvcErrorEl.textContent = "Can't be blank";
    cvcDisplayEl.textContent = "000";
    cvcIsValid = false;
  } else if (validateInput.length < 3) {
    cvcInputEl.classList.add("invalid");
    cvcErrorEl.classList.add("active-err");
    cvcErrorEl.textContent = "Enter valid CVC";
    cvcDisplayEl.textContent = "000";
    cvcIsValid = false;
  } else {
    cvcInputEl.classList.remove("invalid");
    cvcErrorEl.classList.remove("active-err");
    cvcDisplayEl.textContent = validateInput;
    cvcIsValid = true;
  }
};


const resetFields = () => {
  chnameInputEl.value = "";
  chnumberInputEl.value = "";
  expmonthInputEl.value = "";
  expyearInputEl.value = "";
  cvcInputEl.value = "";

  cardnumDisplayEl.textContent = "0000 0000 0000 0000"; 
  cardholderDisplayEl.textContent = "Jane Appleseed";
  expireMonthDisplayEl.textContent = "00";
  expireYearDisplayEl.textContent = "00"
  cvcDisplayEl.textContent = "000";
};


const continueNewForm = () => {
  formEl.style.display = "flex";
  confirmViewEl.style.display = "none";
};

const submitForm = (e) => {
  e.preventDefault();

  if (nameIsValid && numIsValid && monthIsValid && yearIsValid && cvcIsValid) {

    resetFields();
    formEl.style.display = "none";
    confirmViewEl.style.display = "flex";
  } else {
    return;
  }
};

// Event listeners

formEl.addEventListener("submit", submitForm);

chnameInputEl.addEventListener("input", nameDisplay);
chnumberInputEl.addEventListener("input", numDisplay);
expmonthInputEl.addEventListener("input", monthDisplay);
expyearInputEl.addEventListener("input", yearDisplay);
cvcInputEl.addEventListener("input", cvcDisplay);

continueBtnEl.addEventListener('click', continueNewForm);
