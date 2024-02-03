import useCart from '@hooks/useCart';

const UpdateItemQuantity = ({ itemId }) => {
  const { increaseItemQuantity, decreaseItemQuantity, getCurrentQuantity } =
    useCart();

  const handleIncrease = () => {
    increaseItemQuantity(itemId);
  };

  const handleDecrease = () => {
    decreaseItemQuantity(itemId);
  };

  const itemQuantity = getCurrentQuantity(itemId);

  return (
    <div>
      <button onClick={handleDecrease}>-</button>
      <span>{itemQuantity}</span>
      <button onClick={handleIncrease}>+</button>
    </div>
  );
};

export default UpdateItemQuantity;
