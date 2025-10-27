import supertest from "supertest";
import dotenv from "dotenv";
import { getRandomId } from "../../helpers/data";

dotenv.config();

const TOKEN = process.env.GOREST_TOKEN!;
const BASE_URL = process.env.BASE_URL!;
export const testServer = supertest(BASE_URL);

describe("GoRest API Posts", () => {
  it("TC-POST-004: DELETE /posts/:id deve deletar um post", async () => {
    const deleteResponse = await testServer
      .delete(`/posts/${await getRandomId("post")}`)
      .set("Accept", "application/json")
      .set("Authorization", `Bearer ${TOKEN}`);

    expect(deleteResponse.status).toBe(204);
  });
});
