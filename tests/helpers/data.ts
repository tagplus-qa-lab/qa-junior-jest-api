import axios from "axios";
import dotenv from "dotenv";
import {
  generateFakeComment,
  generateFakePost,
  generateFakeUser,
} from "./utils";

dotenv.config();

const TOKEN = process.env.GOREST_TOKEN!;
const BASE_URL = process.env.BASE_URL!;

const headers = {
  Accept: "application/json",
  Authorization: `Bearer ${TOKEN}`,
};

export const createUser = async (): Promise<number> => {
  const response = await axios.post(`${BASE_URL}/users`, generateFakeUser(), { headers });
  return response.data.id;
};

export const createPost = async (userId: number): Promise<number> => {
  const response = await axios.post(
    `${BASE_URL}/posts`,
    { user_id: userId, ...generateFakePost() },
    { headers }
  );
  return response.data.id;
};

export const createComment = async (postId: number): Promise<number> => {
  const response = await axios.post(
    `${BASE_URL}/comments`,
    { post_id: postId, ...generateFakeComment() },
    { headers }
  );
  return response.data.id;
};

export const getRandomId = async (type: "user" | "post" | "comment"): Promise<number> => {
  switch (type) {
    case "user":
      return await createUser();
    case "post": {
      const userId = await createUser();
      return await createPost(userId);
    }
    case "comment": {
      const userId = await createUser();
      const postId = await createPost(userId);
      return await createComment(postId);
    }
  }
};
