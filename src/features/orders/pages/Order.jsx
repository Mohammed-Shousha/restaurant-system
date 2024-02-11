import Item from '@components/Item';
import Spinner from '@components/Spinner';
import { useGetOrderById } from '@hooks/ordersHooks';
import { calculateTotal } from '@utils/helpers';
import { useParams } from 'react-router-dom';

const Order = () => {
  const { id } = useParams();

  const { order, isLoading } = useGetOrderById(id);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <h1>Order Details</h1>
      <p>Order ID: {order.id}</p>
      <p>{order.status}</p>

      <h2>Items:</h2>
      <ul>
        {order.items.map((item) => (
          <Item key={item.id}>
            <p>{item.name}</p>
            <p>{item.price} $</p>
            <p>&times;{item.quantity}</p>
          </Item>
        ))}
      </ul>
      <h3>Total: ${calculateTotal(order.items)}</h3>
    </>
  );
};

export default Order;
