import React, { useEffect, useState } from 'react';
import { EcommerceLayout, withUserAgent } from '@frappe/common/design-system';
import { StoreProductContent, StoreSidebar } from '@frappe/product/ui';

import styles from '../../styles/store.module.scss';

const StorePage = () => { 
  const [minPrice, setMinPrice] = useState<number>();
  const [maxPrice, setMaxPrice] = useState<number>();
  

  return (
      <div className={ styles.wrapper }>
        <div className= {styles['wrapper--main']}>
          <StoreSidebar setMinPrice={setMinPrice} setMaxPrice={setMaxPrice} className={ styles['wrapper--main--sidebar'] } />
          <StoreProductContent minPrice={minPrice} maxPrice={maxPrice} className={ styles['wrapper--main--content'] } />
        </div>
      </div>
  )
  }

StorePage.Layout = EcommerceLayout;

export default withUserAgent(StorePage);
