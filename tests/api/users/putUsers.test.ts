import supertest from "supertest";
import dotenv from "dotenv";
import Ajv from "ajv";
import { fakeUser } from "../../helpers/utils";
import { userSchema } from "../../schemas/userSchema";

dotenv.config();

const TOKEN = process.env.GOREST_TOKEN!;
const BASE_URL = process.env.BASE_URL!;
export const testServer = supertest(BASE_URL);
const ajv = new Ajv();

describe("GoRest API Users", () => {
  it("TC-USER-003: PUT /users/:id deve atualizar um usuário", async () => {
    const response = await testServer
      .put(`/users/${8208676}`)
      .send(fakeUser)
      .set("Accept", "application/json")
      .set("Authorization", `Bearer ${TOKEN}`);

    expect(response.status).toBe(200); 
    expect(response.body).toMatchObject(fakeUser);

    const valid = ajv.validate(userSchema, response.body);
    expect(valid).toBe(true);
  });

});
