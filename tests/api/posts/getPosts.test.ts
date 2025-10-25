import supertest from "supertest";
import { BASE_URL } from '../../config/env';
import { postSchema } from "../../schemas/postSchema";
import Ajv from "ajv";

export const testServer = supertest(BASE_URL);
const ajv = new Ajv();

describe("GoRest API Posts", () => {
  it("TC-POST-001: GET /posts deve retornar uma lista de posts", async () => {
    const response = await testServer.get("/posts");
    
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);

    response.body.forEach((post: any) => {
      const valid = ajv.validate(postSchema, post);
      expect(valid).toBe(true);
    });
  });
});
