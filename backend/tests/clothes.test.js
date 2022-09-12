const mongoose = require("mongoose");
const Clothes = require("../models/clothes.js");
const db = require("../setup/db");

const clothesData = {
    id: 1,
    name: 'clothesName',
    price: 45.44,
    productDate: Date.now(),
    description: 'Description',
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

describe("Given the Clothes model schema", () => {
    it("creates and saves a clothes object successfully", async () => {
        const validClothesObject = new Clothes(clothesData);
        const savedClothes = await validClothesObject.save();
        expect(savedClothes._id).toBeDefined();
        expect(savedClothes.id).toBe(1);
        expect(savedClothes.name).toBe('clothesName');
        expect(savedClothes.price).toBe(45.44);
        expect(savedClothes.description).toBe('Description');
    });

    it("create clothes object without required fields should fail", async () => {
        //should probably be refactored.
        const clothesWithoutRequiredField = new Clothes({});
        let err;
        try {
            const savedClothesWithoutRequiredField = await clothesWithoutRequiredField.save();
        } catch (error) {
            err = error;
        }
        expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
        expect(err.errors.name).toBeDefined();
        expect(err.errors.price).toBeDefined();
        expect(err.errors.description).toBeDefined();
        expect(err.errors.id).toBeDefined();
    })
});

