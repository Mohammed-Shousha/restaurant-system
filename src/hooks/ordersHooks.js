import { useNavigate } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  getAllOrders,
  getOrderById,
  getOrdersByUserId,
  createOrder,
  updateOrderStatus,
} from '@services/ordersServices';
import toast from 'react-hot-toast';

export const useGetOrders = () => {
  const { data: orders, isPending: isLoading } = useQuery({
    queryKey: ['orders'],
    queryFn: getAllOrders,
  });

  return { orders, isLoading };
};

export const useCreateOrder = (userId) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: handleCreateOrder, isPending: isLoading } = useMutation({
    mutationFn: (data) => createOrder(userId, data),
    onSuccess: (order) => {
      queryClient.invalidateQueries('orders');
      navigate(`/orders/${order.id}`);
      toast.success('Order created successfully.');
    },
    onError: () => {
      toast.error('Could not create the order.');
    },
  });

  return { isLoading, handleCreateOrder };
};

export const useGetOrderById = (id) => {
  const { data: order, isPending: isLoading } = useQuery({
    queryKey: ['order', id],
    queryFn: () => getOrderById(id),
    enabled: !!id,
  });

  return { order, isLoading };
};

export const useGetOrdersByUserId = (userId) => {
  const { data: orders, isPending: isLoading } = useQuery({
    queryKey: ['orders', userId],
    queryFn: () => getOrdersByUserId(userId),
    enabled: !!userId,
  });

  return { orders, isLoading };
};

export const useUpdateOrderStatus = (orderId) => {
  const queryClient = useQueryClient();

  const { mutate: handleUpdateOrderStatus, isPending: isLoading } = useMutation(
    {
      mutationFn: (status) => updateOrderStatus(orderId, status),
      onSuccess: () => {
        toast.success('Order updated successfully.');
        queryClient.invalidateQueries('orders');
      },
      onError: () => {
        toast.error('Could not update the order.');
      },
    }
  );

  return { isLoading, handleUpdateOrderStatus };

  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);
  // const [order, setOrder] = useState(null);

  // const handleUpdateOrderStatus = async (orderId, newStatus) => {
  //   setIsLoading(true);
  //   try {
  //     const updatedOrder = await updateOrderStatus(orderId, newStatus);
  //     console.log({ updatedOrder });
  //     setOrder(updatedOrder);
  //   } catch (error) {
  //     setError(error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // return {
  //   isLoading,
  //   error,
  //   handleUpdateOrderStatus,
  //   order,
  // };
};
