import { useGetOrders } from '@features/orders/ordersHooks';

import AdminOrderItem from '@features/orders/components/AdminOrderItem';
import Spinner from '@components/Spinner';

const AdminOrders = () => {
  const { orders, isLoading } = useGetOrders();

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <h1>Admin Orders</h1>
      {orders.map((order) => (
        <AdminOrderItem order={order} key={order.id} />
      ))}
    </div>
  );
};

export default AdminOrders;
