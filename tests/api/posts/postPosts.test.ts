import supertest from "supertest";
import dotenv from "dotenv";
import Ajv from "ajv";
import { postSchema } from "../../schemas/postSchema";
import { getRandomId } from "../../helpers/data";
import { generateFakePost } from "../../helpers/utils";

dotenv.config();

const TOKEN = process.env.GOREST_TOKEN!;
const BASE_URL = process.env.BASE_URL!;

export const testServer = supertest(BASE_URL);
const ajv = new Ajv();

describe("GoRest API Posts", () => {
  it("TC-POST-002: POST /posts deve criar um post", async () => {
    const postData = {
      user_id: await getRandomId("user"),
      ...generateFakePost(),
    };

    const response = await testServer
      .post("/posts")
      .send(postData)
      .set("Accept", "application/json")
      .set("Authorization", `Bearer ${TOKEN}`);

    expect(response.status).toBe(201);
    expect(response.body).toMatchObject(postData);

    const valid = ajv.validate(postSchema, response.body);
    expect(valid).toBe(true);
  });
});
