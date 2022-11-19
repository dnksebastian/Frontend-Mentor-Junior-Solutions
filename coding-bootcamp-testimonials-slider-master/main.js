// DOM Elements

const customerPictureElement = document.getElementById("picwrap");
const customerPicture = document.getElementById("customerpic");
const controlElement = document.getElementById("slider-control");
const leftBtnElement = document.getElementById("left");
const rightBtnElement = document.getElementById("right");
const customerElement = document.getElementById("customer");
const customerQuoteElement = document.getElementById("quote");
const customerNameElement = document.getElementById("customer-name");
const customerPositionElement = document.getElementById("customer-position");

const customersList = [
  {
    imgsrc: "./images/image-tanya.jpg",
    quote: `“ I’ve been interested in coding for a while but never taken the jump, until now.
        I couldn’t recommend this course enough. I’m now in the job of my dreams and so
        excited about the future. ”`,
    customerName: "Tanya Sinclair",
    customerPos: "UX Engineer",
  },
  {
    imgsrc: "./images/image-john.jpg",
    quote: `“ If you want to lay the best foundation possible I’d recommend taking this course.
        The depth the instructors go into is incredible. I now feel so confident about
        starting up as a professional developer. ”`,
    customerName: "John Tarkpor",
    customerPos: "Junior Front-end Developer",
  },
];

// Functions

const time = 3000;
let active = 0;

const switchCustomer = () => {
  resetAnimation();

  if (active === 0) {
    customerPicture.classList.add("showPic");
    customerPicture.src = customersList[0].imgsrc;

    controlElement.classList.add("moveSlider");

    customerElement.classList.add("showElement");
    customerQuoteElement.textContent = customersList[0].quote;
    customerNameElement.textContent = customersList[0].customerName;
    customerPositionElement.textContent = customersList[0].customerPos;

    active++;
  } else if (active === 1) {
    customerPicture.classList.add("showPic");
    customerPicture.src = customersList[1].imgsrc;

    controlElement.classList.add("moveSlider");

    customerElement.classList.add("showElement");
    customerQuoteElement.textContent = customersList[1].quote;
    customerNameElement.textContent = customersList[1].customerName;
    customerPositionElement.textContent = customersList[1].customerPos;

    active--;
  }
  clearInterval(indexInterval);
  indexInterval = setInterval(switchCustomer, time);
};

const resetAnimation = () => {
  customerPicture.classList.remove("showPic");
  void customerPicture.offsetWidth;

  controlElement.classList.remove("moveRight");
  controlElement.classList.remove("moveLeft");
  controlElement.classList.remove("moveSlider");
  void controlElement.offsetWidth;

  customerElement.classList.remove("showElement");
  void customerElement.offsetWidth;
};

// Key controls

const switchLeft = () => {
  switchCustomer();
  console.log("left");
  controlElement.classList.add("moveLeft");
};
const switchRight = () => {
  switchCustomer();
  console.log("right");
  controlElement.classList.add("moveRight");
};

const keyChange = (e) => {
  
  if (e.keyCode === 37) {
    switchLeft();
  } else if (e.keyCode === 39) {
    switchRight();
  }
  
};

let indexInterval = setInterval(switchCustomer, time);

// Event listeners
leftBtnElement.addEventListener("click", switchLeft);
rightBtnElement.addEventListener("click", switchRight);
window.addEventListener("keydown", keyChange);
