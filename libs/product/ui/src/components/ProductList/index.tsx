import React from 'react';
import clsx from 'clsx';

import styles from './ProductListContentProps.module.scss';
import { useProducts } from '../../hooks';
import { Product, ProductPrimitives } from '@frappe/product/domain';
import { ProductCard } from '../ProductCard';


interface ProductListContentProps {
    readonly products: ProductPrimitives[];
    readonly setMinPrice: () => unknown;
    readonly setMaxPrice: () => unknown;
  }


  export const ProductList = ({ products, setMinPrice,setMaxPrice }: ProductListContentProps) => {

  
    return (
      <div className="grid grid-cols-4 gap-4">
        {products.map(product => (
            <ProductCard id={product.id} key={product.id} name={product.name} price={product.price} images={product.images}/>
        ) )}
      </div>
    )
  }