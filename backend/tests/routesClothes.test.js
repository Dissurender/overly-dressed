const supertest = require('supertest');
const app = require('../server.js');

//    app.get('/api/clothes/:clothesId', controller.getClothes);

describe("Given the routes for the clothes route.", () => {
    it("should return the Root route", async () => {
        const { body, statusCode } = await supertest(app).get(`/`);
        expect(statusCode).toBe(200);
        expect(body.server_status).toBe("active");
    });
    it("should error if the clothesId aren't passed in", async () => {
        const clothesId = 1;
        await supertest(app).get(`/api/clothes/?clothesId=${clothesId}`).expect(200);
        await supertest(app).get(`/api/clothes/${clothesId}`).expect(404);
    });
});

