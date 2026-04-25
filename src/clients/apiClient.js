import axios from 'axios';
import { config } from '../config/env.js';

export const apiClient = axios.create({
  baseURL: config.baseURL,
  timeout: config.timeout,
});

apiClient.interceptors.request.use((requestConfig) => {
  console.log(
    `[REQUEST] ${requestConfig.method?.toUpperCase()} ${requestConfig.baseURL}${requestConfig.url}`
  );
  return requestConfig;
});

apiClient.interceptors.response.use(
  (response) => {
    console.log(`[RESPONSE] ${response.status} ${response.config.url}`);
    return response;
  },
  (error) => {
    console.log(
      `[RESPONSE ERROR] ${error?.response?.status ?? 'NO_STATUS'} ${error?.config?.url ?? 'NO_URL'}`
    );
    throw error;
  }
);
