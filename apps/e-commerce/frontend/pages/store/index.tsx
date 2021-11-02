import React from 'react';
import { EcommerceLayout, withUserAgent } from '@frappe/common/design-system';
import { StoreProductContent, StoreSidebar } from '@frappe/product/ui';

import styles from '../../styles/store.module.scss';

const StorePage = () => (
  <div className={ styles.wrapper }>
    <StoreSidebar className={ styles['wrapper--sidebar'] } />
    <StoreProductContent className={ styles['wrapper--content'] } />
  </div>
)

StorePage.Layout = EcommerceLayout;

export default withUserAgent(StorePage);
