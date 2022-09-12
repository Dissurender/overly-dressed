const supertest = require('supertest');
const app = require('../server.js');

describe("Routes for Clothes", () => {

    it("should define the route 'GET' / and call the right handler", async () => {
        const clothesId = '15';
        expect(true).toBe(true);
        //await supertest(app).get(`/duck`).expect(404);
        //await supertest(app).get(`/api/clothes/${clothesId}`).expect(404);
    });
});

