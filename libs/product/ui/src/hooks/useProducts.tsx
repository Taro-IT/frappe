import { useEffect, useState } from 'react';
import axios from 'axios';
import { ProductPrimitives } from '@frappe/product/domain';
import { SearchQueryResponse } from '@frappe/common/utils';
import { FilterPrimitive } from '@dinnosc/criteria';

interface UseProducts{
  readonly minPrice?:number;
  readonly maxPrice?:number;
  readonly categories?: string[]
  
}

export const useProducts = ({minPrice, maxPrice, categories}:UseProducts) => {
  const [products, setProducts] = useState<ProductPrimitives[]>([]);
  const [filters,setFilters] = useState<FilterPrimitive<ProductPrimitives, unknown>[]>([]);
  
  useEffect(()=>{
    const newFilters:FilterPrimitive<ProductPrimitives>[] = [];

    if (maxPrice !== undefined && maxPrice > 0) {
      newFilters.push({ field:"price", operator: "LT", value:maxPrice });
    }
    if (minPrice !== undefined && minPrice > 0) {

      newFilters.push({ field:"price", operator: "GT", value:minPrice });
    }
    if (categories !== undefined && categories.length >= 1) {
       newFilters.push({ field:"categories", operator: "EQUAL", value: categories[0] })
    }
    
    setFilters(newFilters);

  }, [minPrice, maxPrice, categories])

  useEffect(() => {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/products?filters=${JSON.stringify(filters)}&order=${JSON.stringify({by: '',type: 'NONE'})}`;
    axios.get<SearchQueryResponse<ProductPrimitives>>(url).then(result =>
      setProducts(result.data.result.items));
  }, [filters]);
  return { products, total };
}
