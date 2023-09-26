//import app from "../src/aula-06/exercicio_quando-era-o-evento/src/app";
import app from "../src/aula-06/exercicio_quando-era-o-evento/src/app";
import supertest from "supertest";

const api = supertest(app);

describe("Testing API", () => {
  it("should return a valid body", async () => {
    const result = await api.get("/event");
    expect(result.status).toBe(200);
    expect(result.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          title: expect.any(String),
          image: expect.any(String),
          date: expect.any(String)
        })
        ])
    )
  })
});
