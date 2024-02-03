import { updateMenuItem, deleteMenuItem } from '@services/menuServices';

const AdminMenuItem = ({ item }) => {
  const { id, name, price, description } = item;

  // TODO: opens a modal with a form to edit the menu item
  const handleEdit = async () => {
    const menuItem = await updateMenuItem(id, {
      name,
      price,
      description,
    });

    console.log({ menuItem });
  };

  // TODO: opens a modal with a confirmation message to delete the menu item
  const handleDelete = async () => {
    await deleteMenuItem(id);
  };

  return (
    <li>
      <span>{name}</span>
      <span>{price}</span>
      <span>{description}</span>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default AdminMenuItem;
