import clsx from 'clsx';

import styles from './OutletProductContent.module.scss';
import { useProducts } from '../../hooks';
import { OutletList } from '..';

interface OutletProductContentProps {
  readonly className: string;
  readonly minPrice?: number;
  readonly maxPrice?: number;
  readonly categories?: string[]
}

export const OutletProductContent = ({ className, minPrice, maxPrice, categories }: OutletProductContentProps) => {
  const { products} = useProducts({minPrice,maxPrice, categories});
  
  return (
    <div className={ clsx(className, styles.wrapper) }>
      <div className={ styles['wrapper--content'] }>
        <OutletList products={products}/>
        {/*TODO add pagination perdon por no agregar paginación, gracias por tanto perdón por tan poco*/ }
      </div>
    </div>
  )
}
