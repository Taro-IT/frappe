import { Sidebar, SidebarMobile } from '@frappe/common/design-system'
import React from 'react'
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

  return (
    isMobile ?
    (
      <div className="bg-gray-100 w-full h-screen flex flex-col">
        <SidebarMobile />
        <div className="flex flex-col flex-grow pt-20">
          <AddCategory />
          <CategoryList />
        </div>
      </div>
    ) : (
      <div className="bg-gray-100 w-full h-screen flex flex-row">
      <Sidebar />
      <div className="flex flex-col flex-grow pt-20">
      <AddCategory />
      <CategoryList />
      </div>
    </div>
    )
  )
}

export default ListCategoriesPage;
