console.log(".");

const rangeSliderElement = document.getElementById("range-slider");
console.log(rangeSliderElement);

let renderProgressBar = () => {
let sliderValue = rangeSliderElement.value;
rangeSliderElement.style.background = `linear-gradient(to right, var(--custom-strong-cyan) 0%, var(--custom-strong-cyan) ${sliderValue}%, var(--custom-light-grayish-blue) ${sliderValue}%, var(--custom-light-grayish-blue) 100%)`
};

rangeSliderElement.addEventListener('input', renderProgressBar);


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