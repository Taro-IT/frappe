import { useEffect, useState } from 'react';
import axios from 'axios';
import { ProductPrimitives } from '@frappe/product/domain';
import { SearchQueryResponse } from '@frappe/common/utils';
import { FilterPrimitive } from '@dinnosc/criteria';
import { useCategories } from '.';

interface UseProducts{
  readonly minPrice?:number;
  readonly maxPrice?:number;
  
}

export const useProducts = ({minPrice, maxPrice}:UseProducts) => {
  const { categories } = useCategories();
  const [products, setProducts] = useState<ProductPrimitives[]>([]);
  const [total, setTotal] = useState(0);
  const [filters,setFilters] = useState<FilterPrimitive<ProductPrimitives>[]>([]);
  
  useEffect(()=>{
    const newFilters:FilterPrimitive<ProductPrimitives>[] = [];
    minPrice && newFilters.push({ field:"price", operator: "GT", value:minPrice });
    maxPrice && newFilters.push({ field:"price", operator: "LT", value:maxPrice });
    setFilters(newFilters);

  },[minPrice, maxPrice])

  // useEffect(() => {
  //   const newFilters:FilterPrimitive<ProductPrimitives>[] = [];
  //   newFilters.push({ field:"categories", operator: "EQUAL", value: });
  //   maxPrice && newFilters.push({ field:"price", operator: "LT", value:maxPrice });
  //   setFilters(() => newFilters);
  // },[categories])

  useEffect(() => {
    console.log("hola", minPrice, maxPrice);
    
    axios.get<SearchQueryResponse<ProductPrimitives>>(`${ process.env.NEXT_PUBLIC_API_URL }/products`, {
      params: {
        filters,
        order: {
          by: '',
          type: 'NONE'
        }
      }
    })
      .then(data => {
        setProducts(data.data.result.items);
      });
  }, [filters]);


  return { products, total };
}
