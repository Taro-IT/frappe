import React, { useEffect } from 'react';
import { useAuth } from '../../context/AuthUserContext';

const LogoutPage = () => {

  const user = useAuth();
  useEffect(() => {
    user.signOut();
    localStorage.clear();
    window.location.replace("/signin");
  }, [])

  return (
    <></>
  )
};

export default LogoutPage;
