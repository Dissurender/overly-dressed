const connectDB = require('../config/db');
const { faker } = require('@faker-js/faker'); // https://fakerjs.dev/api/commerce.html#product
const Clothes = require('../models/clothes');



const clothesData = [
    {
        id: 1,
        name: faker.commerce.product(),
        price: faker.commerce.price(10, 200, 2),
        date: Date.now(),
        description: faker.commerce.productDescription(),
    },
    {
        id: 2,
        name: faker.commerce.product(),
        price: faker.commerce.price(10, 200, 2),
        date: Date.now(),
        description: faker.commerce.productDescription(),
    },
    {
        id: 3,
        name: faker.commerce.product(),
        price: faker.commerce.price(10, 200, 2),
        date: Date.now(),
        description: faker.commerce.productDescription(),
    },
];

const seedDBWithClothes = async () => {
    connectDB(); //URI isn't being passed in?
    await Clothes.deleteMany({});
    await Clothes.create(clothesData);
};

