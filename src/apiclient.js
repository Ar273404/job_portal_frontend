// apiClient.js
import axios from "axios";
import { API_URL } from "./config";

const apiClient = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
