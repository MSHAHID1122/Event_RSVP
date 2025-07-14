// src/api/auth.js
import axios from 'axios';

const API = axios.create({
  baseURL: "http://localhost:8000/auth/",
});

export const register = (data) => API.post("users/", data);
export const login = (data) => API.post("jwt/create/", data);
export const verify = (uid, token) => API.get(`users/activation/${uid}/${token}/`);
