import app from "../src/aula-04/app";
import supertest from "supertest";

describe("api", () => {
    it("GET ./health should return 200 when server is running", async () => {
        const result = (await supertest(app).get("/health"))
        const status = result.status
        expect(status).toBe(200)
    })

    
})