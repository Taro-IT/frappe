import React, { useState } from 'react'

const ListOrdersPage = () => {
  const [ordersList, setOrdersList] = useState([])

  const addOrderHandler = (uName) => {
    setOrdersList(prevOrdersList => {
      return [
        ...prevOrdersList, 
        {
          name: uName, id:Math.random().toString()
        }
      ];
    })
  }
  return (
    <div className="bg-gray-200 w-full h-full absolute">

    </div>
  )
}

export default ListOrdersPage;
