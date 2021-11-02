import React from 'react';
import clsx from 'clsx';

import styles from './StoreProductContent.module.scss';
import { useProducts } from '../../hooks';

interface StoreProductContentProps {
  readonly className: string;
}

export const StoreProductContent = ({ className }: StoreProductContentProps) => {
  const { products } = useProducts();

  console.log(products);

  return (
    <div className={ clsx(className, styles.wrapper) }>
      <div className={ styles['wrapper--content'] }>
        { /* TODO Component ProductList */ }
        { /* TODO Component Pagination */ }
      </div>
    </div>
  )
}
