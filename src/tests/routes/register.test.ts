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
describe("POST /register", function () {
  test("user should be able to register successfully with the right details", async () => {
    const registrationDetails = {
      email: "teacher@gmail.com",
      password: "pass123",
      role: "teacher",
    };
    const res = await request
      .post("/api/v1/register")
      .send(registrationDetails);

    expect(res.statusCode).toBe(201);
    expect(res.body.email).toEqual(registrationDetails.email);
    expect(res.body.role).toEqual(registrationDetails.role);
    expect(res.body.status).toEqual("active");
  });
});
