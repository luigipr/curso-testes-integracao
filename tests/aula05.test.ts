import app from "../src/aula-05/src/app"
import supertest from "supertest";

describe("api", () => {
    it("fibonacci", async () => {
        const result = (await supertest(app).get("/fibonacci?elements=5"))
        const status = result.status
        expect(status).toBe(200)
        expect(result.body).toHaveLength(5)
    }) 
})