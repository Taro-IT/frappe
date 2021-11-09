import { useEffect, useState } from 'react';
import axios from 'axios';
import { ProductPrimitives } from '@frappe/product/domain';
import { SearchQueryResponse } from '@frappe/common/utils';
import { FilterPrimitive, Order } from '@dinnosc/criteria';
import { useCategories } from '.';

interface UseProducts{
  readonly minPrice?:number;
  readonly maxPrice?:number;
  readonly categories?: string[]
  
}

export const useProducts = ({minPrice, maxPrice, categories}:UseProducts) => {
  const [products, setProducts] = useState<ProductPrimitives[]>([]);
  const [total, setTotal] = useState(0);
  const [filters,setFilters] = useState<FilterPrimitive<ProductPrimitives>[]>([]);
  
  useEffect(()=>{
    const newFilters:FilterPrimitive<ProductPrimitives>[] = [];
    minPrice && newFilters.push({ field:"price", operator: "GT", value:minPrice });
    maxPrice && newFilters.push({ field:"price", operator: "LT", value:maxPrice });
    categories && categories.length === 1 && newFilters.push({ field:"categories", operator: "EQUAL", value: categories.pop() })
    setFilters(newFilters);

  },[minPrice, maxPrice, categories])

  // useEffect(() => {
  //   const newFilters:FilterPrimitive<ProductPrimitives>[] = [];
  //   newFilters.push({ field:"categories", operator: "EQUAL", value:  });
  //   maxPrice && newFilters.push({ field:"price", operator: "LT", value:maxPrice });
  //   setFilters(() => newFilters);
  // },[categories])

  /// HTTP call that actually works: http://localhost:3000/api/products?filters=[{”field”:“price”,“operator”:“EQUAL”,“value”:5000}]&order={“by”:“”,“type”:“NONE”}
  useEffect(() => {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/products?filters=${JSON.stringify(filters)}&order=${JSON.stringify({by: '',type: 'NONE'})}`;
    axios.get<SearchQueryResponse<ProductPrimitives>>(url).then(result => 
      setProducts(result.data.result.items));
  }, [filters]);
  return { products, total };
}
