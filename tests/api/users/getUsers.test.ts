import supertest from "supertest";
import dotenv from "dotenv";
import { userSchema } from "../../schemas/userSchema";
import Ajv from "ajv";

dotenv.config();

const BASE_URL = process.env.BASE_URL!;

export const testServer = supertest(BASE_URL);
const ajv = new Ajv();

describe("GoRest API Users", () => {
  it("TC-USER-001: GET /users deve retornar uma lista de usuários", async () => {
    const response = await testServer.get("/users");
    
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);

    response.body.forEach((user: any) => {
      const valid = ajv.validate(userSchema, user);
      expect(valid).toBe(true);
    });
  });
});
