import React from 'react'
import AddMaterial from '../../components/material/AddMaterial'
import {MaterialList, useMaterials} from '@frappe/material/ui'
import { AdminLayout } from '../../layouts/AdminLayout';
import { withUserAgent } from '@frappe/common/design-system';
import classes from './Materials.module.scss'

const ListMaterialsPage = () => {
  const {materials} = useMaterials()
//clsx(classes.categories, 'text-center', 'p-4')
  return (
   <>
      <AddMaterial />
        {/* // User Story: Frappe 501 */}
        <MaterialList ecommerce={false} materials={materials} />
   </>
  )
}

ListMaterialsPage.Layout = AdminLayout;

export default withUserAgent(ListMaterialsPage);
