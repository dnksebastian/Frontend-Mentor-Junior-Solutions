const billInputValue = document.getElementById("bill");

const radioTipCustom = document.getElementById("customtip");

// const radioTipElements = document.querySelector(
//   'input[name="radio-tip"]:checked'
// );

const peopleNumInputValue = document.getElementById("peoplenumber");

const tipPersonValue = document.getElementById("tip-person");
const tipTotalValue = document.getElementById("tip-total");

const resetBtnElement = document.getElementById("resetbtn");

let amountTipPerPerson;
let amountTotalPerPerson;

/* -=-=-=-=-=-=-=-=-=-=-=-=- */

function calculateTipValues() {
  const radioTipElements = document.querySelector(
    'input[name="radio-tip"]:checked'
  );

  let billValue = billInputValue.value;
  let tipValue = radioTipElements.value;
  let customValue = radioTipCustom.value;
  let peopleNumber = peopleNumInputValue.value;

  let totalValue = billValue + (billValue * tipValue);
  let totalPerPerson = totalValue / peopleNumber;
  let tipPerPerson = (billValue * tipValue) / peopleNumber;

  amountTipPerPerson = parseFloat(tipPerPerson.toFixed(2));
  amountTotalPerPerson = parseFloat(totalPerPerson.toFixed(2));
}

function validateCalculator() {
//   console.log(radioTipElements);
}

function populateCalculatorFields() {
  tipPersonValue.textContent = `$${amountTipPerPerson}`;
  tipTotalValue.textContent = `$${amountTotalPerPerson}`;
}

peopleNumInputValue.addEventListener("keyup", calculateTipValues);
peopleNumInputValue.addEventListener("keyup", populateCalculatorFields);
billInputValue.addEventListener("keyup", validateCalculator);

/* -=-=-=-=-=-=-=-=-=-=-=-=- */
/* -=-=-=-=-=-=-=-=-=-=-=-=- */

// console.log(billInputValue);
// console.log(radioTip5);
// console.log(radioTip10);
// console.log(radioTip15);
// console.log(radioTip25);
// console.log(radioTip55);
// console.log(radioTipCustom);
// console.log(peopleNumInputValue);
// console.log(tipPersonValue);
// console.log(tipTotalValue);
// console.log(resetBtnElement);
