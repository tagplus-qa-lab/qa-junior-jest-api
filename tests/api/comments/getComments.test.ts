import supertest from "supertest";
import dotenv from "dotenv";
import { commentSchema } from "../../schemas/commentSchema";
import Ajv from "ajv";

dotenv.config();

const BASE_URL = process.env.BASE_URL!;

export const testServer = supertest(BASE_URL);
const ajv = new Ajv();

describe("GoRest API Posts", () => {
  it("TC-COMMENT-001: GET /comments deve retornar uma lista de comentários", async () => {
    const response = await testServer.get("/comments");
    
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);

    response.body.forEach((comment: any) => {
      const valid = ajv.validate(commentSchema, comment);
      expect(valid).toBe(true);
    });
  });
});
