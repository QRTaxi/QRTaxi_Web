import axios from 'axios';

const client = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL as string, // vite 환경변수 접근법
});

export default client;
