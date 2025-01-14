import axios from "axios";

const api = axios.create({
  baseURL: "https://api.thecatapi.com/v1",
  headers: { "x-api-key": process.env.API_KEY },
});

export default api;
