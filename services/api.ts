import axios from 'axios'; 

const api = axios.create({
  baseURL: 'http://10.67.57.150:3000',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;