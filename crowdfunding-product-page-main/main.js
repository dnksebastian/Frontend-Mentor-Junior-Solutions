// DOM Elements

// Mobile menu elements
const mobMenuIconEl = document.getElementById("mobile-menu-control");
const mobNavEl = document.getElementById("top-nav");
const backdropEl = document.getElementById("backdrop");

// Main control buttons
const backProjectBtn = document.getElementById("back-project-btn");
const closeModalBtn = document.getElementById("close-modal");
const pledgesDialogEl = document.getElementById("selection-modal");

// Stats value elements
const bookmarkBtn = document.getElementById("bookmark-btn");
const moneyRaisedEl = document.getElementById("money-raised");
const totalBackersEl = document.getElementById("total-backers");

const bambooCountEl = document.getElementById("bamboo-count");
const blackEditionCount = document.getElementById("black-edition-count");
const mahoganyCount = document.getElementById("mahogany-count");

const bambooItemsModalEl = document.getElementById("bamboo-stand-items");
const blackEditionItemsModalEl = document.getElementById("black-edition-items");
const mahoganyItemsModalEl = document.getElementById("mahogany-items");

// Pledge options elements

const pledgeOptionsElements = [...document.querySelectorAll(".p-option")];
// console.log(pledgeOptionsElements);

const modalOptionsElements = [
  ...pledgesDialogEl.querySelectorAll(".pledge-li"),
];
//   console.log(modalOptionsElements);

// Variables

let isBookmarked = false;

let totalBackers = 5007;
let totalMoneyRaised = 89914;

let bambooOptionItemsLeft = 101;
let blackEditionItemsLeft = 64;
let mahoganyItemsLeft = 1;

let pickedPledge = "";
let pledgeValue = 0;

// Functions

// Control modals and mobile menu
function toggleMenu() {
  mobNavEl.classList.toggle("active");
  mobMenuIconEl.classList.toggle("active");
  backdropEl.classList.toggle("bdrop-active");
  document.body.classList.toggle("body-no-scroll");
}

function showModal() {
  pledgesDialogEl.showModal();
  document.body.classList.add("body-no-scroll");
}

function closeModal() {
  pledgesDialogEl.close();
  document.body.classList.remove("body-no-scroll");
}

// Style and control pledge pick

function pickedOption() {
  modalOptionsElements.forEach((el) => {
    if (el.querySelector("input").checked) {
      // console.log(el.querySelector('.pledge-name').textContent);
      el.classList.add("option-picked");
    } else {
      el.classList.remove("option-picked");
    }
  });
}

// Bookmark control

function checkBookmark() {
  isBookmarked = !isBookmarked;
  bookmarkBtn.classList.toggle("bookmarked");
  console.log(isBookmarked);
}

// Project stats control

function updateProjectStats() {
  moneyRaisedEl.textContent = `$${totalMoneyRaised}`;
  totalBackersEl.textContent = totalBackers;

  bambooCountEl.textContent = bambooOptionItemsLeft;
  bambooItemsModalEl.textContent = bambooOptionItemsLeft;

  blackEditionCount.textContent = blackEditionItemsLeft;
  blackEditionItemsModalEl.textContent = blackEditionItemsLeft;

  mahoganyCount.textContent = mahoganyItemsLeft;
  mahoganyItemsModalEl.textContent = mahoganyItemsLeft;
}

function validatePledge() {
  let isValid = false;

  if (pickedPledge === "bamboo-stand") {
    if (pledgeValue < 25) {
      console.log("Pledge must be at least $25.");
    }
  } else if (pickedPledge === "black-edition") {
    if (pledgeValue < 75) {
      console.log("Pledge must be at least $75.");
    }
  } else if (pickedPledge === "mahogany") {
    if (pledgeValue < 200) {
      console.log("Pledge must be at least $200.");
    }
  } else if (pickedPledge === "no-reward") {
    isValid = true;
  } else {
    isValid = false;
  }
}

// Control disabled elements

function checkIfDisable() {
  pledgeOptionsElements.forEach((el) => {
    const elementValue = el.querySelector(".items-left-value").textContent;
    const elementButton = el.querySelector("button");

    if (elementValue <= 0) {
      el.classList.add("disabled-element");
      elementButton.textContent = "Out of Stock";
      elementButton.setAttribute("disabled", "");
    }
  });

  modalOptionsElements.forEach((el) => {
    if (el.id !== "no-reward-p") {
      elVal = el.querySelector(".modal-value").textContent;
      elBtn = el.querySelector("button");
      elRadio = el.querySelector('input[type="radio"]');

      if (elVal <= 0) {
        elBtn.setAttribute("disabled", "");
        elRadio.setAttribute("disabled", "");
        el.classList.add("disabled-element");
      }
    }
  });
}

checkIfDisable();

// function checkItemStock() {
//     if(bambooOptionItemsLeft <= 0) {
//         // ...
//     }
//     if(blackEditionItemsLeft <= 0){
//         // ...
//     }
//     if(mahoganyItemsLeft <= 0 ) {
//         // ...
//     }
// }

// updateProjectStats();

function backProject() {
  totalBackers--;
  totalMoneyRaised = totalMoneyRaised + pledgeValue;

  updateProjectStats();
}

// updateProjectStats()

// Event listeners

mobMenuIconEl.addEventListener("click", toggleMenu);
backProjectBtn.addEventListener("click", showModal);
closeModalBtn.addEventListener("click", closeModal);
modalOptionsElements.forEach((el) => {
  el.addEventListener("click", pickedOption);
});

bookmarkBtn.addEventListener("click", checkBookmark);
