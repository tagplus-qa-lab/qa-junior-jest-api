import Chance from "chance";
const chance = new Chance();

export const fakeUser = {
  name: chance.name(),
  email: chance.email(),
  gender: chance.gender().toLowerCase(),
  status: chance.pickone(["active", "inactive"]),
};
