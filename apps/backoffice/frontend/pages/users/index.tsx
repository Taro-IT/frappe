// User Story: Frappe 505

import React from 'react'
import { AdminLayout } from '../../layouts/AdminLayout';
import { withUserAgent } from '@frappe/common/design-system';
import UserList from "../../components/Demo/user/UserList";

const ListUsersPage = () => (
  <div>
    <h1 className="text-center align-middle text-4xl  ">Usuarios del sistema</h1>
    <UserList />
  </div>
  )

  ListUsersPage.Layout = AdminLayout;

  export default withUserAgent(ListUsersPage);