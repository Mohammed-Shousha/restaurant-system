import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Login from './features/auth/pages/Login';
import SignUp from './features/auth/pages/SignUp';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='*' element={<Navigate to='/login' />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;