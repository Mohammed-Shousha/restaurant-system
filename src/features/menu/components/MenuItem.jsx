import UpdateItemQuantity from '@features/cart/components/UpdateItemQuantity';
import useCart from '@hooks/useCart';

const MenuItem = ({ item }) => {
  const { id, name, price, description } = item;

  const { addItemToCart, isItemInCart } = useCart();

  const handleAddToCart = () => {
    addItemToCart(item);
  };

  return (
    <li>
      <span>{name}</span>
      <span>{price}</span>
      <span>{description}</span>
      {isItemInCart(id) ? (
        <UpdateItemQuantity itemId={id} />
      ) : (
        <button onClick={handleAddToCart}>Add to Cart</button>
      )}
    </li>
  );
};

export default MenuItem;
