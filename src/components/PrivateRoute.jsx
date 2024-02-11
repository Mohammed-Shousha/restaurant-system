import { Navigate, Outlet } from 'react-router-dom';

import useAuthorization from '@hooks/useAuthentication';
import Spinner from './Spinner';

const PrivateRoute = () => {
  const { isAuthorized, isLoading } = useAuthorization();

  if (isLoading) {
    return <Spinner />;
  }

  return isAuthorized ? <Outlet /> : <Navigate to='/login' replace />;
};

export default PrivateRoute;
