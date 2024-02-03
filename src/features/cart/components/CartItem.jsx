import useCart from '@hooks/useCart';
import UpdateItemQuantity from './UpdateItemQuantity';

const CartItem = ({ item }) => {
  const { removeItemFromCart } = useCart();

  const handleRemove = () => {
    removeItemFromCart(item.id);
  };

  return (
    <div>
      <h3>{item.name}</h3>
      <UpdateItemQuantity itemId={item.id} />
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
};

export default CartItem;
