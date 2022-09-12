const mongoose = require("mongoose");
const User = require("../models/user.js");
const db = require("../setup/db");

const userData = {
    userName: 'testUser',
    email: 'testUser@gmail.com',
    password: '12345678',
};

beforeAll(async () => {
    await db.setUp();
});

afterEach(async () => {
    await db.dropCollections();
});

afterAll(async () => {
    await db.dropDatabase();
});

describe("Given the User model schema", () => {
    it("creates and saves a user object successfully", async () => {
        const validUserObject = new User(userData);
        const savedUser = await validUserObject.save();
        expect(savedUser._id).toBeDefined();
        expect(savedUser.userName).toBe('testUser');
        expect(savedUser.email).toBe('testUser@gmail.com');
        expect(savedUser.password).not.toBe('12345678');
    });
});

