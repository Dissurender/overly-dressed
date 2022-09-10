const mongoose = require("mongoose");
const clothes = require("./clothes");
const db = require("../setup/db");

const clothesData = {
    id: 'sdfsdf',
    name: 'clothesName',
    price: 45.44,
    productDate: Date.now(),
    description: 'Description',
};
/*
id: 
name: 
price: 
productDate: 
description: 
*/
beforeAll(async () => {
    await db.setUp();
});

afterEach(async () => {
    await db.dropCollections();
});

afterAll(async () => {
    await db.dropDatabase();
});
