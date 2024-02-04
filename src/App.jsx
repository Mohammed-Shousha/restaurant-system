import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Login from './features/auth/pages/Login';
import SignUp from './features/auth/pages/SignUp';

import AddMenuItem from '@features/menu/pages/AddMenuItem';
import Menu from '@features/menu/pages/Menu';

import Order from '@features/orders/pages/Order';
import Orders from '@features/orders/pages/Orders';
import AdminOrders from '@features/orders/pages/AdminOrders';

import NotFoundPage from '@pages/NotFound';
import PrivateRoute from '@components/PrivateRoute';
import AdminMenu from '@features/menu/pages/AdminMenu';

import Cart from '@features/cart/pages/Cart';

import { CartProvider } from '@context/CartContext';
import Checkout from '@features/cart/pages/Checkout';

import GlobalStyles from '@styles/GlobalStyles';
import Layout from '@components/Layout';
import AuthLayout from '@components/AuthLayout';

const App = () => {
  return (
    <CartProvider>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to='/login' />} />
          <Route element={<AuthLayout />}>
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
          </Route>

          <Route element={<Layout />}>
            <Route path='/menu' element={<Menu />} />
            <Route path='/admin-menu' element={<PrivateRoute />}>
              <Route path='/admin-menu' element={<AdminMenu />} />
              <Route path='/admin-menu/add' element={<AddMenuItem />} />
            </Route>

            <Route path='/admin-orders' element={<PrivateRoute />}>
              <Route path='/admin-orders' element={<AdminOrders />} />
              <Route path='/admin-orders/:id' element={<Order />} />
            </Route>

            <Route path='/orders' element={<Orders />} />
            <Route path='/orders/:id' element={<Order />} />

            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />

            <Route path='*' element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
