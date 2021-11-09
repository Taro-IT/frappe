import { ChangeEventHandler, useEffect, useState } from 'react';
import axios from 'axios';
import { CategoryPrimitives } from '@frappe/category/domain';

type CategoryWithCheckOption = CategoryPrimitives & {
  readonly value: boolean;
}

export const useCategories = () => {
  const [categories, setCategories] = useState<CategoryWithCheckOption[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<CategoryPrimitives[]>([]);

  useEffect(() => {
    axios.get<{ result: CategoryPrimitives[] }>(`${ process.env.NEXT_PUBLIC_API_URL }/categories`)
      .then(categories => {
        setCategories(categories.data.result.map(category => ({ ...category, value: false })));
      });

  }, []);

  useEffect(() => {
    setSelectedCategories(categories.filter(category => category.value).map(({ id, name }) => ({ id, name })));
  }, [categories]);

  const handleCategoryCheck: ChangeEventHandler<HTMLInputElement> = event => {
    const id = event.target.name

    setCategories(categories => categories.map(category => {
      /* if (category.id === id) {
        return { ...category, value: !category.value }
      } */

      return ({...category, value: category.id === id});
    }));
  }

  return { categories, selectedCategories, handleCategoryCheck };
}
