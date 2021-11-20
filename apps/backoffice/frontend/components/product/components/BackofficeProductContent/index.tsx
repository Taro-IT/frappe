import clsx from 'clsx';

import styles from './StoreProductContent.module.scss';
import { useProducts } from '../../../../hooks';
import { BackofficeProductList } from '../BackofficeProductList';
import { useRouter } from 'next/router';
import { PlusCircleIcon } from '@heroicons/react/solid';


interface StoreProductContentProps {
  readonly className: string;
  readonly minPrice?: number;
  readonly maxPrice?: number;
  readonly categories?: string[]
}

export const BackofficeProductContent = ({ className, minPrice, maxPrice, categories }: StoreProductContentProps) => {
  const { products} = useProducts({minPrice,maxPrice, categories});
  const router = useRouter();


  const handleClickNewProduct = () => {
    router.push('/addProduct');
  }
  

  return (
    <div className={ clsx(className, styles.wrapper) }>
      <div className="flex justify-items-end">
        <a title="Agregar producto" className="bg-green-600 hover:bg-green-500 text-white font-sans p-2 rounded-md" href={'/addProduct'}><PlusCircleIcon width={25}/></a>
      </div>
      <div className={ styles['wrapper--content'] }>
        <BackofficeProductList products={products}/>
        {/*TODO add pagination perdon por no agregar paginación, gracias por tanto perdón por tan poco*/ }
      </div>
    </div>
  )
}
