import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Login from './features/auth/pages/Login';
import SignUp from './features/auth/pages/SignUp';

import AddMenuItem from '@features/menu/pages/AddMenuItem';
import Menu from '@features/menu/pages/Menu';

import Order from '@features/orders/pages/Order';
import Orders from '@features/orders/pages/Orders';

import NotFoundPage from '@pages/NotFound';
import PrivateRoute from '@components/PrivateRoute';
import AdminMenu from '@features/menu/pages/AdminMenu';

import Cart from '@features/cart/pages/Cart';

import { CartProvider } from '@context/CartContext';
import Checkout from '@features/cart/pages/Checkout';

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to='/login' />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />

          <Route path='/menu' element={<Menu />} />
          <Route path='/menu/add' element={<PrivateRoute />}>
            <Route path='/menu/add' element={<AddMenuItem />} />
          </Route>
          <Route path='/admin-menu' element={<PrivateRoute />}>
            <Route path='/admin-menu' element={<AdminMenu />} />
          </Route>
          <Route path='/orders' element={<Orders />} />
          <Route path='/orders/:id' element={<Order />} />

          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />

          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
