  // User Story: Frappe 981
  import React from 'react'
  import {  CheckoutForm, EcommerceLayout, withUserAgent } from '@frappe/common/design-system';
const CheckoutPage = () => {
  return(
    <div>
      <CheckoutForm />
    </div>
  );
};

CheckoutPage.Layout = EcommerceLayout;

export default withUserAgent(CheckoutPage);