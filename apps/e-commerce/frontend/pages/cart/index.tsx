// User Story: Frappe 80 / Frappe 69

import React, { useEffect, useMemo, useState } from 'react'
import styles from '../../styles/cartDetails.module.scss';
import { Button, Card, EcommerceLayout, Modal, withUserAgent } from '@frappe/common/design-system';
import clsx from 'clsx';

const CartDetailPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [displayConfirmationModal, setDisplayConfirmationModal] = useState<boolean>(false)
  const [index, setIndex] = useState<number>();
  
  let totalPrice = 0
  
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCartItems(JSON.parse(localStorage.getItem('items')) || []);
      if(cartItems === null){
        const cartArray = [];
        localStorage.setItem('items',JSON.stringify(cartArray));
        setCartItems(JSON.parse(localStorage.getItem('items')) || [] );
      }
    }
  }, []);

  type buttonprops = { id: number; productId?: string };

  const ViewDetailButton = ({ id, productId }: buttonprops) => {
    return <a href={`/product/${productId}`}><Button title="Ver detalle" className="ml-2 w-24" variant="cta"  /></a>;
  };

  const handlePayButton = () => {
    localStorage.setItem('subtotal', JSON.stringify(totalPrice))
    localStorage.setItem('total', JSON.stringify(totalPrice))
  }

  const PayButton = () => {
    /* eslint-disable @next/next/no-html-link-for-pages */
    return<a href="/checkout"><Button title="Proceder al pago" className="ml-2 w-40 " variant="cta" onClick={handlePayButton} /> </a>;
  };

  const DeleteButton = ({ id, productId }: buttonprops) => {

    const setStates =() => {
      setDisplayConfirmationModal(true);
      setIndex(id);
    }

    return <Button title="Quitar" className="ml-2 w-24 pl-32" variant="cta"  onClick={setStates}/>;
  };

  const closeModal = () => {
    setDisplayConfirmationModal(false);
    window.location.reload();
  }

  const removeFromCart = () => {
      let i = 0;
      while(i != index){
        i++;
      }
      cartItems.splice(i, 1);
      localStorage.setItem('items',JSON.stringify(cartItems));
      window.location.reload();
  }

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  })

  //Creates the cards for all the items in the cart using localStorage
  const useCartItems = useMemo(
    () =>
    cartItems?.map((item, index) => {
        const { name } = item;

        item.productInSalePrice ? totalPrice += Number(item.productInSalePrice * item.quantity) : totalPrice += Number(item.productPrice * item.quantity);
        return (
          <Card className={clsx(styles.categories, 'text-center', 'p-4', 'h-full')} key={index}>
            <div className='grid grid-cols-2 '>
              <div>
                <img className={clsx(styles.photo, 'rounded-lg')}src={item.productImages} alt="Logo" />
              </div>
              <div className='flex flex-col pl-5'>
                <p className='pl-4  text-left'>Producto: {item.productName}</p>
                <p className='pl-4 pt-4 text-left'>Talla: {item.size}</p>
                <p className='pl-4 pt-4 text-left'>Cantidad: {item.quantity}</p>
                {item.productInSalePrice ? 
                  <div> 
                    <p className='pl-4 pb-4 pt-4 text-left line-through'>Precio regular: {formatter.format(item.productPrice)}</p>  
                    <p className='pl-4 pb-4 pt-4 text-left'>Precio en oferta: {formatter.format(item.productInSalePrice)}</p>
                  </div>
                  :
                  <p className='pl-4 pb-4 pt-4 text-left'>Precio: {formatter.format(item.productPrice)}</p>
                }
                <p className='pl-4 pb-4 pt-4 text-left'>Personalización: </p>
                <ol>
                {item.customParts?.map(part => {
                  {{console.log(part)}}
                  return <li key={""} className='pl-4 pb-4 pt-4 text-left'>{part.section} - {part.material}</li>
                })}
                </ol>
                <div className='flex flex-row pt-4'>
                  <ViewDetailButton id={index} productId={item.productId}/>
                  <DeleteButton id={index} productId={name} />
                </div>
              </div>
            </div>
          </Card>
        );
      }),
    [cartItems]
  );
  return (
    <div className=" mt-16">
      <h1 className='self-center text-4xl text-center pb-4'>Mi carrito</h1>
      {cartItems?.length ? useCartItems : <p className="text-center">No tienes productos en tu carrito.</p>}
      {cartItems?.length ? (

          <div className="flex flex-col w-full px-20 mb-4 py-2 content-center">
            <p className="text-2xl text-center mb-4">
              El precio total es de: {formatter.format(totalPrice)}
            </p>
            <div className='self-center'>
              <PayButton></PayButton>
            </div>
          </div>

      ) : <></>}
      {displayConfirmationModal && (
        <Modal showModal={displayConfirmationModal} toggleModal={setDisplayConfirmationModal} title="">
          <div className="flex flex-col w-full px-20 mb-4 -mt-10 justify-center items-center">
            {/*<BadgeCheckIcon className="items-center h-32 w-32 text-green-400 mb-6" />*/}
            <p className="text-2xl text-center mb-4">¿Quieres eliminar este artículo de tu carrito?</p>
            <div className="justify-between">
              <Button title="Si" className="mr-10 w-24 pl-32" variant="cta"  onClick={removeFromCart}/>
              <Button title="No" className="ml-10 w-24 pl-32" variant="cta" onClick={closeModal}/>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

CartDetailPage.Layout = EcommerceLayout;

export default withUserAgent(CartDetailPage);
