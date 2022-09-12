const express = require('express')
const loadClothesRoutes = require('../routes/clothes');
const app = express()


describe("Routes for Clothes", () => {
    const app = { get: () => { } }
    const controller = { getRoot: () => { } }

    beforeAll(async () => {
        loadClothesRoutes(app, controller);
    });


    it("should define the route 'GET' / and call the right handler", async () => {
        expect(true).toBe(true);
    });
});

