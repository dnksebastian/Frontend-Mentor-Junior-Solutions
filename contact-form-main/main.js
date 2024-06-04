// DOM Elements
const formElement = document.getElementById('component-form');
const inputWrappersEls = document.querySelectorAll('.input-wrapper');
const formFields = Array.from(formElement.elements);
const toastBoxEl = document.getElementById('toast-box');
const toastTemplateEl = document.getElementById('toast-template');

// Functions

const changeTouched = (el) => {
    const parentForm = el.closest('form');
    const parentWrap = el.closest('.input-wrapper');

    if (parentForm) {
        parentForm.classList.add('touched');
    }

    if (parentWrap) {
        parentWrap.classList.add('wrap-touched');
    }
};

const addFocused = (e) => {
    const parentWrap = e.target.closest('.input-wrapper');
    if (parentWrap) {
        parentWrap.classList.add('wrap-focused');
    }
};

const removeFocused = (e) => {
    const parentWrap = e.target.closest('.input-wrapper');
    if (parentWrap) {
        parentWrap.classList.remove('wrap-focused');
    }
};

const validateInputs = () => {
    formFields.forEach(el => {
        const closestWrapper = el.closest('.input-wrapper');

        if (!el.checkValidity()) {
            if (closestWrapper) {
                closestWrapper.classList.add('invalid');
            }

            if (el.id === 'input-email') {
                const errMsgEl = el.closest('.input-wrapper').querySelector('.error-msg');
                if (el.validity.valueMissing) {
                    errMsgEl.textContent = 'This field is required';
                } else {
                    errMsgEl.textContent = 'Please enter a valid email address';
                }
            }

        } else {
            if (closestWrapper) {
                closestWrapper.classList.remove('invalid')
            }
        }
    });
}

const displayToast = () => {
    const toastElement = toastTemplateEl.content.cloneNode(true);
    toastBoxEl.appendChild(toastElement);
    setTimeout(() => {
        toastBoxEl.replaceChildren();
    }, 5000);
};

const displayInitialToast = () => {
    const toastElement = toastTemplateEl.content.cloneNode(true);
    toastElement.querySelector('h2').textContent = 'Information';
    toastElement.querySelector('p').textContent = 'Form is reset with each page refresh!';

    toastBoxEl.appendChild(toastElement);
    setTimeout(() => {
        toastBoxEl.replaceChildren();
    }, 5000);
};

const submitForm = (e) => {
    e.preventDefault();

    formFields.forEach(el => {
        changeTouched(el)
    });
    
    validateInputs(e)

    const formIsValid = formElement.checkValidity();

    if (formIsValid) {
        displayToast()
        formElement.classList.remove('touched');
        formFields.forEach(el => {
            el.classList.remove('wrap-touched');
            el.classList.remove('wrap-focused');
        });
        formElement.reset()
    } else {
        console.log('There are invalid fields.');
        return;
    }
};

// Event listeners
formElement.addEventListener('submit', submitForm);
formElement.addEventListener('blur', validateInputs)
formElement.addEventListener('input', validateInputs)

formFields.forEach(el => {
    el.addEventListener('blur', changeTouched.bind(this, el))
    el.addEventListener('focus', addFocused)
});

formFields.forEach(el => {
    el.addEventListener('blur', removeFocused)
});

formElement.addEventListener('focus', changeTouched.bind(this, formElement));

displayInitialToast()
formElement.reset()