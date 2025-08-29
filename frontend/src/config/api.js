// Configuración de la API
export const API_BASE_URL = 'http://10.112.143.153:4000/api';
// Endpoints
export const ENDPOINTS = {
  USERS: '/users',
  USER_BY_ID: (id) => `/users/${id}`,
};
// Headers por defecto para las peticiones
export const DEFAULT_HEADERS = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
};