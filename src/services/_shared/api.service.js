import axios from "axios";
import { createUrl } from "../../utils/url.utils";

const httpClient = axios.create({
  baseURL: process.env.REACT_APP_TMDB_BASE_URL,
  headers: {
    Authorization: process.env.REACT_APP_TMDB_API_KEY,
    "Content-Type": "application/json;charset=utf-8",
  },
});

export const apiService = {
  get,
};

async function get(endpoint, params) {
  const url = createUrl(endpoint, params);
  const res = await httpClient.get(url);
  return res.data;
}
