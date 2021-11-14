import React from 'react'
import CartView from '../../components/Demo/cart';
import { EcommerceLayout, withUserAgent } from '@frappe/common/design-system';

const CartDetailPage = () => {

  return (
      <CartView></CartView>
  )
}

CartDetailPage.Layout = EcommerceLayout;

export default withUserAgent(CartDetailPage);
