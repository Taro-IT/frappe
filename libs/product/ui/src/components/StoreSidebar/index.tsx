import React from 'react';
import clsx from 'clsx';
import { Checkbox, PriceField } from '@frappe/common/design-system';
import { useCategories } from '../../hooks';

import styles from './StoreSidebar.module.scss';
import { PriceSelector } from '../PriceSelector';

interface StoreSidebarProps {
  readonly className: string;
}

export const StoreSidebar = ({ className }: StoreSidebarProps) => {
  const { categories, handleCategoryCheck } = useCategories();

  return (
    <div className={clsx(className, styles.sidebar)}>
      <div className={ styles['sidebar--content'] }>
        <div className={ styles['sidebar--section'] }>
          <h2 className="text-md font-medium mb-2"> Categorias </h2>
          {
            categories.map(({ id, name, value }) => (
              <Checkbox key={id} name={ id } label={ name } value={ value } onChange={ handleCategoryCheck } />)
            )
          }
        </div>

        <div>
          <h2 className="text-md font-medium mb-2"> Precio </h2>

          <div className="flex justify-around">
            <PriceSelector/>
          </div>
        </div>
      </div>
    </div>
  );
}
