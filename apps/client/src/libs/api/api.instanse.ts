import axios from "axios";
import { env } from "../config";

const api = axios.create({
  baseURL: env.backend_api,
  timeout: 5000,
});

export { api };
