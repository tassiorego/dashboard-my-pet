import axios from 'axios';
import KEYS from '~/config/keys';

const api = axios.create({
  baseURL: 'https://localhost:3000',
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem(KEYS.TOKEN_KEY);

  const headers = { ...config.headers };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return { ...config, headers };
});

export default api;
