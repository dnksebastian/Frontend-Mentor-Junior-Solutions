// DOM Elements
const formElement = document.getElementById('order-form');
const menuOptionsList = document.getElementById('menu-options-wrapper');
const cartItemsDisplayList = document.getElementById('active-cart-display');

// Template Elements
const singleMenuElementTemplate = document.getElementById('menu-option');
const singleCartElementTemplate = document.getElementById('cart-element');


// Cart Data
const cartItems = [];
let cartUnique = [];

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
            const newMenuEl = makeSingleMenuElement(el);
            menuOptionsList.append(newMenuEl);
        })
    }
};

populateMenu();


const makeSingleMenuElement = (elementData) => {
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
    elImg.dataset.thumbnail = elementData.image.thumbnail;

    elCategory.textContent = elementData.category;
    elName.textContent = elementData.name;
    elPrice.textContent = `$${elementData.price.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;

    return menuElClone;
};


const delegateChangeItem = (e) => {
    e.preventDefault();

    let target = e.target;

    if (target.tagName == 'BUTTON' && target.classList.contains('btn-addcart')) {
        addItemToCart(e)
    } else if (
        target.tagName == 'BUTTON' && target.classList.contains('btn-removecart')
    ) {
        removeItemFromCart(e)
    }
     else {
        return
    }

};

const addItemToCart = (e) => {
    e.preventDefault();
    const target = e.target;

    const myItemObj = {};

    const closestElWrapper = target.closest('.menu-option-wrapper');

    if (closestElWrapper) {
        myItemObj.name = closestElWrapper.querySelector('.option-name').textContent;
        myItemObj.category = closestElWrapper.querySelector('.category').textContent;
        myItemObj.price = closestElWrapper.querySelector('.price').textContent.replace('$', '');
        myItemObj.thumbnail = closestElWrapper.querySelector('.menu-img').dataset.thumbnail;
    }

    cartItems.push(myItemObj);

    closestElWrapper.dataset.count = countItemsOfType(myItemObj.name);

    cartUnique = Array.from(
        new Set(cartItems.map(JSON.stringify))
      ).map(JSON.parse);

    console.log(cartItems);

    populateCart()
    updateStatus()
};

const removeItemFromCart = (e) => {
    e.preventDefault()
    const target = e.target;

    const closestElWrapper = target.closest('.menu-option-wrapper');

    const elName = closestElWrapper.querySelector('.option-name');

    const foundCartObj = cartItems.find(el => el.name === elName.textContent);
    const foundIndex = cartItems.indexOf(foundCartObj);


    if (foundCartObj) {
        cartItems.splice(foundIndex, 1)
    }


    closestElWrapper.dataset.count = countItemsOfType(foundCartObj.name);

    cartUnique = Array.from(
        new Set(cartItems.map(JSON.stringify))
      ).map(JSON.parse);

    populateCart()
    updateStatus()
    console.log('item removed');
};



const countItemsOfType = (name) => {
    return cartItems.filter(item => item.name === name).length
};



const makeSingleCartElement = (elData) => {
    const cartElClone = singleCartElementTemplate.content.cloneNode(true);

    const elName = cartElClone.querySelector('.cart-el-name');
    const elAmount = cartElClone.querySelector('.el-amount');
    const elBasePrice = cartElClone.querySelector('.el-base-price');
    const elTotalPrice = cartElClone.querySelector('.el-total-price');

    const elementCount = countItemsOfType(elData.name);
    const totalPrice = +elementCount * +elData.price.replace('$', '');

    elName.textContent = elData.name;
    elAmount.textContent = `${elementCount}x`;
    elBasePrice.textContent = `@ $${elData.price}`;
    elTotalPrice.textContent = `$${totalPrice.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;

    return cartElClone
};


const populateCart = () => {
    cartItemsDisplayList.replaceChildren();

    cartUnique.forEach(el => {
        const newCartEl = makeSingleCartElement(el);
        cartItemsDisplayList.append(newCartEl)
    })
};


const updateStatus = () => {
    let cartCount = cartItems.length;

    if (cartCount > 0) {
        formElement.classList.add('hasItems');
    } else {
        formElement.classList.remove('hasItems');
    }
};


const submitForm = (e) => {
    e.preventDefault();

    console.log('form submitted');

    formElement.reset();
};


// Event listeners

formElement.addEventListener('submit', submitForm);

menuOptionsList.addEventListener('click', delegateChangeItem);