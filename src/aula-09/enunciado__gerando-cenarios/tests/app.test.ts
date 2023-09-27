import supertest from "supertest";

import app from "./../src/app";
import prisma from "../src/database";

const api = supertest(app);

beforeEach(async () => {
  await prisma.user.deleteMany();
});

describe("POST /users tests", () => {
  it("should create a user", async () => {
    // TODO
    const result = await api.post("/users").send({
        email: "a@a.com",
        password: "123456",
    });
    console.log(result)
    expect(result.status).toBe(201);
  });
  it("should receive 409 when trying to create two users with same e-mail", async () => {
    // TODO
    const result = await api.post("/users").send({
      email: "a@a.com",
      password: "123456",
  });

  });
});

describe("GET /users tests", () => {

  it("should return a single user", async () => {
    // TODO
    const user = await prisma.user.create({
      data: {
        email: "a@a.com",
        password: "123456",
      }
    });
    const {status, body} = await api.get(`/users/${user.id}`);
    expect(status).toBe(200);
    expect(body).toEqual({
      id: user.id,
      email: "a@a.com",
      password: "123456",
    })
  });

  it("should return 404 when can't find a user by id", async () => {
    // TODO
    const user = await prisma.user.create({
      data: {
        email: "a@a.com",
        password: "123456",
      }
    });
    const {status, body} = await api.get(`/users/${user.id}`);
    if(!body) expect(status).toBe(404)
  });

  it("should return all users", async () => {
    // TODO
    await prisma.user.create({
      data: {
        email: "a@a.com",
        password: "123456",
      }
    });
    await prisma.user.create({
      data: {
        email: "b@b.com",
        password: "123456",
      }
    });

    const result = await api.get("/users");
    expect(result.status).toBe(200);
    expect(result.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          email: expect.any(String),
          password: expect.any(String)
        })
      ])
    )
  });
});
