// src/middleware/HttpClient.jsx

import axios from 'axios';
import { useEffect } from 'react';
import { useKeycloak } from '@react-keycloak/web';

const HttpClient = () => {
  const { keycloak } = useKeycloak();

  const api = axios.create({
    baseURL: 'http://localhost:3001',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // Axios interceptor to attach the token to each request
  api.interceptors.request.use(
    (config) => {
      // Call the custom hook to retrieve the token
      if (keycloak.token) {
        config.headers.Authorization = `Bearer ${keycloak.token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return api; // Return the configured axios instance

};

export default HttpClient;
