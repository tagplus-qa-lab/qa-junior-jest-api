import supertest from "supertest";
import dotenv from "dotenv";
import { fakeUser } from "../../helpers/utils";

dotenv.config();

const TOKEN = process.env.GOREST_TOKEN!;
const BASE_URL = process.env.BASE_URL!;
export const testServer = supertest(BASE_URL);

describe("GoRest API Users", () => {
  it("TC-USER-004: DELETE /users/:id deve deletar um usuário", async () => {
    const createResponse = await testServer
      .post("/users")
      .send(fakeUser)
      .set("Accept", "application/json")
      .set("Authorization", `Bearer ${TOKEN}`);

    const userId = createResponse.body.id;

    const deleteResponse = await testServer
      .delete(`/users/${userId}`)
      .set("Accept", "application/json")
      .set("Authorization", `Bearer ${TOKEN}`);

    expect(deleteResponse.status).toBe(204);
  });
});
