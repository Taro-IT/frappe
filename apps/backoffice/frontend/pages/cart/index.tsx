import React from 'react'
import CartView from '../../components/Demo/cart';
import { withUserAgent } from '../../HOC/withUserAgent'
import { EcommerceLayout } from '@frappe/common/design-system';

const CartDetailPage = () => {

  return (
   <>
      <CartView></CartView>
   </>
  )
}

CartDetailPage.Layout = EcommerceLayout;

export default withUserAgent(CartDetailPage);
