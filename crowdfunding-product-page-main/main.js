// DOM Elements

// Mobile menu elements
const mobMenuIconEl = document.getElementById("mobile-menu-control");
const mobNavEl = document.getElementById("top-nav");
const backdropEl = document.getElementById("backdrop");

// Main control
const backProjectBtn = document.getElementById("back-project-btn");
const closeModalBtn = document.getElementById("close-modal");
const pledgesDialogEl = document.getElementById("selection-modal");
const successModalEl = document.getElementById('success-modal');
const closeSuccessBtn = document.getElementById('close-success');

// Stats value elements
const bookmarkBtn = document.getElementById("bookmark-btn");
const bookmarkBox = document.querySelector('.bookmark-helper');
const moneyRaisedEl = document.getElementById("money-raised");
const totalBackersEl = document.getElementById("total-backers");

const progressBarEl = document.getElementById("progress-value");

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

const radioElements = [
  ...pledgesDialogEl.querySelectorAll('input[type="radio"]'),
];

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

function showOptionsModal() {
  pledgesDialogEl.showModal();
  document.body.classList.add("body-no-scroll");
}

function showSuccessModal() {
  successModalEl.showModal();
  document.body.classList.add("body-no-scroll");
}

function closeModal() {
  pledgesDialogEl.close();
  successModalEl.close();
  document.body.classList.remove("body-no-scroll");
}

// Style and control pledge pick

function stylePickedOption() {
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
  bookmarkBox.classList.toggle('bookmarked');
  bookmarkBox.classList.toggle('not-bookmarked');

  isBookmarked? bookmarkBtn.textContent = "Bookmarked" : bookmarkBtn.textContent = "Bookmark";
  // bookmarkBtn.classList.toggle("bookmarked");
  console.log(isBookmarked);
}

// Project stats control

function updateProjectStats() {
  moneyRaisedEl.textContent = `$${totalMoneyRaised.toLocaleString()}`;
  if (totalMoneyRaised >= 100000) {
    moneyRaisedEl.textContent = "More than $100.000";
    moneyRaisedEl.style.fontSize = "1.5rem";
  }

  totalBackersEl.textContent = totalBackers.toLocaleString();

  bambooCountEl.textContent = bambooOptionItemsLeft;
  bambooItemsModalEl.textContent = bambooOptionItemsLeft;

  blackEditionCount.textContent = blackEditionItemsLeft;
  blackEditionItemsModalEl.textContent = blackEditionItemsLeft;

  mahoganyCount.textContent = mahoganyItemsLeft;
  mahoganyItemsModalEl.textContent = mahoganyItemsLeft;

  let projectProgress = ((totalMoneyRaised / 100000) * 100).toFixed(0);
  if (totalMoneyRaised >= 100000) {
    projectProgress = 100;
  }
  progressBarEl.style.width = `${projectProgress}%`;
}

updateProjectStats();

function validatePledge(e) {
  console.log(pledgeValue);
  let isValid = false;
  let errorMsg = "Please check entered values.";
  const errMsg = document.createElement("span");
  errMsg.classList.add("error-msg");

  const pledgeEl = e.target.closest(".pledge-options");

  if (!pledgeEl.querySelector(".error-msg")) {
    pledgeEl.appendChild(errMsg);
    errMsg.textContent = errorMsg;
  } else {
    pledgeEl.lastChild.remove();
    pledgeEl.appendChild(errMsg);
    errMsg.textContent = errorMsg;
  }

  if (isNaN(pledgeValue)) {
    errorMsg = "Please use only numbers."
    errMsg.textContent = errorMsg;
    return;
  }

  if (pledgeValue > 10000) {
    errorMsg = "Maximum pledge amount is $10,000.";
    errMsg.textContent = errorMsg;
    return;
  }

  if (pickedPledge === "bamboo") {
    if (pledgeValue < 25) {
      errorMsg = "Pledge must be at least $25.";
      errMsg.textContent = errorMsg;
      return;
    }
    isValid = true;
  } else if (pickedPledge === "black-edition") {
    if (pledgeValue < 75) {
      errorMsg = "Pledge must be at least $75.";
      errMsg.textContent = errorMsg;
      return;
    }
    isValid = true;
  } else if (pickedPledge === "mahogany") {
    if (pledgeValue < 200) {
      errorMsg = "Pledge must be at least $200.";
      errMsg.textContent = errorMsg;
      return;
    }
    isValid = true;
  } else if (pickedPledge === "no-reward") {
    isValid = true;
  } else {
    isValid = false;
  }

  if (isValid === true) {
    const errMsgs = document.querySelectorAll(".error-msg");
    errMsgs.forEach((msg) => {
      msg.remove();
    });
  }

  return isValid;
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

function resetModalState() {
  modalOptionsElements.forEach((el) => {
    el.querySelector('input[type="radio"]').checked = false;

    if (el.id !== "no-reward-p") {
      el.querySelector('input[type="text"]').value = "";
    }
  })
}

function pickPledge(e) {
  pickedPledge = e.target.value;
}

function updatePledgeValue(e) {
  pledgeValue = +e.target.value.trim();
}

function backProject(e) {
  e.preventDefault();

  let isValid = validatePledge(e);

  if (isValid) {
    totalBackers++;
    totalMoneyRaised = totalMoneyRaised + pledgeValue;

    if (e.target.closest(".pledge-li").id === "bamboo-p") {
      bambooOptionItemsLeft--;
    } else if (e.target.closest(".pledge-li").id === "black-edition-p") {
      blackEditionItemsLeft--;
    } else if (e.target.closest(".pledge-li").id === "mahogany-p") {
      mahoganyItemsLeft--;
    }

    updateProjectStats();
    checkIfDisable();
    closeModal();
    resetModalState();
    showSuccessModal();
  }
}

// Event listeners

mobMenuIconEl.addEventListener("click", toggleMenu);
backProjectBtn.addEventListener("click", showOptionsModal);
closeModalBtn.addEventListener("click", closeModal);
closeSuccessBtn.addEventListener('click', closeModal);

pledgeOptionsElements.forEach((el) => {
  btnEl = el.querySelector("button");
  btnEl.addEventListener("click", () => {
    pledgesDialogEl.showModal();
    if (el.closest(".pledge-li").id === "bamboo-option") {
      option = radioElements.find((el) => el.id === "pledge2");
      option.checked = true;
      option.click();
    } else if (el.closest(".pledge-li").id === "black-edition-option") {
      option = radioElements.find((el) => el.id === "pledge3");
      option.checked = true;
      option.click();
    } else if (el.closest(".pledge-li").id === "mahogany-option") {
      option = radioElements.find((el) => el.id === "pledge4");
      option.checked = true;
      option.click();
    }
    stylePickedOption();
  });
});

modalOptionsElements.forEach((el) => {
  el.addEventListener("click", stylePickedOption);
  el.querySelector('input[type="radio"]').addEventListener("click", pickPledge);

  if (el.id !== "no-reward-p") {
    el.querySelector('input[type="text"]').addEventListener(
      "input",
      updatePledgeValue
    );
  }

  el.querySelector("button").addEventListener("click", backProject);
});

bookmarkBtn.addEventListener("click", checkBookmark);
