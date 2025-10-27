import supertest from "supertest";
import dotenv from "dotenv";
import { getRandomId } from "../../helpers/data";

dotenv.config();

const TOKEN = process.env.GOREST_TOKEN!;
const BASE_URL = process.env.BASE_URL!;
export const testServer = supertest(BASE_URL);

describe("GoRest API Users", () => {
  it("TC-USER-004: DELETE /users/:id deve deletar um usuário", async () => {
    const deleteResponse = await testServer
      .delete(`/users/${await getRandomId("user")}`)
      .set("Accept", "application/json")
      .set("Authorization", `Bearer ${TOKEN}`);

    expect(deleteResponse.status).toBe(204);
  });
});
