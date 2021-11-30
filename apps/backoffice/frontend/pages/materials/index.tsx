import React, { useEffect } from 'react'
import AddMaterial from '../../components/material/AddMaterial'
import {MaterialList, useMaterials} from '@frappe/material/ui'
import { AdminLayout } from '../../layouts/AdminLayout';
import { withUserAgent } from '@frappe/common/design-system';
import classes from './Materials.module.scss'
import { ProtectedRoute } from '../../HOC/ProtectedRoute';
const ListMaterialsPage = () => {
  const {materials} = useMaterials()

  useEffect(() => {
    if(localStorage.getItem("accountRole") != "ADMIN")
      window.location.replace("/")
  }, [])

  return (
   <>
      <AddMaterial />
      <div className={classes.cards}>
        {/* // User Story: Frappe 501 */}
        <MaterialList ecommerce={false} materials={materials} />

      </div>
   </>
  )
}

ListMaterialsPage.Layout = AdminLayout;

export default ProtectedRoute(withUserAgent(ListMaterialsPage));
