import { useNavigate } from 'react-router-dom';
import { formatDate } from '@utils/helpers';

import Item from '@components/Item';
import styled from 'styled-components';

const StyledOrderItem = styled(Item)`
  cursor: pointer;
`;

const OrderItem = ({ order }) => {
  const navigate = useNavigate();

  return (
    <StyledOrderItem
      key={order.id}
      onClick={() => navigate(`/orders/${order.id}`)}
    >
      <p>Order ID: {order.id}</p>
      <p>{formatDate(order.created_at)}</p>
      <p>Total: {order.total} $</p>
    </StyledOrderItem>
  );
};

export default OrderItem;
