// DOM Elements

const cvcDisplayEl = document.querySelector('.cvc-display');
const cardnumDisplayEl = document.querySelector('.cardnum-display');
const cardholderDisplayEl = document.querySelector('.cardholder-display');
const expireMonthDisplayEl = document.querySelector('.month');
const expireYearDisplayEl = document.querySelector('.year');



const formEl = document.querySelector('.ccard-form');


const chnameInputEl = document.getElementById('cardholder-name');
const chnumberInputEl = document.getElementById('cardnumber');
const expmonthInputEl = document.getElementById('expdate-m');
const expyearInputEl = document.getElementById('expdate-y');
const cvcInputEl = document.getElementById('cvc');


const submitBtnEl = document.getElementById('submitbtn');

const confirmViewEl = document.querySelector('.confirm-info');
const continueBtnEl = document.getElementById('btn-continue');

console.log(chnameInputEl, chnumberInputEl, expmonthInputEl, expyearInputEl, cvcInputEl, submitBtnEl, confirmViewEl, continueBtnEl);


console.log(cvcDisplayEl, cardnumDisplayEl, cardholderDisplayEl, expireMonthDisplayEl, expireYearDisplayEl);


// Functions

const displayInput = () => {
    cardnumDisplayEl.textContent = chnumberInputEl.value.trim();
    cardholderDisplayEl.textContent = chnameInputEl.value.trim();
};





const submitForm = (e) => {
    e.preventDefault();
    console.log('.');
};




// Event listeners

formEl.addEventListener('submit', submitForm);

chnameInputEl.addEventListener('keyup', displayInput);
chnumberInputEl.addEventListener('keyup', displayInput);
chnumberInputEl.addEventListener('keyup', displayInput);
chnumberInputEl.addEventListener('keyup', displayInput);
chnumberInputEl.addEventListener('keyup', displayInput);