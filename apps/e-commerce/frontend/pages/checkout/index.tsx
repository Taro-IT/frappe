// User Story: Frappe 981
import React from 'react';
import { Card, CheckoutForm, EcommerceLayout, withUserAgent } from '@frappe/common/design-system';
const CheckoutPage = () => {
  return (
    <div className="bg-gray-100 w-full position-absolute flex flex-col h-full overflow-auto">
      <Card className="flex flex-col xl:w-1/2 lg:w-2/3 md:w-5/12 rounded-xl mx-auto my-4">
        <Card.Header title="Checkout" />
        <CheckoutForm />

        <Card.Footer></Card.Footer>
      </Card>
    </div>
  );
};

CheckoutPage.Layout = EcommerceLayout;

export default withUserAgent(CheckoutPage);
