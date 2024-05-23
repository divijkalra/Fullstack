// src/api.js
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3001/api', // Change this to your backend's base URL
});

export default api;
