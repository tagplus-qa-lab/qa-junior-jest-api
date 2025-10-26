import supertest from "supertest";
import dotenv from "dotenv";
import { postSchema } from "../../schemas/postSchema";
import Ajv from "ajv";

dotenv.config();

const BASE_URL = process.env.BASE_URL!;

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
