// User Story: Frappe 64 / frappe-508

import React, { useEffect } from 'react'
import { AdminLayout } from '../../layouts/AdminLayout';
import { withUserAgent } from '@frappe/common/design-system';
import styles from '../../styles/store.module.scss'
import { BackofficeProductContent } from '../../components/product/components/BackofficeProductContent';
import { ProtectedRoute } from '../../HOC/ProtectedRoute';

const CreateProductPage = () => {
  useEffect(() => {
    if(localStorage.getItem("accountRole") != "ADMIN")
      window.location.replace("/")
  }, [])

  return (
    <div className="bg-gray-100 w-full position-absolute flex flex-col h-screen overflow-auto">
        <BackofficeProductContent minPrice={0} maxPrice={100000} categories= {[]} className={styles['wrapper--main--content']}/>
    </div>
  )
}

  CreateProductPage.Layout = AdminLayout;

  export default ProtectedRoute(withUserAgent(CreateProductPage));