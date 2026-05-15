import axios from "axios";
export const api = axios.create({
  // baseURL: `http://localhost:7708/api`,
  baseURL: `/api`,
});
export const host = "/";
// export const host = "http://localhost:7708";
