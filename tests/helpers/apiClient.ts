import axios from 'axios';
import { BASE_URL } from '../config/env';

export const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 5000,
});
