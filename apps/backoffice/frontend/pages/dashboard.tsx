import React from 'react';
import { ProtectedRoute } from '../HOC/ProtectedRoute';
import { useAuth } from '../context/AuthUserContext';
import { Button } from '@frappe/common/design-system';

const DashboardPage = () => {
  const { signOut } = useAuth();

  return (
    <div>
      <Button title="Signout" onClick={signOut} />
    </div>
  );
};

export default ProtectedRoute(DashboardPage);
