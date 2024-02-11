import { useState, useEffect } from 'react';

const useAuthorization = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const userType = localStorage.getItem('userType');

    setIsAuthorized(userType === 'admin');
    setIsLoading(false);
  }, []);

  return { isAuthorized, isLoading };
};

export default useAuthorization;
