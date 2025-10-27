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
  it("TC-POST-003: PUT /posts/:id deve atualizar um post", async () => {
    const postId = await getRandomId("post");
    const postData = generateFakePost();

    const response = await testServer
      .put(`/posts/${postId}`)
      .send(postData)
      .set("Accept", "application/json")
      .set("Authorization", `Bearer ${TOKEN}`);

    expect(response.status).toBe(200); 
    expect(response.body).toMatchObject({
      id: postId,
      ...postData,
    });

    const valid = ajv.validate(postSchema, response.body);
    expect(valid).toBe(true);
  });
});
