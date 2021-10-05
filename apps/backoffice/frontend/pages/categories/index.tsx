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
    <div className="bg-gray-200 w-full h-full absolute overflow-auto">
        <AddCategory onAddCategory={addCategoryHandler}/>
        <CategoryList categories={categoriesList}/>
    </div>
  )
}

export default ListCategoriesPage;
