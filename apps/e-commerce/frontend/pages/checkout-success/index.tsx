  // User Story: Frappe 981
  import React from 'react'
  import {  CheckoutSuccess, EcommerceLayout, withUserAgent } from '@frappe/common/design-system';
const CheckoutPage = () => {
  return(
    <div>
      <h1>Gracias por comprar </h1>
      <CheckoutSuccess />
    </div>
  );
};

CheckoutPage.Layout = EcommerceLayout;

export default withUserAgent(CheckoutPage);
