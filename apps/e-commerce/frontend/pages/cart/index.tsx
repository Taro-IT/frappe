  // User Story: Frappe 80 / Frappe 69

import React, { useEffect, useMemo, useState } from 'react'
import styles from '../../styles/cartDetails.module.scss';
import { Button, Card, EcommerceLayout, Modal, withUserAgent } from '@frappe/common/design-system';
import clsx from 'clsx';
import { BadgeCheckIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/router';
import axios from 'axios';

const CartDetailPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [displayConfirmationModal, setDisplayConfirmationModal] = useState<boolean>(false)
  const router = useRouter();
  let totalPrice = 0;



  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCartItems(JSON.parse(localStorage.getItem('items')));
      if(cartItems === null){
        const cartArray = [];
        localStorage.setItem('items',JSON.stringify(cartArray));
        setCartItems(JSON.parse(localStorage.getItem('items')));
      }
    }
  }, []);

  const handlePayment = async () => {
    const products = JSON.parse(localStorage.getItem('items'))
    const stripeItems = products.map(product => (
      {
        id: product.id,
        quantity: product.amount
      }
    ))
    console.log(products);
    
    const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/payments`, {
      items: stripeItems
    });
    window.location.href = data.session.url
  }

  type buttonprops = { id: number; productId?: string };

  const ViewDetailButton = ({ id, productId }: buttonprops) => {
    return <Button title="Ver detalle" className="ml-2 w-24" variant="cta"  />;
  };

  const handlePayButton = () => {
    localStorage.setItem('subtotal', JSON.stringify(totalPrice))
    localStorage.setItem('total', JSON.stringify(totalPrice))
    router.push("/checkout");
  }

  const PayButton = () => {
    return <Button title="Ir a Pagar" className="ml-2 w-40 " variant="cta" onClick={handlePayButton} />;
  };

  const DeleteButton = ({ id, productId }: buttonprops) => {
    const deleteItem = () => {
      let i = 0;
      while(i != id){
        i++;
      }
      cartItems.splice(i, 1);
      localStorage.setItem('items',JSON.stringify(cartItems));
      setDisplayConfirmationModal(true);
    };
    return <Button title="Quitar" className="ml-2 w-24 pl-32" variant="cta"  onClick={deleteItem}/>;
  };


  //Creates the cards for all the items in the cart using localStorage
  const useCartItems = useMemo(
    () =>

      cartItems?.map((item, index) => {
        const { name } = item;
        totalPrice += Number(item.productPrice * item.quantity);
        return (
          <Card className={clsx(styles.categories, 'text-center', 'p-4')} key={index}>
            <div className='grid grid-cols-2 '>
              <div>
                <img className={clsx(styles.photo)}src={item.productImages} alt="Logo" />
              </div>
              <div className='flex flex-col '>
                <p className='pl-4  text-left'>Producto: {item.productName}</p>
                <p className='pl-4 pt-4 text-left'>Talla: {item.size}</p>
                <p className='pl-4 pt-4 text-left'>Cantidad: {item.quantity}</p>
                <p className='pl-4 pb-4 pt-4 text-left'>Precio: ${item.productPrice}</p>
                <p className='pl-4 pb-4 pt-4 text-left'>Personalización: </p>
                <ol>
                {item.customParts?.map(part => {
                  {{console.log(part)}}
                  return <li key={""} className='pl-4 pb-4 pt-4 text-left'>{part.name} - {part.material}</li>
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
      {cartItems?.length ? useCartItems : 'No tienes productos en tu carrito.'}
      {cartItems?.length && (

          <div className="flex flex-col w-full px-20 mb-4 py-2 content-center">
            <p className="text-2xl text-center mb-4">
              El precio total es de: ${totalPrice}
            </p>
            <div className='self-center'>
              <PayButton></PayButton>
            </div>
          </div>

      )}
      {displayConfirmationModal && (
        <Modal showModal={displayConfirmationModal} toggleModal={setDisplayConfirmationModal} title="">
          <div className="flex flex-col w-full px-20 mb-4 -mt-10 justify-center items-center">
            <BadgeCheckIcon className="items-center h-32 w-32 text-green-400 mb-6" />
            <p className="text-2xl text-center mb-4">Se ha eliminado el producto de tu carrito</p>
          </div>
        </Modal>
      )}
    </div>
  );
};

CartDetailPage.Layout = EcommerceLayout;

export default withUserAgent(CartDetailPage);