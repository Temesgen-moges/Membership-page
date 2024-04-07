import axios from 'axios';
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
      if (keycloak.token) {
        config.headers.Authorization = `Bearer ${keycloak.token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return api; 

};

export default HttpClient;
