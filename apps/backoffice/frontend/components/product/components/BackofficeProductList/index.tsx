import { ProductPrimitives } from '@frappe/product/domain';
import {AdjustmentsIcon} from '@heroicons/react/outline'
import { BackofficeProductCard, ProductCardData } from '../BackofficeProductCard';
import { Button, Modal } from '@frappe/common/design-system';
import { useState } from 'react';
import { BadgeCheckIcon, ExclamationIcon } from '@heroicons/react/solid';
import axios from 'axios';


interface ProductListContentProps {
    readonly products: ProductPrimitives[];
  }


  export const BackofficeProductList = ({ products }: ProductListContentProps) => {

    const [displayDeleteModal, setDeleteModal] = useState<boolean>(false);
    const [currentProduct, setCurrentProduct] = useState<ProductCardData>();
    const [displayResultModal, setDisplayResultModal] = useState<boolean>(false);
    console.log(products);

    // The message to show when making operations
    const [message, setMessage] = useState<string>('');
    // The success of a given operation
    const [success, setSuccess] = useState<boolean>();

    type buttonprops = { id: string; name?: string };
    const ConfirmDeleteProductButton = ({ id, name }: buttonprops) => {
      const confirmDelete = async () => {
        try {
          await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/products/${id}`);
          setMessage('Categoría borrada con éxito.');
          setSuccess(true);
        } catch (error) {
          console.error('La categoría no se pudo borrar', error);
          setMessage('La categoría no se pudo borrar.');
          setSuccess(false);
        }
        setDeleteModal(false);
        setDisplayResultModal(true);
        return;
      };

      return <Button title="Eliminar" onClick={confirmDelete} variant="cta" className={'mt-4'} />;
    };

    return (
      <>
      {products.length === 0 &&
        <div className="flex flex-col space-y-4 justify-items-center w-full h-full mt-24">
          <AdjustmentsIcon className="text-center h-24 text-gray-400"/>
            <p className="text-gray-400 text-center align-middle">Ups, parece que aún no agregas ningún producto.</p>
            <p className="text-gray-400 text-center align-middle">Agrega uno usando el botón de +, localizado arriba a la derecha.</p>
        </div>
      }
        <div className="max-w-screen-2xl grid grid-cols-4 gap-4">
          {/*Only show ACTIVE products */}
          {products.map(product => product.isActive && (
            <BackofficeProductCard id={product.id} key={product.id} name={product.name} price={product.price} images={product.images} setDeleteModal={setDeleteModal} setCurrentProd={setCurrentProduct}/>
            ) )}
        </div>

        {displayDeleteModal && (
          <Modal showModal={displayDeleteModal} toggleModal={setDeleteModal} title="Eliminar categoría">
          <div className="flex flex-col w-full px-20 mb-4 py-2 justify-center">
            <p className="text-2xl text-center mb-4">
              ¿Estás seguro de querer borrar el producto <i>{currentProduct.name}</i> con el id {currentProduct.id}?
            </p>
            <p className="text-sm text-red-500 text-center">
              Esta acción es irreversible. No se afectarán los pedidos existentes.
            </p>
            <ConfirmDeleteProductButton id={currentProduct.id} name={currentProduct.name}/>;
          </div>
        </Modal>
        )}

      {displayResultModal && (
        <Modal showModal={displayResultModal} toggleModal={setDisplayResultModal} title="">
          <div className="flex flex-col w-full px-20 mb-4 -mt-10 justify-center items-center">
            {success && <BadgeCheckIcon className="items-center h-32 w-32 text-green-400 mb-6" />}
            {!success && <ExclamationIcon className="items-center h-32 w-32 text-red-500 mb-6" />}
            <p className="text-2xl text-center mb-4">{message}</p>
          </div>
        </Modal>
      )}
    </>
    )
  }