import CartItem from '../components/CartItem';
import useCart from '@hooks/useCart';

import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems } = useCart();

  return (
    <div>
      <h1>Cart Page</h1>
      <Link to='/checkout'>Checkout</Link>
      <ul>
        {cartItems.map((item, index) => (
          <CartItem key={index} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default Cart;
