import supertest from "supertest";
import dotenv from "dotenv";
import Ajv from "ajv";
import { userSchema } from "../../schemas/userSchema";
import { generateFakeUser } from "../../helpers/utils";

dotenv.config();

const TOKEN = process.env.GOREST_TOKEN!;
const BASE_URL = process.env.BASE_URL!;

export const testServer = supertest(BASE_URL);
const ajv = new Ajv();

describe("GoRest API Users", () => {
  it("TC-USER-002: POST /users deve criar um usuário", async () => {
    const userData = generateFakeUser();

    const response = await testServer
      .post("/users")
      .send(userData)
      .set("Accept", "application/json")
      .set("Authorization", `Bearer ${TOKEN}`);

    expect(response.status).toBe(201);
    expect(response.body).toMatchObject(userData);

    const valid = ajv.validate(userSchema, response.body);
    expect(valid).toBe(true);
  });
});
