const billInputValue = document.getElementById("bill");

const radioTipCustom = document.getElementById("customtip");

const radioElements = document.querySelectorAll('input[type="radio"]');
const radioElementsArray = [...radioElements];

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

  let billValue = parseFloat(billInputValue.value);
  let tipValue = parseFloat(radioTipElements.value);
  let customValue = parseFloat(radioTipCustom.value * 0.01);
  let peopleNumber = parseFloat(peopleNumInputValue.value);
  
  if (radioTipCustom.value !== "") {
      radioElementsArray.forEach((element) => {
          element.checked = false;
        });
        
        let totalValue = billValue + billValue * customValue;
        let totalPerPerson = totalValue / peopleNumber;
        let tipPerPerson = (billValue * customValue) / peopleNumber;

    } else {
      let totalValue = billValue + billValue * tipValue;
      let totalPerPerson = totalValue / peopleNumber;
      let tipPerPerson = (billValue * tipValue) / peopleNumber;
    }
  
    
  amountTipPerPerson = parseFloat(tipPerPerson.toFixed(2));
  amountTotalPerPerson = parseFloat(totalPerPerson.toFixed(2));
}

function validateCalculator() {}

function populateCalculatorFields() {
  tipPersonValue.textContent = `$${amountTipPerPerson}`;
  tipTotalValue.textContent = `$${amountTotalPerPerson}`;
}

peopleNumInputValue.addEventListener("keyup", calculateTipValues);
peopleNumInputValue.addEventListener("keyup", populateCalculatorFields);
billInputValue.addEventListener("keyup", validateCalculator);
peopleNumInputValue.addEventListener("keyup", validateCalculator);

/* -=-=-=-=-=-=-=-=-=-=-=-=- */
/* -=-=-=-=-=-=-=-=-=-=-=-=- */