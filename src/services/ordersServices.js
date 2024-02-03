import { calculateTotal } from '@utils/helpers';
import supabase from './supabase';

const ordersTable = 'orders';
const orderItemsTable = 'order_items';
const menuItemsTable = 'menu_items';
const status = {
  pending: 'pending',
  preparing: 'preparing',
  completed: 'completed',
};

export const getAllOrders = async () => {
  const { data, error } = await supabase.from(ordersTable).select('*');
  if (error) throw error;
  return data;
};

export const getOrdersByUserId = async (userId) => {
  const { data, error } = await supabase
    .from(ordersTable)
    .select('*')
    .eq('user_id', userId);

  if (error) throw error;
  return data;
};

export const getOrderById = async (id) => {
  const { data: orderData, error: errorOrder } = await supabase
    .from(ordersTable)
    .select('*')
    .eq('id', id);

  const { data: orderItemsData, error: errorItems } = await supabase
    .from(orderItemsTable)
    .select('menu_item_id, quantity')
    .eq('order_id', id);

  const { data: menuItemsData, error: errorMenuItems } = await supabase
    .from(menuItemsTable)
    .select('id, name, price')
    .in(
      'id',
      orderItemsData.map((item) => item.menu_item_id)
    );

  if (errorOrder || errorItems || errorMenuItems)
    throw errorOrder || errorItems || errorMenuItems;

  return {
    ...orderData[0],
    items: orderItemsData.map((item) => ({
      ...item,
      ...menuItemsData.find((menuItem) => menuItem.id === item.menu_item_id),
    })),
  };
};

export const createOrder = async (userId, items) => {
  const { data, error } = await supabase
    .from(ordersTable)
    .insert({
      user_id: userId,
      status: status.pending,
      total: calculateTotal(items),
    })
    .select();

  await addOrderItems(data[0].id, items);

  if (error) throw error;
  return data[0];
};

const addOrderItems = async (orderId, items) => {
  const { data, error } = await supabase
    .from(orderItemsTable)
    .insert(
      items.map((item) => ({
        order_id: orderId,
        menu_item_id: item.id,
        quantity: item.quantity,
      }))
    )
    .select();

  if (error) throw error;
  return data;
};

export const updateOrderStatus = async (id, status) => {
  const { data, error } = await supabase
    .from(ordersTable)
    .update({ status })
    .eq('id', id)
    .select();

  if (error) throw error;
  return data;
};
