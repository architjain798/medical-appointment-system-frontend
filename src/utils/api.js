import axios from 'axios';

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL, // Use the base URL from the .env file
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `${token}`;
  }
  return config;
});

export default API;
