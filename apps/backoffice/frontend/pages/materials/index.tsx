import React from 'react'
import AddMaterial from '../../components/material/AddMaterial'
import {MaterialList, useMaterials} from '@frappe/material/ui'
import { AdminLayout } from '../../layouts/AdminLayout';
import { withUserAgent } from '@frappe/common/design-system';
import classes from './Materials.module.scss'
const ListMaterialsPage = () => {
  const {materials} = useMaterials()

  return (
   <>
      <AddMaterial />
      <div className={classes.cards}>
        <MaterialList ecommerce={false} materials={materials} />

      </div>
   </>
  )
}

ListMaterialsPage.Layout = AdminLayout;

export default withUserAgent(ListMaterialsPage);
