import { useGetOrdersByUserId } from '@features/orders/ordersHooks';
import OrderItem from '@features/orders/components/OrderItem';
import Spinner from '@components/Spinner';

const OrdersPage = () => {
  const userId = localStorage.getItem('userId');

  const { orders, isLoading } = useGetOrdersByUserId(userId);

  if (isLoading) {
    return <Spinner />;
  }

  if (orders.length === 0) {
    return <h1>No orders found.</h1>;
  }

  return (
    <>
      <h1>Orders</h1>
      <ul>
        {orders.map((order) => (
          <OrderItem key={order.id} order={order} />
        ))}
      </ul>
    </>
  );
};

export default OrdersPage;
