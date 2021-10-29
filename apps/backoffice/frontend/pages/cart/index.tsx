import React from 'react'
import CartView from '../../components/Demo/cart';
import { AdminLayout } from '../../layouts/AdminLayout';
import { withUserAgent } from '../../HOC/withUserAgent'

const CartDetailPage = () => {

  return (
   <>
      <h1 className='self-center text-4xl pb-4'>Mi carrito</h1>
      <CartView></CartView>
   </>
  )
}

CartDetailPage.Layout = AdminLayout;

export default withUserAgent(CartDetailPage);
