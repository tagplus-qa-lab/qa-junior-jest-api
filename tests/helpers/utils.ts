import Chance from "chance";
const chance = new Chance();

export const generateFakeUser = () => ({
  name: chance.name(),
  email: `user_${Date.now()}_${chance.guid()}@mail.com`,
  gender: chance.gender().toLowerCase(),
  status: "active",
});


export const generateFakePost = () => ({
  title: chance.sentence({ words: 6 }),
  body: chance.paragraph({ sentences: 3 }),
});


export const generateFakeComment = () => ({
  name: chance.name(),
  email: chance.email(),
  body: chance.paragraph({ sentences: 2 }),
});
