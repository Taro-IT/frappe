import React from 'react';
import clsx from 'clsx';

import styles from './StoreProductContent.module.scss';
import { useProducts } from '../../hooks';
import { ProductList } from '..';

interface StoreProductContentProps {
  readonly className: string;
}

export const StoreProductContent = ({ className }: StoreProductContentProps) => {
  const { products } = useProducts();

  console.log(products);

  return (
    <div className={ clsx(className, styles.wrapper) }>
      <div className={ styles['wrapper--content'] }>
        <ProductList products={products}/>
        { /* TODO Component Pagination */ }
      </div>
    </div>
  )
}
