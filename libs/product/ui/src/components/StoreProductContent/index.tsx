import React, { useState } from 'react';
import clsx from 'clsx';

import styles from './StoreProductContent.module.scss';
import { useProducts } from '../../hooks';
import { ProductList } from '..';
import { Pagination } from '@frappe/common/design-system';

interface StoreProductContentProps {
  readonly className: string;
  readonly minPrice?: number;
  readonly maxPrice?: number;
}

export const StoreProductContent = ({ className, minPrice, maxPrice }: StoreProductContentProps) => {

  const { products, total} = useProducts({minPrice,maxPrice});
  return (
    <div className={ clsx(className, styles.wrapper) }>
      <div className={ styles['wrapper--content'] }>
        <ProductList products={products}/>
        {/*TODO add pagination perdon por no agregar paginación, gracias por tanto perdón por tan poco*/ }
      </div>
    </div>
  )
}
