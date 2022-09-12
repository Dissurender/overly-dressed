const supertest = require('supertest');
const app = require('../server.js');

describe("Given the routes for the clothes route.", () => {
    it("should return the Root route", async () => {
        const { body, statusCode } = await supertest(app).get(`/`);
        expect(statusCode).toBe(200);
        expect(body.server_status).toBe("active");
    });
    it("should return the api/clothes route", async () => {
        const { body, statusCode } = await supertest(app).get(`/api/clothes`);
        expect(statusCode).toBe(200);
    })
    it("should return an error message if the clothesId is not a valid parameter (Float)", async () => {
        let clothesId = 34.22;
        const { body, statusCode } = await supertest(app).get(`/api/clothes/?clothesId=${clothesId}`);
        expect(statusCode).toBe(200);
        expect(body.message).toBe("Invalid query of clothesId");
    });
    it("should return an error message if the clothesId is not a valid parameter (String)", async () => {
        let clothesId = 'x';
        const { body, statusCode } = await supertest(app).get(`/api/clothes/?clothesId=${clothesId}`);
        expect(statusCode).toBe(200);
        expect(body.message).toBe("Invalid query of clothesId");
    });
    it("should return an error message if the clothesId is undefined", async () => {
        const { body, statusCode } = await supertest(app).get(`/api/clothes/`);
        expect(statusCode).toBe(200);
        expect(body.message).toBe('No query of clothesId found');
    });

});

