import React, { useState } from 'react'
import OrderList from '../../components/Demo/order/OrderList'

const ListOrdersPage = () => {
  const [ordersList, setOrdersList] = useState([])
  
  return (
    <div className="bg-gray-200 w-full h-full absolute">
        <h1 className="text-center align-middle text-4xl mt-6">Tus órdenes de compra</h1>
        <OrderList orders={ordersList}/>
    </div>
  )
}

export default ListOrdersPage;
