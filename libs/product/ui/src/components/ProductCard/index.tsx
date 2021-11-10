import React from 'react';
import { ProductPrimitives } from '@frappe/product/domain';
import { Card } from '@frappe/common/design-system';

type ProductCardProps = Pick<ProductPrimitives, 'id' | 'name' | 'price' | 'images'>

export const ProductCard = ({ id, name, price, images }: ProductCardProps) => {
  return (
    <Card>

    </Card>
  )
}
