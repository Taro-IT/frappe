import React from 'react';
import clsx from 'clsx';

import styles from './StoreProductContent.module.scss';
import { useProducts } from '../../hooks';
import { ProductList } from '..';
import { Pagination } from '@frappe/common/design-system';

interface StoreProductContentProps {
  readonly className: string;
}

export const StoreProductContent = ({ className }: StoreProductContentProps) => {
  const { products, total} = useProducts();
  return (
    <div className={ clsx(className, styles.wrapper) }>
      <div className={ styles['wrapper--content'] }>
        <ProductList products={products}/>
        <Pagination total={total} itemsPerPage={20}/>
      </div>
    </div>
  )
}
