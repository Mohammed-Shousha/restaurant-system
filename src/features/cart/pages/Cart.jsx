// import { Link } from 'react-router-dom';

import Row from '@components/Row';
import CartItem from '@features/cart/components/CartItem';
import useCart from '@features/cart/useCart';
import { useCreateOrder } from '@features/orders/ordersHooks';

import Button from '@components/Button';
import Spinner from '@components/Spinner';
import styled from 'styled-components';

const SummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Cart = () => {
  const { cartItems, cartTotal, cartItemsCount } = useCart();

  const userId = localStorage.getItem('userId');

  const { isLoading, handleCreateOrder } = useCreateOrder(userId);

  const handleCheckout = async () => {
    handleCreateOrder(cartItems);
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Row>
        <h1>Cart</h1>
        <Button size='large' onClick={handleCheckout}>
          Create Order
        </Button>
      </Row>

      <ul>
        {cartItems.map((item, index) => (
          <CartItem key={index} item={item} />
        ))}
      </ul>

      <SummaryContainer>
        <h2>Cart Summary</h2>
        <h3>Total: ${cartTotal}</h3>
        <h3>Items in Cart: {cartItemsCount}</h3>
      </SummaryContainer>
    </>
  );
};

export default Cart;
