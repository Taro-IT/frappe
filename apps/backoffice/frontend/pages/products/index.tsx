import React from 'react'
import AddProduct from '../../components/product/AddProduct'
const CreateProductPage = () => {
  return (
    <div className="bg-gray-100 w-full position-absolute flex flex-col h-screen overflow-auto">
        <AddProduct />
    </div>
  )
}

export default CreateProductPage;
