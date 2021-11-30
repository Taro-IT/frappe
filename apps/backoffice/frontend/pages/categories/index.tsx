import React, { useEffect } from 'react'
import AddCategory from '../../components/Demo/category/AddCategory'
import CategoryList from '../../components/Demo/category/CategoryList'
import { AdminLayout } from '../../layouts/AdminLayout';
import { withUserAgent } from '@frappe/common/design-system';
import { ProtectedRoute } from '../../HOC/ProtectedRoute';

const ListCategoriesPage = () => {
  useEffect(() => {
    if(localStorage.getItem("accountRole") != "ADMIN")
      window.location.replace("/")
  }, [])
  
  return (
   <>
      <AddCategory />
      <CategoryList />
   </>
  )
}

ListCategoriesPage.Layout = AdminLayout;

export default ProtectedRoute(withUserAgent(ListCategoriesPage));
