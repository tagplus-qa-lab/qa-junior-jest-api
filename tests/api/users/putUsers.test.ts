import supertest from "supertest";
import dotenv from "dotenv";
import Ajv from "ajv";
import { userSchema } from "../../schemas/userSchema";
import { getRandomId } from "../../helpers/data";
import { generateFakeUser } from "../../helpers/utils";

dotenv.config();

const TOKEN = process.env.GOREST_TOKEN!;
const BASE_URL = process.env.BASE_URL!;
export const testServer = supertest(BASE_URL);
const ajv = new Ajv();

describe("GoRest API Users", () => {
  it("TC-USER-003: PUT /users/:id deve atualizar um usuário", async () => {
    const userId = await getRandomId("user");
    const userData = generateFakeUser();

    const response = await testServer
      .put(`/users/${userId}`)
      .send(userData)
      .set("Accept", "application/json")
      .set("Authorization", `Bearer ${TOKEN}`);

    expect(response.status).toBe(200);
    expect(response.body).toMatchObject({
      id: userId,
      ...userData,
    });

    const valid = ajv.validate(userSchema, response.body);
    expect(valid).toBe(true);
  });
});
