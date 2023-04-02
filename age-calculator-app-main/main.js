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