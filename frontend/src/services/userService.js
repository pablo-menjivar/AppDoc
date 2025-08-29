import { API_BASE_URL, ENDPOINTS, DEFAULT_HEADERS } from '../config/api';

class UserService {
  // Obtener todos los usuarios
  async getUsers() {
    try {
      const response = await fetch(`${API_BASE_URL}${ENDPOINTS.USERS}`, {
        method: 'GET',
        headers: DEFAULT_HEADERS,
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  }
  // Obtener un usuario por ID
  async getUserById(id) {
    try {
      const response = await fetch(`${API_BASE_URL}${ENDPOINTS.USER_BY_ID(id)}`, {
        method: 'GET',
        headers: DEFAULT_HEADERS,
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching user:', error);
      throw error;
    }
  }
  // Crear un nuevo usuario
  async createUser(userData) {
    try {
      const response = await fetch(`${API_BASE_URL}${ENDPOINTS.USERS}`, {
        method: 'POST',
        headers: DEFAULT_HEADERS,
        body: JSON.stringify(userData),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  }
  // Actualizar un usuario
  async updateUser(id, userData) {
    try {
      const response = await fetch(`${API_BASE_URL}${ENDPOINTS.USER_BY_ID(id)}`, {
        method: 'PUT',
        headers: DEFAULT_HEADERS,
        body: JSON.stringify(userData),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error updating user:', error);
      throw error;
    }
  }
  // Eliminar un usuario
  async deleteUser(id) {
    try {
      const response = await fetch(`${API_BASE_URL}${ENDPOINTS.USER_BY_ID(id)}`, {
        method: 'DELETE',
        headers: DEFAULT_HEADERS,
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error deleting user:', error);
      throw error;
    }
  }
}
export default new UserService();