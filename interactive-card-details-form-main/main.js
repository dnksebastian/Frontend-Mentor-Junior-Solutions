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

// Functions

const nameDisplay = () => {
  let inputName = chnameInputEl.value.trim();

  if (!inputName) {
    chnameInputEl.classList.add("invalid");
    nameErrorEl.classList.add("active-err");
    cardholderDisplayEl.textContent = "Jane Appleseed";
    nameErrorEl.textContent = "Can't be blank";
  } else if (specialCharacters.test(inputName)) {
    chnameInputEl.classList.add("invalid");
    nameErrorEl.classList.add("active-err");
    cardholderDisplayEl.textContent = "Jane Appleseed";
    nameErrorEl.textContent = "Can't use special characters";
  } else {
    chnameInputEl.classList.remove("invalid");
    nameErrorEl.classList.remove("active-err");
    cardholderDisplayEl.textContent = inputName;
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
  } 
  else if (e.target.value.length < 17) {
    chnumberInputEl.classList.add("invalid");
    numErrorEl.classList.add("active-err");
    cardnumDisplayEl.textContent = "0000 0000 0000 0000";
    numErrorEl.textContent = "Card number too short!";
  } 
  else {
    chnumberInputEl.classList.remove("invalid");
    numErrorEl.classList.remove("active-err");
    cardnumDisplayEl.textContent = finalInput;
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
      } 
      else if (validateInput.length < 2) {
        console.log(".");
      } 
      else {
        expmonthInputEl.classList.remove("invalid");
        monthErrorEl.classList.remove("active-err");
        expireMonthDisplayEl.textContent = validateInput;
      }

};

const yearDisplay = (e) => {
  expireYearDisplayEl.textContent = expyearInputEl.value.trim();
};

const cvcDisplay = (e) => {
  cvcDisplayEl.textContent = cvcInputEl.value.trim();
};

const submitForm = (e) => {
  e.preventDefault();
  console.log(".");
};

// Event listeners

formEl.addEventListener("submit", submitForm);

chnameInputEl.addEventListener("input", nameDisplay);
chnumberInputEl.addEventListener("input", numDisplay);
expmonthInputEl.addEventListener("input", monthDisplay);
expyearInputEl.addEventListener("input", yearDisplay);
cvcInputEl.addEventListener("input", cvcDisplay);
