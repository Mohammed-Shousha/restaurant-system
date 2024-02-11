import { orderStatus } from '@utils/constants';
import { useUpdateOrderStatus } from '@hooks/ordersHooks';

import Button from '@components/Button';
import Spinner from '@components/Spinner';
import Item from '@components/Item';

const AdminOrderItem = ({ order }) => {
  const { handleUpdateOrderStatus, isLoading: isUpdating } =
    useUpdateOrderStatus(order.id);

  if (isUpdating) {
    return <Spinner />;
  }

  return (
    <Item>
      <h3>Order ID: {order.id}</h3>
      <p>{order.total} $</p>
      <p>{order.status}</p>
      <Button onClick={() => handleUpdateOrderStatus(orderStatus.preparing)}>
        Mark as preparing
      </Button>
      <Button onClick={() => handleUpdateOrderStatus(orderStatus.shipping)}>
        Mark as Shipping
      </Button>
      <Button onClick={() => handleUpdateOrderStatus(orderStatus.delivered)}>
        Mark as Delivered
      </Button>
      <Button
        variation='danger'
        onClick={() => handleUpdateOrderStatus(orderStatus.cancelled)}
      >
        Cancel Order
      </Button>
    </Item>
  );
};

export default AdminOrderItem;
