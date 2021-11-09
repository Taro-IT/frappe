import React from 'react'
import AddProduct from '../../components/product/AddProduct'
import { AdminLayout } from '../../layouts/AdminLayout';
import { withUserAgent } from '@frappe/common/design-system';


const CreateProductPage = () => (
    <div className="bg-gray-100 w-full position-absolute flex flex-col h-screen overflow-auto">
      <AddProduct />
    </div>
  )

CreateProductPage.Layout = AdminLayout;
export default withUserAgent(CreateProductPage);
