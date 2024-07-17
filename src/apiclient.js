// src/apiClient.js
import axios from "axios";
import { API_URL } from "./config.js"; // Adjust the path as necessary

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
