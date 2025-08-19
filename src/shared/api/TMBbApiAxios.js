import axios from "axios";

const TMBbApi = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_ASSECC_KEY}`,
    "Content-Type": "application/json;charset=utf-8",
  },
});

export default TMBbApi;
