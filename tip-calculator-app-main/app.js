const billInputValue = document.getElementById("bill");

const radioTip5 = document.getElementById("tip5");
const radioTip10 = document.getElementById("tip10");
const radioTip15 = document.getElementById("tip15");
const radioTip25 = document.getElementById("tip25");
const radioTip55 = document.getElementById("tip50");
const radioTipCustom = document.getElementById("customtip");

const peopleNumInputValue = document.getElementById("peoplenumber");

const tipPersonValue = document.getElementById("tip-person");
const tipTotalValue = document.getElementById("tip-total");

const resetBtnElement = document.getElementById('resetbtn');


/* -=-=-=-=-=-=-=-=-=-=-=-=- */

function calculateTipValues (billv, tipv, peoplen) {

    const tipValue = billv * tipv
    const totalOrderValue = billv + tipValue
    const tipPerPerson = tipValue / peoplen
    const totalPerPerson = totalOrderValue / peoplen

    return tipValue, totalOrderValue, tipPerPerson, totalPerPerson
}



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