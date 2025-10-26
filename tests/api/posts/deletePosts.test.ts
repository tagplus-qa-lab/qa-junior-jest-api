import supertest from "supertest";
import dotenv from "dotenv";
import { fakePost } from "../../helpers/utils";

dotenv.config();

const TOKEN = process.env.GOREST_TOKEN!;
const BASE_URL = process.env.BASE_URL!;
export const testServer = supertest(BASE_URL);

describe("GoRest API Posts", () => {
  it("TC-POST-004: DELETE /posts/:id deve deletar um post", async () => {
    const createResponse = await testServer
      .post("/posts")
      .send(fakePost)
      .set("Accept", "application/json")
      .set("Authorization", `Bearer ${TOKEN}`);

    const postId = createResponse.body.id;

    const deleteResponse = await testServer
      .delete(`/posts/${postId}`)
      .set("Accept", "application/json")
      .set("Authorization", `Bearer ${TOKEN}`);

    expect(deleteResponse.status).toBe(204);
  });
});
