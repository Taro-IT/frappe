import React from 'react';
import { ContactUsForm, EcommerceLayout, withUserAgent } from '@frappe/common/design-system';
import styles from '../../styles/store.module.scss';
//User Stories: frappe-62

const ContactPage = () => {

  return (
    <ContactUsForm />
  )
  }

 ContactPage.Layout = EcommerceLayout;

export default withUserAgent(ContactPage);
