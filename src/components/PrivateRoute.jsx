import { Navigate, Outlet } from 'react-router-dom';

import useAuthentication from '@hooks/useAuthentication';

const PrivateRoute = () => {
  const { isAuthenticated, isLoading } = useAuthentication();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? <Outlet /> : <Navigate to='/login' replace />;
};

export default PrivateRoute;
