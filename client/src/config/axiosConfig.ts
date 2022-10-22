import axios, { AxiosRequestConfig } from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000',
});

export default axiosInstance;

axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
  config.headers = {
    'Content-Type': 'application/json',
  };

  return config;
});
