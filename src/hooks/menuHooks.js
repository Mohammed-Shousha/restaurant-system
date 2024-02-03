import { useState, useEffect } from 'react';
import { getMenuItems } from '@services/menuServices';

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
