import axios from 'axios';

const api = axios.create({
    baseURL: process.env.NODE_ENV === 'production'
        ? 'https://your-backend.azurewebsites.net' // Backend production URL
        : 'http://localhost:3000/api', // Backend development URL
    withCredentials: true,
});

export default api;
