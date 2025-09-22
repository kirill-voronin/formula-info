import axios from "axios";

const API_URL = "https://f1api.dev/api";

const api = axios.create({
  baseURL: API_URL,
});

export default api;
