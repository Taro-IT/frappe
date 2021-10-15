import { Sidebar, SidebarMobile } from '@frappe/common/design-system'
import React, { useState } from 'react'
import AddCategory from '../../components/Demo/category/AddCategory'
import CategoryList from '../../components/Demo/category/CategoryList'

const ListCategoriesPage = () => {
  const [categoriesList, setCategoriesList] = useState([])
  const addCategoryHandler = (uName) => {
    setCategoriesList(prevCategoriesList => {
      return [...prevCategoriesList, {name: uName, id:Math.random().toString()}];
    })
  }
  return (
    <div className="bg-gray-100 w-full h-screen flex flex-row">
        <Sidebar />
        <div className="flex flex-col flex-grow">
          <AddCategory onAddCategory={addCategoryHandler}/>
          <CategoryList categories={categoriesList}/>
        </div>
    </div>
  )
}

export default ListCategoriesPage;
