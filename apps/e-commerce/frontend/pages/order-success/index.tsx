  // User Story: Frappe 981
  import React from 'react'
  import {  CheckoutSuccess, EcommerceLayout, withUserAgent } from '@frappe/common/design-system';
const CheckoutPage = () => {
  return(
    <div>
      <CheckoutSuccess />
    </div>
  );
};

CheckoutPage.Layout = EcommerceLayout;

export default withUserAgent(CheckoutPage);