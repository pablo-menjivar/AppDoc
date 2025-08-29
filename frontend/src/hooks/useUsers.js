import { useState, useEffect, useCallback } from 'react';
import userService from '../services/userService';

export const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // Obtener todos los usuarios
  const fetchUsers = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await userService.getUsers();
      setUsers(data);
    } catch (err) {
      setError(err.message || 'Error al cargar usuarios');
    } finally {
      setLoading(false);
    }
  }, []);
  // Cargar usuarios al montar el componente
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);
  // Refrescar la lista de usuarios
  const refreshUsers = () => {
    fetchUsers();
  };
  return {
    users,
    loading,
    error,
    refreshUsers,
  };
};
export const useUser = (userId) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!userId) return;

    const fetchUser = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await userService.getUserById(userId);
        setUser(data);
      } catch (err) {
        setError(err.message || 'Error al cargar el usuario');
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [userId]);

  return {
    user,
    loading,
    error,
  };
};