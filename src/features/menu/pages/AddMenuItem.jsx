import { createMenuItem } from '@services/menuServices';
import { useState } from 'react';

const AddMenuItem = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const menuItem = await createMenuItem({ name, price, description });

    console.log({ menuItem });

    setName('');
    setPrice('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type='text' value={name} onChange={handleNameChange} />
      </label>
      <br />
      <label>
        Price:
        <input type='text' value={price} onChange={handlePriceChange} />
      </label>
      <br />
      <label>
        Description:
        <textarea value={description} onChange={handleDescriptionChange} />
      </label>
      <br />
      <button type='submit'>Add Menu Item</button>
    </form>
  );
};

export default AddMenuItem;
