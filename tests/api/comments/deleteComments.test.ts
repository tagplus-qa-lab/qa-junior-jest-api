import supertest from "supertest";
import dotenv from "dotenv";
import { getRandomId } from "../../helpers/data";

dotenv.config();

const TOKEN = process.env.GOREST_TOKEN!;
const BASE_URL = process.env.BASE_URL!;
export const testServer = supertest(BASE_URL);

describe("GoRest API Comments", () => {
  it("TC-COMMENT-004: DELETE /comments/:id deve deletar um comentário", async () => {
    const deleteResponse = await testServer
      .delete(`/comments/${await getRandomId("comment")}`)
      .set("Accept", "application/json")
      .set("Authorization", `Bearer ${TOKEN}`);

    expect(deleteResponse.status).toBe(204);
  });
});
