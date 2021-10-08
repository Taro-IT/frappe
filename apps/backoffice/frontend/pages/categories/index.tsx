import React, { useState } from 'react'
import AddCategory from '../../components/Demo/category/AddCategory'
import CategoryList from '../../components/Demo/category/CategoryList'

const ListCategoriesPage = () => {
  return (
    <div className="bg-gray-100 w-full position-absolute flex flex-col h-screen overflow-auto">
        <AddCategory />
        <CategoryList/>
    </div>
  )
}

export default ListCategoriesPage;
