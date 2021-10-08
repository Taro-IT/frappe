import React, { useState } from 'react'
import OrderList from '../../components/Demo/order/OrderList'

const ListOrdersPage = () => {
  const [ordersList, setOrdersList] = useState([])

  const addOrderHandler = ({newOrder}) => {
    setOrdersList(prevOrdersList => {
      return [
        ...prevOrdersList, 
        newOrder
      ];
    })
  }
  return (
    <div className="bg-gray-200 w-full h-full absolute">
        <OrderList orders={ordersList}/>
    </div>
  )
}

export default ListOrdersPage;
