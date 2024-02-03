import { useNavigate } from 'react-router-dom';

import { useGetMenuItems } from '@hooks/menuHooks';

import AdminMenuItem from '../components/AdminMenuItem';

const AdminMenu = () => {
  const navigate = useNavigate();

  const { menuItems, isLoading, error } = useGetMenuItems();

  const handleAddMenuItem = () => {
    navigate('/menu/add');
  };

  if (isLoading) {
    return <div>Loading...</div>;
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
      <button onClick={handleAddMenuItem}>Add New Item</button>
    </div>
  );
};

export default AdminMenu;
