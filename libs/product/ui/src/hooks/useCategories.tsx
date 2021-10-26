import { useEffect, useState } from 'react';
import axios from 'axios';
import { CategoryPrimitives } from '@frappe/category/domain';

export const useCategories = () => {
  const [categories, setCategories] = useState<CategoryPrimitives[]>([]);
  const [selected, setSelected] = useState<CategoryPrimitives[]>([]);

  useEffect(() => {
    axios.get<{ result: CategoryPrimitives[] }>(`${ process.env.NEXT_PUBLIC_API_URL }/categories`)
      .then(categories => setCategories(categories.data.result))
  }, []);


  return { categories, selected, setSelected };
}
