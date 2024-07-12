// DOM Elements
const formElement = document.getElementById('order-form');
const menuOptionsList = document.getElementById('menu-options-wrapper');

// Template Elements
const singleMenuElementTemplate = document.getElementById('menu-option');
const singleCartElementTemplate = document.getElementById('cart-element');


// Functions
const getData = async () => {
    try {
        const res = await fetch('./data.json');

        if(!res.ok) {
            throw new Error(`Response: ${res.status}`);
        }

        const menuData = await res.json();
        return menuData
    }
    catch (err) {
        console.error(err.message);
    }
};

const populateMenu = async () => {
    const menuData = await getData();

    if (menuData) {
        menuOptionsList.replaceChildren();

        menuData.forEach(el => {
            const newMenuEl = renderSingleMenuElement(el);
            menuOptionsList.append(newMenuEl);
        })
    }


};

populateMenu();

const renderSingleMenuElement = (elementData) => {
    const menuElClone = singleMenuElementTemplate.content.cloneNode(true);

    const elImgL = menuElClone.querySelector('.img-l');
    const elImgM = menuElClone.querySelector('.img-m');
    const elImgS = menuElClone.querySelector('.img-s');
    const elImg = menuElClone.querySelector('.menu-img');

    const elCategory = menuElClone.querySelector('.category');
    const elName = menuElClone.querySelector('.option-name');
    const elPrice = menuElClone.querySelector('.price');

    elImgL.srcset = elementData.image.desktop;
    elImgM.srcset = elementData.image.tablet;
    elImgS.srcset = elementData.image.mobile;
    elImg.src = elementData.image.desktop;
    elImg.alt = elementData.name;

    elCategory.textContent = elementData.category;
    elName.textContent = elementData.name;
    elPrice.textContent = `$${elementData.price.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;

    return menuElClone;
};

// Event listeners