import supertest from "supertest";

import app from "../src/aula-08/enunciado__passa-repassa/app"
import { ReservationInput } from "../src/aula-08/enunciado__passa-repassa/src/repository";

const api = supertest(app);

describe("API test", () => {
  it("should create a reservation", async () => {
    const reservation: ReservationInput = {
      startDate: new Date(),
      endDate: new Date()
    };

    const { status } = await api.post("/reservations").send(reservation);
    expect(status).toBe(201);
  });

  it("should return all reservations", async () => {
    const { status, body } = await api.get("/reservations");
    expect(status).toBe(200);
    expect(body).toHaveLength(1);
  });
});