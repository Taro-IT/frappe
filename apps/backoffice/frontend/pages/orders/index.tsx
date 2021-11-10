//User Story: frappe-91
import React from 'react';
import OrderList from '../../components/Demo/order/OrderList';
import { AdminLayout } from '../../layouts/AdminLayout';
import { withUserAgent } from '@frappe/common/design-system';

const ListOrdersPage = () => {
  return (
    <>
      <h1 className="text-center align-middle text-4xl  ">Tus órdenes de compra</h1>
      <OrderList />
    </>
  );
};
ListOrdersPage.Layout = AdminLayout;

export default withUserAgent (ListOrdersPage);
