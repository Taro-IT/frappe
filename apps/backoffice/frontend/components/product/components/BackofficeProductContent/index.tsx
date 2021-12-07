import clsx from 'clsx';

import styles from './StoreProductContent.module.scss';
import { useProducts } from '../../../../hooks';
import { BackofficeProductList } from '../BackofficeProductList';
import { PlusCircleIcon } from '@heroicons/react/solid';


interface StoreProductContentProps {
  readonly className: string;
  readonly minPrice?: number;
  readonly maxPrice?: number;
  readonly categories?: string[]
}

export const BackofficeProductContent = ({ className, minPrice, maxPrice, categories }: StoreProductContentProps) => {
  const { products} = useProducts({minPrice,maxPrice, categories});


  return (
    <div className={ clsx(className, styles.wrapper )}>
      <div className="flex justify-end pb-4 pr-6 sticky top-0">
        <a title="Agregar producto" className="bg-yellow-600 hover:bg-yellow-500 text-white font-sans p-2 rounded-full" href={'/addProduct'}><PlusCircleIcon width={40}/></a>
      </div>
      <div className={ styles['wrapper--content'] }>
        <BackofficeProductList products={products}/>
        {/*TODO add pagination perdon por no agregar paginación, gracias por tanto perdón por tan poco*/ }
      </div>
    </div>
  )
}
