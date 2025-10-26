import supertest from "supertest";
import dotenv from "dotenv";
import Ajv from "ajv";
import { fakePost } from "../../helpers/utils";
import { postSchema } from "../../schemas/postSchema";

dotenv.config();

const TOKEN = process.env.GOREST_TOKEN!;
const BASE_URL = process.env.BASE_URL!;

export const testServer = supertest(BASE_URL);
const ajv = new Ajv();

describe("GoRest API Posts", () => {
  it("TC-POST-002: POST /posts deve criar um post", async () => {
    const response = await testServer
      .post("/posts")
      .send(fakePost)
      .set("Accept", "application/json")
      .set("Authorization", `Bearer ${TOKEN}`);

    expect(response.status).toBe(201);
    expect(response.body).toMatchObject(fakePost);

    const valid = ajv.validate(postSchema, response.body);
    expect(valid).toBe(true);
  });
});
