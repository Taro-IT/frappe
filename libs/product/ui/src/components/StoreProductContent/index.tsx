import React, { useCallback, useState } from 'react';
import clsx from 'clsx';

import styles from './StoreProductContent.module.scss';
import { useProducts } from '../../hooks';
import { ProductList } from '..';

interface StoreProductContentProps {
  readonly className: string;
  readonly minPrice?: number;
  readonly maxPrice?: number;
  readonly categories?: string[]
}

export const StoreProductContent = ({ className, minPrice, maxPrice, categories }: StoreProductContentProps) => {
  const { products, total} = useProducts({minPrice,maxPrice, categories});
  
  return (
    <div className={ clsx(className, styles.wrapper) }>
      <div className={ styles['wrapper--content'] }>
        <ProductList products={products}/>
        {/*TODO add pagination perdon por no agregar paginación, gracias por tanto perdón por tan poco*/ }
      </div>
    </div>
  )
}
