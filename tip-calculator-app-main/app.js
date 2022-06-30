const billInputValue = document.getElementById("bill");


const radioTipCustom = document.getElementById("customtip");

const radioTipElements = document.querySelector('input[name="radio-tip"]:checked');

console.log(radioTipElements);

const peopleNumInputValue = document.getElementById("peoplenumber");

const tipPersonValue = document.getElementById("tip-person");
const tipTotalValue = document.getElementById("tip-total");

const resetBtnElement = document.getElementById('resetbtn');


/* -=-=-=-=-=-=-=-=-=-=-=-=- */

function calculateTipValues () {

    let billValue = billInputValue.value
    let tipValue = radioTipElements.value
    let customValue = radioTipCustom.value
    let peopleNumber = peopleNumInputValue.value

    let tipPerPerson = (billValue * tipValue) / peopleNumber
    
    console.log(tipPerPerson);

}


function testF () {
    let value = billInputValue.value
    console.log(value);

};


peopleNumInputValue.addEventListener('keyup', calculateTipValues);

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