// DOM Elements
const componentFormEl = document.getElementById('component-form');

// Functions

const submitForm = (e) => {
    e.preventDefault()
    console.log('submit form');
}

// Event listeners

componentFormEl.addEventListener('submit', submitForm)