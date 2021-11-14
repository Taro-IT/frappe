import React, { useState } from 'react';
import { EcommerceLayout, withUserAgent } from '@frappe/common/design-system';
import { StoreProductContent, StoreSidebar } from '@frappe/product/ui';
import styles from '../../styles/store.module.scss';
//User Stories: frappe-62

const StorePage = () => {
  const [minPrice, setMinPrice] = useState<number>();
  const [maxPrice, setMaxPrice] = useState<number>();
  const [categories, setCategories] = useState<string[]>();

  return (
      <div className={ styles.wrapper }>
        <div className= {styles['wrapper--main']}>
          <StoreSidebar setMinPrice={setMinPrice} setMaxPrice={setMaxPrice} className={ styles['wrapper--main--sidebar'] } setCategories={setCategories} />
          <StoreProductContent minPrice={minPrice} maxPrice={maxPrice} className={ styles['wrapper--main--content'] } categories={categories} />
        </div>
      </div>
  )
  }

StorePage.Layout = EcommerceLayout;

export default withUserAgent(StorePage);
