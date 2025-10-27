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
  it("TC-COMMENT-003: PUT /comments/:id deve atualizar um comentário", async () => {
    const commentId = await getRandomId("comment");
    const commentData = generateFakeComment();

    const response = await testServer
      .put(`/comments/${commentId}`)
      .send(commentData)
      .set("Accept", "application/json")
      .set("Authorization", `Bearer ${TOKEN}`);

    expect(response.status).toBe(200);
    expect(response.body).toMatchObject({
      id: commentId,
      ...commentData,
    });

    const valid = ajv.validate(commentSchema, response.body);
    expect(valid).toBe(true);
  });
});
