import React from 'react';
import { EcommerceLayout, withUserAgent } from '@frappe/common/design-system';
import { StoreProductContent, StoreSidebar } from '@frappe/product/ui';

import styles from '../../styles/store.module.scss';

const StorePage = () => (
  <div className={ styles.wrapper }>
    <div className= {styles['wrapper--main']}>
      <StoreSidebar className={ styles['wrapper--main--sidebar'] } />
      <StoreProductContent className={ styles['wrapper--main--content'] } />
    </div>
  </div>
)

StorePage.Layout = EcommerceLayout;

export default withUserAgent(StorePage);
