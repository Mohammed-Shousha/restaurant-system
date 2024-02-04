import useCart from '@hooks/useCart';
import UpdateItemQuantity from './UpdateItemQuantity';
import Button from '@components/Button';

const CartItem = ({ item }) => {
  const { removeItemFromCart } = useCart();

  const handleRemove = () => {
    removeItemFromCart(item.id);
  };

  return (
    <div>
      <h3>{item.name}</h3>
      <UpdateItemQuantity itemId={item.id} />
      <Button onClick={handleRemove}>Remove</Button>
    </div>
  );
};

export default CartItem;
