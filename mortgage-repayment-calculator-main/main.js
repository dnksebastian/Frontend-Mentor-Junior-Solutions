// DOM Elements
const formElement = document.getElementById("calculator-form");
const inputWrapperEls = document.querySelectorAll(".input-wrapper");
const formFields = Array.from(formElement.elements);
const resetBtn = document.getElementById("b-reset");

const activeViewEl = document.getElementById("active-view");
const completedViewEl = document.getElementById("completed-view");

const monthlyResultEl = document.getElementById("monthly-result");
const totalResultEl = document.getElementById("total-result");

// AutoNumeric Config for Mortgage Input formatting
const mValueFormattedEl = new AutoNumeric('#m-amount',{
  digitGroupSeparator: ',',
  decimalCharacter: '.',
  allowDecimalPadding: false,
  minimumValue: '0',
  overrideMinMaxLimits: 'invalid',
  showWarnings: false
});

// Functions

const calculateMonthlyRepayments = (
  mortgage_amount,
  mortgage_term,
  interest_rate,
  mortgage_type
) => {
  if (mortgage_type === "repayment") {
    let monthly_interest = interest_rate / 100 / 12;
    let payments_number = mortgage_term * 12;

    let monthly_payment =
      (mortgage_amount *
        monthly_interest *
        Math.pow(1 + monthly_interest, payments_number)) /
      (Math.pow(1 + monthly_interest, payments_number) - 1);

    let results = {
      monthlyPayment: monthly_payment,
      total: monthly_payment * payments_number,
    };

    return results;
  } else if (mortgage_type === "interest-only") {
    let interest = interest_rate / 100;
    let payments_number = mortgage_term * 12;
    let monthly_payment = (interest * mortgage_amount) / 12;

    let results = {
      monthlyPayment: monthly_payment,
      total: monthly_payment * payments_number,
    };
    return results;
  } else {
    return;
  }
};

const setTouched = (el) => {
  const closestForm = el.closest("form");
  const closestWrap = el.closest(".input-wrapper");

  if (closestForm) {
    closestForm.classList.add("form-touched");
  }

  if (closestWrap) {
    closestWrap.classList.add("wrap-touched");
  }
};

const setFocused = (e) => {
  const closestWrap = e.target.closest(".input-wrapper");

  if (closestWrap) {
    closestWrap.classList.add("wrap-focused");
  }
};

const removeFocused = (e) => {
  const closestWrap = e.target.closest(".input-wrapper");
  if (closestWrap) {
    closestWrap.classList.remove("wrap-focused");
  }
};

const validateInputs = () => {
  formFields.forEach((el) => {
    const closestWrap = el.closest(".input-wrapper");

    if (!el.checkValidity()) {
      if (closestWrap) {
        const errMsgEl = closestWrap.querySelector(".error-msg");
        const validityData = el.validity;

        if (validityData.valueMissing) {
          errMsgEl.textContent = "This field is required";
        } else if (validityData.badInput || validityData.patternMismatch) {
          errMsgEl.textContent = "Please enter correct value";
        } else if (validityData.rangeUnderflow) {
          errMsgEl.textContent = "Value too low";
        } else {
          errMsgEl.textContent = "Invalid input";
        }

        closestWrap.classList.add("invalid");
      }
    } else {
      if (closestWrap) {
        closestWrap.classList.remove("invalid");
      }
    }
  });
};

const resetForm = (e) => {
  formElement.classList.remove("form-touched");

  formFields.forEach((el) => {
    const closestWrap = el.closest(".input-wrapper");

    if (closestWrap) {
      closestWrap.classList.remove("wrap-touched");
      closestWrap.classList.remove("wrap-focused");
      closestWrap.classList.remove("invalid");
    }
  });
  mValueFormattedEl.clear(true)
  formElement.reset();
  activeViewEl.style.display = "flex";
  completedViewEl.style.display = "none";
};

const submitForm = (e) => {
  e.preventDefault();

  formFields.forEach((el) => {
    setTouched(el);
  });

  validateInputs(e);

  const formIsValid = formElement.checkValidity();

  if (formIsValid) {
    const data = new FormData(e.target);

    const mAmount = AutoNumeric.getNumber('#m-amount');

    // const mAmount = data.get("m-amount");
    const mTerm = data.get("m-term");
    const mRate = data.get("i-rate");
    const mType = data.get("mortgage-type");

    const results = calculateMonthlyRepayments(mAmount, mTerm, mRate, mType);

    const monthlyResult =
      Math.round((results.monthlyPayment + Number.EPSILON) * 100) / 100;
    const totalResult =
      Math.round((results.total + Number.EPSILON) * 100) / 100;

    activeViewEl.style.display = "none";
    completedViewEl.style.display = "flex";

    monthlyResultEl.textContent = `£${monthlyResult.toLocaleString()}`;
    totalResultEl.textContent = `£${totalResult.toLocaleString()}`;
  } else {
    console.log("There are invalid fields...");
    return;
  }
};

// Event listeners
formElement.addEventListener("submit", submitForm);

formElement.addEventListener("blur", validateInputs);
formElement.addEventListener("input", validateInputs);

formFields.forEach((el) => {
  el.addEventListener("blur", setTouched.bind(this, el));
  el.addEventListener("focus", setFocused);
});

formFields.forEach((el) => {
  el.addEventListener("blur", removeFocused);
});

formElement.addEventListener("focus", setTouched.bind(this, formElement));

formElement.addEventListener("reset", resetForm);
