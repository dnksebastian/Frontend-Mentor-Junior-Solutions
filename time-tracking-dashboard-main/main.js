// Elements

const currentTimeElements = document.querySelectorAll(".current-time"); //using querySelectorAll returns Array
const pickedTimeframeElements =
  document.getElementsByClassName("picked-timeframe"); // using getElementsByClassName returns array-like object - it's necessary to change it into array by using Array.from() later

const dailyLinkElement = document.getElementById("daily-link");
const weeklyLinkElement = document.getElementById("weekly-link");
const monthlyLinkElement = document.getElementById("monthly-link");


// Functions

function populateDailyElements() {
  fetch("./data.json")
    .then((response) => response.json())
    .then((data) => {
      currentTimeElements.forEach((element, index) => {
        currentTimeElements[index].innerHTML =
          data[index].timeframes.daily.current + "hrs";
      });
      Array.from(pickedTimeframeElements).forEach((element, index) => {
          pickedTimeframeElements[index].innerHTML = "Yesterday - " + data[index].timeframes.daily.previous + "hrs"
      })
    });
}

function populateWeeklyElements() {
    fetch("./data.json")
    .then((response) => response.json())
    .then((data) => {
      currentTimeElements.forEach((element, index) => {
        currentTimeElements[index].innerHTML =
          data[index].timeframes.weekly.current + "hrs";
      });
      Array.from(pickedTimeframeElements).forEach((element, index) => {
          pickedTimeframeElements[index].innerHTML = "Last Week - " + data[index].timeframes.weekly.previous + "hrs"
      })
    });
}

function populateMonthlyElements() {
    fetch("./data.json")
    .then((response) => response.json())
    .then((data) => {
      currentTimeElements.forEach((element, index) => {
        currentTimeElements[index].innerHTML =
          data[index].timeframes.monthly.current + "hrs";
      });
      Array.from(pickedTimeframeElements).forEach((element, index) => {
          pickedTimeframeElements[index].innerHTML = "Last Month - " + data[index].timeframes.monthly.previous + "hrs"
      })
    });
}

// Event handlers

dailyLinkElement.addEventListener("click", populateDailyElements);
weeklyLinkElement.addEventListener("click", populateWeeklyElements);
monthlyLinkElement.addEventListener("click", populateMonthlyElements);