  // User Story: Frappe 981
  import React, { useEffect, useMemo, useState } from 'react'
  import styles from '../../styles/cartDetails.module.scss';
  import { Button, Card, CheckoutForm, EcommerceLayout, Modal, withUserAgent } from '@frappe/common/design-system';
  import clsx from 'clsx';
  import { BadgeCheckIcon } from '@heroicons/react/solid';
const CheckoutPage = () => {
  return(
    <div>
      <CheckoutForm />
    </div>
  );
};

CheckoutPage.Layout = EcommerceLayout;

export default withUserAgent(CheckoutPage);