require('dotenv').config({ path: '../config/.env' })
const mongoose = require('mongoose');
const connectDB = require('../config/db');
const { faker } = require('@faker-js/faker'); // https://fakerjs.dev/api/commerce.html#product
const User = require('../models/user');

const userData = [
    {
        userName: 'testUser1',
        email: 'testUser1@gmail.com',
        password: '12345678',
    },
    {
        userName: 'testUser2',
        email: 'testUser2@gmail.com',
        password: '12345678',
    },
];

const seedDBWithUsers = async () => {
    connectDB();
    await User.deleteMany({});
    await User.create(userData);
};

seedDBWithUsers().then(() => {
    mongoose.disconnect();
})


