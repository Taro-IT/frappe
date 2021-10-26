import React, { ChangeEventHandler } from 'react';
import clsx from 'clsx';
import styles from './ShopSidebar.module.scss';
import { Checkbox } from '@frappe/common/design-system';
import { useCategories } from '../../hooks';

interface ShopSidebarProps {
  readonly className: string;
}

export const ShopSidebar = ({ className }: ShopSidebarProps) => {
  const { categories } = useCategories();

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {

  }

  return (
    <div className={clsx(className, styles.sidebar)}>
      <div>
        <h2 className="text-md mb-2"> Categorias </h2>
        { categories.map(category => ( <Checkbox key={category.id} name={ category.id } label={ category.name } onChange={ handleChange } />)) }
      </div>
    </div>
  );
}
