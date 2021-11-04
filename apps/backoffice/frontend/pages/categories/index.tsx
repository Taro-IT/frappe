import React from 'react'
import AddCategory from '../../components/Demo/category/AddCategory'
import CategoryList from '../../components/Demo/category/CategoryList'
import { AdminLayout } from '../../layouts/AdminLayout';
import { withUserAgent } from '@frappe/common/design-system';

const ListCategoriesPage = () => {

  return (
   <>
      <AddCategory />
      <CategoryList />
   </>
  )
}

ListCategoriesPage.Layout = AdminLayout;

export default withUserAgent(ListCategoriesPage);
