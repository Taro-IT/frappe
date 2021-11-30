// User Story: Frappe 505

import React, { useEffect } from 'react'
import { AdminLayout } from '../../layouts/AdminLayout';
import { withUserAgent } from '@frappe/common/design-system';
import UserList from "../../components/Demo/user/UserList";
import { ProtectedRoute } from '../../HOC/ProtectedRoute';

const ListUsersPage = () => {
  useEffect(() => {
    if(localStorage.getItem("accountRole") != "ADMIN")
      window.location.replace("/")
  }, [])
  
  return (
    <>
    <h1 className="text-center align-middle text-4xl pb-8">Usuarios del sistema</h1>
    <UserList />
    </>
  )
}

  ListUsersPage.Layout = AdminLayout;

  export default ProtectedRoute(withUserAgent(ListUsersPage));