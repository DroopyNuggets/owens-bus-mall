import data from './data.js';
// import getRandomProduct from './random-image.js';
// import displayThreeProducts from './display-three-products.js';

const productsData = data.slice();

function findById(items, id) {
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        if (item.id === id) {
            return item;
        }
    }
}

let totalVotes;
let productVotesSummary;

// initialize state satisides es lint... if we didn't have this function totalVotes & productVoteSummary would sit unhappily ^ up there
const initializeState = () => {
    totalVotes = 0;
    productVotesSummary = [];
};

initializeState();

// this function does what it says... it's taking the "getRandomProduct" function that we created earlier and creating three random products...
const displayThreeProducts = () => {
    // declaring each of the three variables that we need to render to the page... "product1" is a const because its value will not change.
    const product1 = getRandomProduct(productsData);
    // product two and three are using "let" because their values will change in the situation that there is overlap in the "random" images
    let product2 = getRandomProduct(productsData);
    let product3 = getRandomProduct(productsData);

    // here we are setting up a filter to make sure that none of the three images that we make are the same as the other
    while (product1 === product2
        || product2 === product3
        || product3 === product1
    ) {
    // if any of the images happen to be the same then product2 and product3 will continue to generate random images until they find three unequal images
        product2 = getRandomProduct(productsData);
        product3 = getRandomProduct(productsData);
    }
    // **grab some dom** we need to declare "const(s)" and "document.getElementById"... we're grabbing all the radio inputs here and the div classes assosciated with them
    const radio1 = document.getElementById('product1');
    const radio2 = document.getElementById('product2');
    const radio3 = document.getElementById('product3');
    const radio1span = document.getElementById('product1span');
    const radio2span = document.getElementById('product2span');
    const radio3span = document.getElementById('product3span');

    // now we're changing the value of the radio classes that we just created 
    radio1.value = product1.id;
    radio2.value = product2.id;
    radio3.value = product3.id;
    radio1span.textContent = product1.name;
    radio2span.textContent = product2.name;
    radio3span.textContent = product3.name;
};

// const appendImg = () => {
//     const img1 = document.getElementById('product1');
//     const img2 = document.getElementById('product2');
//     const img3 = document.getElementById('product3');

//     img1.src = 

//     img1.appendChild('')
// };






function getRandomProduct(randomProduct) {
    const randomNumber = Math.floor(Math.random() * randomProduct.length);
    const randomImage = productsData[randomNumber];

    return randomImage;
}

displayThreeProducts();