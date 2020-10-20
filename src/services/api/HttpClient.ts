import axios from 'axios';
import {API_PROTOCOL, API_HOST, API_PORT} from '@/config';

const instance = axios.create({
  baseURL: `${API_PROTOCOL}://${API_HOST}:${API_PORT}`,
  timeout: 2000,
  headers: {
    'Content-Type': 'application/json'
  }
});

export default instance;
