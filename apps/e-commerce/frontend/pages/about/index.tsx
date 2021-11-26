import React from 'react';
import { AboutUsComponent, EcommerceLayout, withUserAgent } from '@frappe/common/design-system';
//User Stories: frappe-62

const AboutUs = () => {

  return (
    <AboutUsComponent />
  )
  }

  AboutUs.Layout = EcommerceLayout;

export default withUserAgent(AboutUs);
