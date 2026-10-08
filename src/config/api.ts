import axios from "axios";

export const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_MISHI_API,
    headers: {
    'Content-Type': 'application/json'
  },
  timeout: 60000
})