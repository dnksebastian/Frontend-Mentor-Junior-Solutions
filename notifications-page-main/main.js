// DOM Elements

const notificationCounterEl = document.getElementById("notification-counter");
const clearNotificationsBtn = document.getElementById("clear-btn");
const notificationListElement = document.getElementById("notifications-list");

const notificationElements = document.getElementsByClassName("notification-el");
const notificationElementsArr = [...notificationElements];

const unreadElementsArr = [...document.getElementsByClassName("unread")];

// Functions & variables
let counter = unreadElementsArr.length;

const checkActiveNotifications = (e) => {
  if ( e.target.matches('.unread') || e.target.matches(".unread *")) {
    console.log(e.target);
    e.target.closest('li').classList.remove('unread');
    counter--;
    notificationCounterEl.textContent = counter;
  }
};

const clearAllNotifications = () => {
    
  unreadElementsArr.forEach((el) => {
    el.classList.remove('unread');
    counter = 0;
  })
  notificationCounterEl.textContent = counter;
};

// Event listeners

clearNotificationsBtn.addEventListener("click", clearAllNotifications);
notificationListElement.addEventListener("click", checkActiveNotifications);
