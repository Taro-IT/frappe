import { ProductPrimitives } from '@frappe/product/domain';
import {AdjustmentsIcon} from '@heroicons/react/outline'
import { BackofficeProductCard } from '../BackofficeProductCard';
import { Modal } from '@frappe/common/design-system';


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
            <p className="text-gray-400 text-center align-middle">Agrega uno usando el botón de &apos+&apos, localizado arriba a la derecha.</p>
        </div>
      }
        <div className="grid grid-cols-4 gap-4">
          {products.map(product => (
            <BackofficeProductCard id={product.id} key={product.id} name={product.name} price={product.price} images={product.images}/>
            ) )}
        </div>
        <Modal showModal={true} toggleModal={(nv: boolean) => alert("hi") } title="Eliminar categoría">
          <div className="flex flex-col w-full px-20 mb-4 py-2 justify-center">
            <p className="text-2xl text-center mb-4">
              ¿Estás seguro de querer borrar la categoría currentCategory.name?
            </p>
            <p className="text-sm text-red-500 text-center">
              Esta acción es irreversible y afectará a los zapatos que son parte de esta categoría
            </p>
          </div>
        </Modal>
    </>
    )
  }