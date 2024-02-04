import useCart from '@hooks/useCart';

import Button from '@components/Button';

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
      <Button onClick={handleDecrease}>-</Button>
      <span>{itemQuantity}</span>
      <Button onClick={handleIncrease}>+</Button>
    </div>
  );
};

export default UpdateItemQuantity;
