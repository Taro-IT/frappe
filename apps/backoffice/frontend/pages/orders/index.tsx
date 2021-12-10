//User Story: frappe-91
//User Story: frappe-85
import React from 'react';
import OrderList from '../../components/Demo/order/OrderList';
import { AdminLayout } from '../../layouts/AdminLayout';
import { withUserAgent } from '@frappe/common/design-system';
import { withProtectedRoute } from '../../HOC/withProtectedRoute';

const ListOrdersPage = () => {
  return (
    <>
      <h1 className="text-center align-middle text-4xl mb-6 ">Tus órdenes de compra</h1>
      <OrderList />
    </>
  );
};
ListOrdersPage.Layout = AdminLayout;

export default withProtectedRoute(withUserAgent (ListOrdersPage));
