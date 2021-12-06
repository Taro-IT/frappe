import React, { useEffect, useState } from 'react';
import { withUserAgent } from '@frappe/common/design-system';
import { AdminLayout } from '../../layouts/AdminLayout';
import axios from 'axios';
import { ProductPrimitives } from '@frappe/product/domain';
import { useRouter } from "next/router"
import {EditProduct} from '../../components/product/EditProduct';
import { withProtectedRoute } from '../../HOC/withProtectedRoute';
//User Stories: frappe-59

const ProductEdit = () => {

    const { query } = useRouter();

  const [productInfo, setProductInfo] = useState<ProductPrimitives>();

  useEffect(() => {
    if(localStorage.getItem("accountRole") != "ADMIN")
      window.location.replace("/")
    const getProduct = async (): Promise<void> => {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products/${query.id}`);
        const data = response.data.product.result;
        if (data.length !== 0) {
            setProductInfo(data);
          }
      };
      getProduct();
    }, []);
    console.log(productInfo);
    return (
    <div className="bg-gray-100 w-full position-absolute flex flex-col h-screen overflow-auto">
      <EditProduct product={productInfo}/>
    </div>  
  )
  }

ProductEdit.Layout = AdminLayout;

export default withProtectedRoute(withUserAgent(ProductEdit));
