import { useState, useEffect } from 'react';
import {
  getMenuItems,
  updateMenuItem,
  deleteMenuItem,
} from '@services/menuServices';

export const useGetMenuItems = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMenuItems = async () => {
      setIsLoading(true);
      try {
        const menuItems = await getMenuItems();
        setMenuItems(menuItems);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMenuItems();
  }, []);

  return { menuItems, isLoading, error };
};

export const useUpdateMenuItem = () => {
  const [updatedMenuItem, setUpdatedMenuItem] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleUpdateMenuItem = async (id, updates) => {
    setIsLoading(true);
    try {
      const updatedMenuItem = await updateMenuItem(id, updates);
      setUpdatedMenuItem(updatedMenuItem);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { updatedMenuItem, isLoading, error, handleUpdateMenuItem };
};

export const useDeleteMenuItem = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleDeleteMenuItem = async (id) => {
    setIsLoading(true);
    try {
      await deleteMenuItem(id);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, error, handleDeleteMenuItem };
};
