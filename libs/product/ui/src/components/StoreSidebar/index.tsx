import React, { useEffect } from 'react';
import clsx from 'clsx';
import { Checkbox } from '@frappe/common/design-system';
import { useCategories } from '../../hooks';

import styles from './StoreSidebar.module.scss';
import { PriceSelector } from '../PriceSelector';
import { CategoryCheckbox } from './CategoryCheckbox';

interface StoreSidebarProps {
  readonly className: string;
  readonly setMinPrice: (nv: number) => any;
  readonly setMaxPrice: (nv: number) => any;
  readonly setCategories: (categories: string[]) => unknown
}

export const StoreSidebar = ({ className, setMinPrice, setMaxPrice, setCategories }: StoreSidebarProps) => {
  const { categories, handleCategoryCheck, selectedCategories } = useCategories();

  useEffect(() => {
    setCategories(selectedCategories.map(cat => cat.id))
  }, [selectedCategories])
  return (
    <div className={clsx(className, styles.sidebar)}>
      <div className={ styles['sidebar--content'] }>
        <div className={ styles['sidebar--section'] }>
          <h2 className="text-md font-medium mb-2"> Categorias </h2>
          {
            categories.map(({ id, name, value }) => (
              <CategoryCheckbox key={id} id={id} name={name} value={value} handleCategoryChange={handleCategoryCheck}/>
            ))
          }
        </div>

        <div>
          <h2 className="text-md font-medium mb-2"> Precio: </h2>

          <div className="flex justify-around">
            <PriceSelector setMinPrice={setMinPrice} setMaxPrice={setMaxPrice}/>
          </div>
        </div>
      </div>
    </div>
  );
}
