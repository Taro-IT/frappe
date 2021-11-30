// User Story: Frappe 64 / frappe-508

import React, { useEffect } from 'react'
import AddProduct from '../../components/product/AddProduct'
import { AdminLayout } from '../../layouts/AdminLayout';
import { withUserAgent } from '@frappe/common/design-system';
import { ProtectedRoute } from '../../HOC/ProtectedRoute';

const CreateAddProductPage = () => {
  useEffect(() => {
    if(localStorage.getItem("accountRole") != "ADMIN")
      window.location.replace("/")
  }, [])
  
  return (
  <div className="bg-gray-100 w-full position-absolute flex flex-col h-screen overflow-auto">
      <AddProduct />
  </div>
)
}

  CreateAddProductPage.Layout = AdminLayout;

  export default ProtectedRoute(withUserAgent(CreateAddProductPage));