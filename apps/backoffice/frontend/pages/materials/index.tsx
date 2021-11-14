import React from 'react'
import AddMaterial from '../../components/material/AddMaterial'
// import MaterialList from '../../components/Demo/category/MaterialList'
import { AdminLayout } from '../../layouts/AdminLayout';
import { withUserAgent } from '@frappe/common/design-system';

const ListMaterialsPage = () => {


  return (
   <>
      <AddMaterial />
      {/* <MaterialList /> */}
   </>
  )
}

ListMaterialsPage.Layout = AdminLayout;

export default withUserAgent(ListMaterialsPage);
