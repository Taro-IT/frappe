import React, { useEffect } from 'react'
import AddMaterial from '../../components/material/AddMaterial'
import {MaterialList, useMaterials} from '@frappe/material/ui'
import { AdminLayout } from '../../layouts/AdminLayout';
import { withUserAgent } from '@frappe/common/design-system';
import { withProtectedRoute } from '../../HOC/withProtectedRoute';

const ListMaterialsPage = () => {
  const {materials} = useMaterials()

  useEffect(() => {
    if(localStorage.getItem("accountRole") != "ADMIN")
      window.location.replace("/")
  }, [])

  return (
   <>
      <AddMaterial />
        {/* // User Story: Frappe 501 */}
        <MaterialList ecommerce={false} materials={materials} />
   </>
  )
}

ListMaterialsPage.Layout = AdminLayout;

export default withProtectedRoute (withUserAgent(ListMaterialsPage));
