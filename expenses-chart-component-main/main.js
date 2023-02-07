// DOM Elements & global variables

const chartElement = document.getElementById('graph');
const totalValueElement = document.getElementById('total-value');

const currentDay = new Date().getDay();

let totalValue = null;

// Functions
async function fetchData() {
  try {
    const chartData = await fetch("./data.json");
    const dataArr = await chartData.json();
    return dataArr;
  } catch (error) {
    return error;
  }
}

function createLiEleement(day, amount, index) {

    const liItem = document.createElement('li');
    // const valueElement = document.createElement('span');
    const barElement = document.createElement('div');
    const labelElement = document.createElement('span');
    
    liItem.classList.add('bar-wrap');
    // valueElement.classList.add('bar-value');
    barElement.classList.add('bar');
    labelElement.classList.add('bar-label');

    barElement.style.height = (amount / 3.5) + 'rem';

    barElement.dataset.value = `$${amount}`;

    if (currentDay === index + 1) {
        barElement.dataset.day = 'current';
    }

    totalValue += amount;

    // liItem.appendChild(valueElement);
    liItem.appendChild(barElement);
    liItem.appendChild(labelElement);
    
    // valueElement.textContent = amount;
    labelElement.textContent = day;    
    
    chartElement.appendChild(liItem);
}

async function populateChart() {
    const data = await fetchData();

    data.forEach((el, index) => {
        const day = el.day;
        const amount = el.amount;

        createLiEleement(day, amount, index);
    });

    totalValueElement.textContent = `$${totalValue}`
};

populateChart();
