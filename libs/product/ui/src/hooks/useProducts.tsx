import { useEffect, useState } from 'react';
import axios from 'axios';
import { ProductPrimitives } from '@frappe/product/domain';
import { SearchQueryResponse } from '@frappe/common/utils';

export const useProducts = () => {
  const [products, setProducts] = useState<ProductPrimitives[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    axios.get<SearchQueryResponse<ProductPrimitives>>(`${ process.env.NEXT_PUBLIC_API_URL }/products`, {
      params: {
        filters: [],
        order: {
          by: '',
          type: 'NONE'
        }
      }
    })
      .then(products => {
        setProducts(products.data.items);
        setTotal(products.data.total);
      });
  }, []);


  return { products, total };
}
