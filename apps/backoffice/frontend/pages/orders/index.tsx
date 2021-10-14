import React from 'react';
import OrderList from '../../components/Demo/order/OrderList';

const ListOrdersPage = () => {
  return (
    <div className="bg-gray-200 w-full h-full absolute">
      <h1 className="text-center align-middle text-4xl mt-6">Tus órdenes de compra</h1>
      <OrderList />
    </div>
  );
};

export default ListOrdersPage;