import React from 'react'
import CartView from '../../components/Demo/cart';
import { AdminLayout } from '../../layouts/AdminLayout';
import { withUserAgent } from '../../HOC/withUserAgent'

const CartDetailPage = () => {

  return (
   <>
      <CartView></CartView>
   </>
  )
}

CartDetailPage.Layout = AdminLayout;

export default withUserAgent(CartDetailPage);
