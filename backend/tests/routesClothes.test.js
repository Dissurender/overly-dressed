const request = require("supertest");
const router = require('../routes/clothes.js');

describe("Clothes Routes", () => {
    it("should return the Root route", async () => {
        const res = await request(router).get('/');
        expect(res.statusCode).toBe(200);
    });
});

