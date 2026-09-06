
import axios from "axios";
const SERVER_URL =
  location.hostname === "localhost"
    ? import.meta.env.VITE_DEV_URL
    : import.meta.env.VITE_PRODUCTION_URL;


const api = axios.create({
    baseURL: SERVER_URL,
    withCredentials: true,
});

export default api;