import axios from "axios";

// Uses VITE_API_URL in production, falls back to relative /api in dev
const API_BASE = import.meta.env.VITE_API_URL || "";

const api = axios.create({
  baseURL: API_BASE,
  timeout: 15000,
});

export default api;