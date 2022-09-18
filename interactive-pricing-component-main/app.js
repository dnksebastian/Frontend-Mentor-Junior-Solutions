// Elements
const rangeSliderElement = document.getElementById("range-slider");
const pageviewsElement = document.getElementById("pageviews-val");
const priceElement = document.getElementById("price-val");
const billingToggleElement = document.getElementById("billing-toggle");

// Functions

let renderProgressBar = () => {
  let sliderValue = rangeSliderElement.value;
  rangeSliderElement.style.background = `linear-gradient(to right, var(--custom-strong-cyan) 0%, var(--custom-strong-cyan) ${sliderValue}%, var(--custom-light-grayish-blue) ${sliderValue}%, var(--custom-light-grayish-blue) 100%)`;
};

function renderPrice() {
  let slider = rangeSliderElement.value;
  let price

  if (billingToggleElement.checked) {
    if (slider <= 20) {
      price = 8 - 0.25 * 8;
      priceElement.textContent = `$${price}`;
    } else if (slider > 20 && slider <= 40) {
      price = 12 - 0.25 * 12;
      priceElement.textContent = `$${price}`;
    } else if (slider > 40 && slider <= 60) {
      price = 16 - 0.25 * 16;
      priceElement.textContent = `$${price}`;
    } else if (slider > 60 && slider <= 80) {
      price = 24 - 0.25 * 24;
      priceElement.textContent = `$${price}`;
    } else {
      price = 36 - 0.25 * 36;
      priceElement.textContent = `$${price}`;
    }
  }
  else {

    if (slider <= 20) {
      priceElement.textContent = "$8";
    } else if (slider > 20 && slider <= 40) {
      priceElement.textContent = "$12";
    } else if (slider > 40 && slider <= 60) {
      priceElement.textContent = "$16";
    } else if (slider > 60 && slider <= 80) {
      priceElement.textContent = "$24";
    } else {
      priceElement.textContent = "$36";
    }
  }

}

let renderPageviews = () => {
  let slider = rangeSliderElement.value;
  if (slider <= 20) {
    pageviewsElement.textContent = "10K";
  } else if (slider > 20 && slider <= 40) {
    pageviewsElement.textContent = "50K";
  } else if (slider > 40 && slider <= 60) {
    pageviewsElement.textContent = "100K";
  } else if (slider > 60 && slider <= 80) {
    pageviewsElement.textContent = "500K";
  } else {
    pageviewsElement.textContent = "1M";
  }
}

let renderData = () => {
  renderPrice()
  renderPageviews()
}

// Event listeners
rangeSliderElement.addEventListener("input", renderProgressBar);
rangeSliderElement.addEventListener("input", renderData);
billingToggleElement.addEventListener("input", renderData);

/* 
### Page view and pricing totals

Here are the different page view ranges and the corresponding monthly price totals:

- 10K pageviews / $8 per month
- 50K pageviews / $12 per month
- 100K pageviews / $16 per month
- 500k pageviews / $24 per month
- 1M pageviews / $36 per month

If the visitor switches the toggle to yearly billing, a 25% discount should be applied to all prices.
*/
