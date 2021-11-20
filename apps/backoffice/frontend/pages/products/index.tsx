// User Story: Frappe 64 / frappe-508

import React from 'react'
import { AdminLayout } from '../../layouts/AdminLayout';
import { withUserAgent } from '@frappe/common/design-system';
import styles from '../../styles/store.module.scss'
import { BackofficeProductContent } from '../../components/product/components/BackofficeProductContent';

const CreateProductPage = () => (
    <div className="bg-gray-100 w-full position-absolute flex flex-col h-screen overflow-auto">
        <BackofficeProductContent minPrice={10000} maxPrice={100000} categories= {[]} className={styles['wrapper--main--content']}/>
    </div>
  )

  CreateProductPage.Layout = AdminLayout;

  export default withUserAgent(CreateProductPage);