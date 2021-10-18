import { Sidebar, SidebarMobile } from '@frappe/common/design-system'
import React, { useEffect, useState } from 'react'
import AddCategory from '../../components/Demo/category/AddCategory'
import CategoryList from '../../components/Demo/category/CategoryList'
import { getSelectorsByUserAgent } from 'react-device-detect';

export async function getServerSideProps(context) {
  return {
    props: {
      sa: context.req.headers['user-agent']
    }
  }
}

const ListCategoriesPage = ({ sa }) => {
  const { isMobile } = getSelectorsByUserAgent(sa)
  const [categoriesList, setCategoriesList] = useState([])
  
  const addCategoryHandler = (uName) => {
    setCategoriesList(prevCategoriesList => {
      return [...prevCategoriesList, {name: uName, id:Math.random().toString()}];
    })
  }
  

  return (
    isMobile ?
    (
      <div className="bg-gray-100 w-full h-screen flex flex-col">
        <SidebarMobile />
        <div className="flex flex-col flex-grow pt-20">
          <AddCategory onAddCategory={addCategoryHandler}/>
          <CategoryList categories={categoriesList}/>
        </div>
      </div>
    ) : (
      <div className="bg-gray-100 w-full h-screen flex flex-row">
      <Sidebar />
      <div className="flex flex-col flex-grow pt-20">
      <AddCategory onAddCategory={addCategoryHandler}/>
      <CategoryList categories={categoriesList}/>
      </div>
    </div>
    )
  )
}

export default ListCategoriesPage;
