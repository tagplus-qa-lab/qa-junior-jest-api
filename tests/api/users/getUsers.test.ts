import supertest from "supertest";
import { BASE_URL } from '../../config/env';
import { userSchema } from "../../schemas/userSchema";
import Ajv from "ajv";

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
