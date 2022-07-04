const allInputs = document.querySelectorAll("input");
const allInputsArray = Array.from(allInputs);

const billInputValue = document.getElementById("bill");

const radioTipCustom = document.getElementById("customtip");

const radioElements = document.querySelectorAll('input[type="radio"]');
const radioElementsArray = [...radioElements];

const peopleNumInputValue = document.getElementById("peoplenumber");

const allInputElements = document.querySelectorAll('input[type="number"]');
const arrInputElements = Array.from(allInputElements);

const tipPersonValue = document.getElementById("tip-person");
const tipTotalValue = document.getElementById("tip-total");

const resetBtnElement = document.getElementById("resetbtn");

let amountTipPerPerson;
let amountTotalPerPerson;

/* -=-=-=-=-=-=-=-=-=-=-=-=- */

function calculateTipValues() {
  radioTipElement = document.querySelector('input[name="radio-tip"]:checked');

  let billValue = parseFloat(billInputValue.value);
  
  let peopleNumber = parseFloat(peopleNumInputValue.value);

  let tipValue = 0;

  if (radioTipCustom.value !== "") {
    tipValue = parseFloat(radioTipCustom.value * 0.01);
  } else if (radioTipElement) {
    tipValue = parseFloat(radioTipElement.value);
  } else {
    tipValue = 0;
  }

  if (billValue && tipValue && peopleNumber) {
    let totalValue = billValue + billValue * tipValue;
    let totalPerPerson = totalValue / peopleNumber;
    let tipPerPerson = (billValue * tipValue) / peopleNumber;
    amountTipPerPerson = parseFloat(tipPerPerson.toFixed(2));
    amountTotalPerPerson = parseFloat(totalPerPerson.toFixed(2));
  } else {
    amountTipPerPerson = "0.00";
    amountTotalPerPerson = "0.00";
  }
}

function calculatorValidation() {
  if (peopleNumInputValue.value == 0) {
    peopleNumInputValue.style.borderColor = "#B48372";
    document.documentElement.style.setProperty(
      "--afterelement-display",
      "block"
    );
  } else {
    peopleNumInputValue.style.borderColor = "transparent";
    document.documentElement.style.setProperty(
      "--afterelement-display",
      "none"
    );
  }
}

function populateCalculatorFields() {
  tipPersonValue.textContent = `$${amountTipPerPerson}`;
  tipTotalValue.textContent = `$${amountTotalPerPerson}`;
}

function buttonHandler() {
  if (
    billInputValue.value != "" ||
    radioTipCustom.value != "" ||
    peopleNumInputValue.value != "" ||
    tipPersonValue.textContent != "$0.00" ||
    tipTotalValue.textContent != "$0.00"
  ) {
    resetBtnElement.disabled = false;
  } else {
    resetBtnElement.disabled = true;
  }
}

function resetValues() {
  arrInputElements.forEach((element) => {
    element.value = "";
  });
  tipPersonValue.textContent = `$0.00`;
  tipTotalValue.textContent = `$0.00`;
}

function triggerCalculatorFunctions() {
  calculatorValidation();
  calculateTipValues();
  populateCalculatorFields();
  buttonHandler();
}

/* -=-=-=-=-=-=-=-=-=-=-=-=- */

radioElementsArray.forEach((e) => {
  e.addEventListener("click", function () {
    radioTipCustom.value = "";
  });
});

radioTipCustom.addEventListener("click", function () {
  radioElementsArray.forEach((element) => {
    element.checked = false;
  });
});


allInputsArray.forEach(element => {
  element.addEventListener("click", triggerCalculatorFunctions);
});


resetBtnElement.addEventListener("click", resetValues);

/* -=-=-=-=-=-=-=-=-=-=-=-=- */
