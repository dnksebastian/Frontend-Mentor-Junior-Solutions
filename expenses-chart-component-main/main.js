// DOM Elements & global variables

const chartElement = document.getElementById('graph');

// Functions
async function fetchData() {
  try {
    const chartData = await fetch("./data.json");
    const dataArr = await chartData.json();
    console.log(dataArr);
    return dataArr;
  } catch (error) {
    return error;
  }
}

function createLiEleement(day, amount) {

    const liItem = document.createElement('li');
    const valueElement = document.createElement('span');
    const barElement = document.createElement('div');
    const labelElement = document.createElement('span');
    
    liItem.classList.add('bar-wrap');
    valueElement.classList.add('bar-value');
    barElement.classList.add('bar');
    labelElement.classList.add('bar-label');

    liItem.appendChild(valueElement);
    liItem.appendChild(barElement);
    liItem.appendChild(labelElement);
    
    valueElement.textContent = amount;
    labelElement.textContent = day;    
    
    chartElement.appendChild(liItem);
}

async function populateChart() {
    const data = await fetchData();

    data.forEach(el => {
        const day = el.day;
        const amount = el.amount;

        createLiEleement(day, amount);
    });
};

populateChart();
