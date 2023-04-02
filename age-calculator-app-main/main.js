// DOM Elements & global variables

const submitBtn = document.getElementById('submit-btn');
const calculatorFormEl = document.getElementById('calc-form');

const yearsDisplayEl = document.getElementById('years-result');
const monthsDisplayEl = document.getElementById('months-result');
const daysDisplayEl = document.getElementById('days-result');

// let yearsResult = 38;
// let monthsResult = 3;
// let daysResult = 26;
let yearsResult = "--";
let monthsResult = "--";
let daysResult = "--";

// Functions

yearsDisplayEl.textContent = yearsResult;
monthsDisplayEl.textContent = monthsResult;
daysDisplayEl.textContent = daysResult;


const calculateResult = (e) => {
    e.preventDefault();
    console.log('Calculate');
};


// Event listeners
calculatorFormEl.addEventListener('submit', calculateResult);




// -.-.-.-.-.-...-.-.--.-.-.-.-.-.-.-.-

const errorMsgs = [... document.getElementsByClassName('error-msg')];
errorMsgs.forEach((el) => {
    el.textContent = "This field is required";
    // el.textContent = "Must be a valid month";
    // el.textContent = "Must be in the past";
});
console.log(errorMsgs);