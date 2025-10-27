import supertest from "supertest";
import dotenv from "dotenv";
import Ajv from "ajv";
import { commentSchema } from "../../schemas/commentSchema";
import { getRandomId } from "../../helpers/data";
import { generateFakeComment } from "../../helpers/utils";

dotenv.config();

const TOKEN = process.env.GOREST_TOKEN!;
const BASE_URL = process.env.BASE_URL!;

export const testServer = supertest(BASE_URL);
const ajv = new Ajv();

describe("GoRest API Comments", () => {
  it("TC-POST-002: POST /comments deve criar um comentário", async () => {
    const commentData = {
      post_id: await getRandomId("post"),
      ...generateFakeComment(),
    };

    const response = await testServer
      .post("/comments")
      .send(commentData)
      .set("Accept", "application/json")
      .set("Authorization", `Bearer ${TOKEN}`);

    expect(response.status).toBe(201);
    expect(response.body).toMatchObject(commentData);

    const valid = ajv.validate(commentSchema, response.body);
    expect(valid).toBe(true);
  });
});
