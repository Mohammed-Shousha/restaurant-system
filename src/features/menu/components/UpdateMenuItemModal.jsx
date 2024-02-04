import { useUpdateMenuItem } from '@hooks/menuHooks';
import { useState } from 'react';

const UpdateMenuItemModal = ({ menuItem, onCloseModal }) => {
  const [name, setName] = useState(menuItem.name);
  const [price, setPrice] = useState(menuItem.price);
  const [description, setDescription] = useState(menuItem.description);

  const { handleUpdateMenuItem, isLoading, error } = useUpdateMenuItem();

  const handleUpdate = () => {
    handleUpdateMenuItem(menuItem.id, {
      name,
      price,
      description,
    });
    onCloseModal();
  };

  if (isLoading) {
    return <div>Updating...</div>;
  }

  if (error) {
    return <div>Something went wrong...</div>;
  }

  return (
    <form onSubmit={handleUpdate}>
      <h2>Update Menu Item</h2>
      <label>
        Name:
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Price:
        <input
          type='number'
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </label>
      <label>
        Description:
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <button>Update</button>
      <button type='button' onClick={onCloseModal}>
        Cancel
      </button>
    </form>
  );
};

export default UpdateMenuItemModal;
