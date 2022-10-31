// DOM elements
const toggleCheckboxElement = document.getElementById('toggle-checkbox');

const basicPriceValue = document.getElementById('basic-price');
const professionalPriceValue = document.getElementById('professional-price');
const masterPriceValue = document.getElementById('master-price');


// Functions

const togglePrices = () => {
    if (toggleCheckboxElement.checked) {
        basicPriceValue.textContent = "19.99";
        professionalPriceValue.textContent = "24.99";
        masterPriceValue.textContent = "39.99";;
    }
    else {
        basicPriceValue.textContent = "199.99";
        professionalPriceValue.textContent = "249.99";
        masterPriceValue.textContent = "399.99"
    };
};

togglePrices();



// Listeners
toggleCheckboxElement.addEventListener('click', togglePrices);
