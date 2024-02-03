import { Link } from 'react-router-dom';

import useCart from '@hooks/useCart';
import { useCreateOrder } from '@hooks/ordersHooks';

const Checkout = () => {
  const { cartItems, cartTotal } = useCart();

  const userId = localStorage.getItem('userId');

  const { order, isLoading, handleCreateOrder } = useCreateOrder();

  const handleCheckout = async () => {
    await handleCreateOrder(userId, cartItems);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (order) {
    return (
      <div>
        Order created successfully
        <Link to={`/orders/${order.id}`}>Order Details</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>Checkout</h1>
      <h2>Summary</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} x {item.quantity}
          </li>
        ))}
      </ul>
      <span>{cartTotal} $</span>
      <button onClick={handleCheckout}>Create Order</button>
    </div>
  );
};

export default Checkout;
