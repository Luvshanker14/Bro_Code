// Central runtime config. Override per-environment via Vite env vars (VITE_*).
export const API_URL   = import.meta.env.VITE_API_URL   || "http://localhost:3000";
export const USER_URL  = import.meta.env.VITE_USER_URL  || "http://localhost:5173";
export const ADMIN_URL = import.meta.env.VITE_ADMIN_URL || "http://localhost:5174";
export const LOGIN_URL = import.meta.env.VITE_LOGIN_URL || "http://localhost:5175";
