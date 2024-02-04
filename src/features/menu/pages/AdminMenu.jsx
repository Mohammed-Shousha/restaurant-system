import { useNavigate } from 'react-router-dom';

import { useGetMenuItems } from '@hooks/menuHooks';

import AdminMenuItem from '../components/AdminMenuItem';

import Button from '@components/Button';
import Spinner from '@components/Spinner';

const AdminMenu = () => {
  const navigate = useNavigate();

  const { menuItems, isLoading, error } = useGetMenuItems();

  const handleAddMenuItem = () => {
    navigate('/admin-menu/add');
  };

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <div>Something went wrong...</div>;
  }

  return (
    <div>
      <h1>Menu</h1>
      <ul>
        {menuItems.map((item) => (
          <AdminMenuItem key={item.id} item={item} />
        ))}
      </ul>
      <Button onClick={handleAddMenuItem}>Add New Item</Button>
    </div>
  );
};

export default AdminMenu;
