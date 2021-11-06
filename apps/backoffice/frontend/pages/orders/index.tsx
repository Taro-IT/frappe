import React from 'react';
import OrderList from '../../components/Demo/order/OrderList';
import { EcommerceLayout, withUserAgent } from '@frappe/common/design-system';

const ListOrdersPage = () => {
  return (
    <div className="bg-gray-200 w-full h-full">
      <h1 className="text-center align-middle text-4xl mt-6 pt-16 pb-8">Tus órdenes de compra</h1>
      <OrderList />
    </div>
  );
};
ListOrdersPage.Layout = EcommerceLayout;

export default withUserAgent (ListOrdersPage);
