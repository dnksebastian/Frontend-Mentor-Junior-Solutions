// DOM Elements

const notificationCounterEl = document.getElementById("notification-counter");
const clearNotificationsBtn = document.getElementById("clear-btn");
const notificationListElement = document.getElementById("notifications-list");

const notificationElements = document.getElementsByClassName("notification-el");
const notificationElementsArr = [...notificationElements];

let unreadElementsArr = [...document.getElementsByClassName("unread")];


console.log(
  notificationCounterEl,
  clearNotificationsBtn,
  notificationElementsArr,
  notificationListElement,
  unreadElementsArr
);

// Functions

const checkActiveNotifications = (e) => {
  if (e.target.matches(".unread")) {
    e.target.classList.remove('unread');
  }
};

const clearAllNotifications = () => {
    
  unreadElementsArr.forEach((el) => {
    el.classList.remove('unread');
  })
  notificationCounterEl.textContent = 0;
};

// Event listeners

clearNotificationsBtn.addEventListener("click", clearAllNotifications);
notificationListElement.addEventListener("click", checkActiveNotifications);
