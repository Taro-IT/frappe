import { ProductPrimitives } from '@frappe/product/domain';
import { ProductCard } from '../ProductCard';
import {AdjustmentsIcon} from '@heroicons/react/outline'


interface ProductListContentProps {
    readonly products: ProductPrimitives[];
  }


  export const ProductList = ({ products }: ProductListContentProps) => {

    
    console.log(products)
    return (
      <>
      {products.length === 0 &&
        <div className="flex flex-col space-y-4 justify-items-center w-full h-full mt-24">
          <AdjustmentsIcon className="text-center h-24 text-gray-400"/>
            <p className="text-gray-400 text-center align-middle">Ups, no encontramos productos con estos criterios de búsqueda.</p>
            <p className="text-gray-400 text-center align-middle">Por favor intenta cambiando los filtros en la barra de la izquierda.</p>
        </div>
      }
      <div className="grid grid-cols-4 gap-4">
        {products.map(product => (
            product.isActive ? <ProductCard id={product.id} key={product.id} name={product.name} price={product.price} priceInSale={product.priceInSale} images={product.images}/> : <></>
        ) )}
      </div>
    </>
    )
  }