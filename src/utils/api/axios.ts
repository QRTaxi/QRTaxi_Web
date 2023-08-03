import axios from 'axios';

const client = axios.create({
  baseURL: import.meta.env.BASE_URL, // vite 환경변수 접근법
});

export default client;
