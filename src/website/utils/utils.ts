import axios from "axios";
import { config } from "../../config";

export const api = axios.create({
  baseURL: "http://localhost:3000/api",
  headers: { "x-api-key": config.apiKey, "Content-Type": "application/json" },
});
