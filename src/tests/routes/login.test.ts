import app from "../../app";
import { setupDatabase, dropDatabase } from "../utils/index";
import supertest from "supertest";
const request = supertest(app);

beforeAll(async () => {
  await setupDatabase();
});

afterAll(async () => {
  await dropDatabase();
});

jest.setTimeout(30000);
describe("POST /login", function () {
  test("user should be able to login successfully with the right details", async () => {
    const registrationDetails = {
      email: "teacher@gmail.com",
      password: "pass123",
      role: "teacher",
    };
    await request.post("/api/v1/register").send(registrationDetails);

    const response = await request.post("/api/v1/login").send({
      email: "teacher@gmail.com",
      password: "pass123",
    });
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("token");
  });

  test("user should not be able to login if their credentials are wrong", async () => {
    const response = await request.post("/api/v1/login").send({
      email: "teacher1@gmail.com",
      password: "pass123",
    });
    expect(response.statusCode).toBe(401);
    expect(response.body.errorMessage[0]).toEqual("Invalid Credentials");
    expect(response.body.name).toEqual("Unauthenticated");
  });
});
