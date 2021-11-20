import { ProductPrimitives } from '@frappe/product/domain';
import {AdjustmentsIcon} from '@heroicons/react/outline'
import { BackofficeProductCard } from '../BackofficeProductCard';


interface ProductListContentProps {
    readonly products: ProductPrimitives[];
  }


  export const BackofficeProductList = ({ products }: ProductListContentProps) => {

    return (
      <>
      {products.length === 0 &&
        <div className="flex flex-col space-y-4 justify-items-center w-full h-full mt-24">
          <AdjustmentsIcon className="text-center h-24 text-gray-400"/>
            <p className="text-gray-400 text-center align-middle">Ups, parece que aún no agregas ningún producto.</p>
            <p className="text-gray-400 text-center align-middle">Agrega uno usando el botón de '+', localizado arriba a la derecha.</p>
        </div>
      }
        <div className="grid grid-cols-4 gap-4">
          {products.map(product => (
            <BackofficeProductCard id={product.id} key={product.id} name={product.name} price={product.price} images={product.images}/>
            ) )}
        </div>
    </>
    )
  }