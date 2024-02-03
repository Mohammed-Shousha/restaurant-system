import MenuItem from '../components/MenuItem';
import { useGetMenuItems } from '../../../hooks/menuHooks';
import { Link } from 'react-router-dom';

const Menu = () => {
  const { menuItems, isLoading, error } = useGetMenuItems();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Something went wrong...</div>;
  }

  return (
    <div>
      <h1>Menu</h1>
      <Link to='/cart'>Cart</Link>
      <ul>
        {menuItems.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default Menu;
