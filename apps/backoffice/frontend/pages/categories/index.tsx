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
    <div className="bg-gray-100 w-full position-absolute flex flex-col h-screen overflow-auto">
        <AddCategory onAddCategory={addCategoryHandler}/>
        <CategoryList categories={categoriesList}/>
    </div>
  )
}

export default ListCategoriesPage;
