import { Button, Card, Modal, SpanError } from '@frappe/common/design-system';
import classes from './CartDetails.module.scss';
import { useState, useMemo, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';

const CartView = () => {
  const [categoryName, setCategoryName] = useState('');
  const [cartItems, setCartItems] = useState([]);
  var totalPrice = 0;

  
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // var products = [];
      // products[0] = { 'name': 'Chido', 'color': 'azul', 'productId':'alsk-1234' , 'amount':'1', 'additionalComments':'Tamaño grande', 'size':'23', 'price':'2300', 'image':'https://cinicastaticfiles.blob.core.windows.net/uploads/c93b52d0-eabf-4c7d-9f94-e28a16fc62fb.jpeg'};
      // products[1] = { 'name': 'Chido2', 'color': 'rojo', 'productId':'alsk-1235' , 'amount':'1', 'additionalComments':'Tamaño grande', 'size':'22', 'price':'2003', 'image':'https://cinicastaticfiles.blob.core.windows.net/uploads/c93b52d0-eabf-4c7d-9f94-e28a16fc62fb.jpeg'};
      // products[2] = { 'name': 'Chido2', 'color': 'rojo', 'productId':'alsk-1235' , 'amount':'1', 'additionalComments':'Tamaño grande', 'size':'26', 'price':'2003', 'image':'https://cinicastaticfiles.blob.core.windows.net/uploads/c93b52d0-eabf-4c7d-9f94-e28a16fc62fb.jpeg'};
      // products[3] = { 'name': 'Chido2', 'color': 'rojo', 'productId':'alsk-1235' , 'amount':'1', 'additionalComments':'Tamaño grande', 'size':'27', 'price':'2003', 'image':'https://cinicastaticfiles.blob.core.windows.net/uploads/c93b52d0-eabf-4c7d-9f94-e28a16fc62fb.jpeg'};
      // products[4] = { 'name': 'Chido2', 'color': 'rojo', 'productId':'alsk-1235' , 'amount':'1', 'additionalComments':'Tamaño grande', 'size':'25', 'price':'2003', 'image':'https://cinicastaticfiles.blob.core.windows.net/uploads/c93b52d0-eabf-4c7d-9f94-e28a16fc62fb.jpeg'};
      // localStorage.setItem('objeto',JSON.stringify(products));
      setCartItems(JSON.parse(localStorage.getItem('objeto')));
      if(cartItems === null){
        var cartArray = [];
        localStorage.setItem('objeto',JSON.stringify(cartArray));
        setCartItems(JSON.parse(localStorage.getItem('objeto')));
      }
    }
  }, []);

  const addCategoryHandler = async event => {
    event.preventDefault();
    if (categoryName == '') return;
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/categories/`, {
        name: categoryName
      });
    } catch (error) {
      console.error('La categoría ya existe.');
    }

    setCategoryName('');
  };

  const nameChangeHandler = event => {
    setCategoryName(event.target.value);
  };

  type buttonprops = { id: number; productId?: string };

  const EditButton = ({ id, productId }: buttonprops) => {
    return <Button title="Ver detalle" className="ml-2 w-24" variant="cta"  />;
  };

  const PayButton = () => {
    return <Button title="Ir a Pagar" className="ml-2 w-40 " variant="cta"  />;
  };

  const DeleteButton = ({ id, productId }: buttonprops) => {
    const deleteItem = () => {
      var i = 0;
      while(i != id){
        i++;
      }
      cartItems.splice(i, 1);
      localStorage.setItem('objeto',JSON.stringify(cartItems));
    };
    return <Button title="Quitar" className="ml-2 w-24 pl-32" variant="cta"  onClick={deleteItem}/>;
  };

  const useCartItems = useMemo(
    () =>
      
      cartItems.map((category, index) => {
        const { id, name } = category;
        totalPrice += Number(category.price);
        return (
          <Card className={clsx(classes.categories, 'text-center', 'p-4')} key={index}>
            <div className='grid grid-cols-2 '>
              <div>
                <img className={clsx(classes.photo)}src={category.image} alt="Logo" />
              </div>
              <div className='flex flex-col '>
                <p className='pl-4  text-left'>Producto: {category.name}</p>
                <p className='pl-4 pt-4 text-left'>Talla: {category.size}</p>
                <p className='pl-4 pb-4 pt-4 text-left'>Precio: ${category.price}</p>
                <div className='flex flex-row pt-4'>
                  <EditButton id={index} productId={category.productId}/>
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
    <div className=" overflow-y-scroll">
      {cartItems.length ? useCartItems : 'No tienes productos en tu carrito.'}
      {cartItems.length && (
        
          <div className="flex flex-col w-full px-20 mb-4 py-2 content-center">
            <p className="text-2xl text-center mb-4">
              El precio total es de: ${totalPrice}
            </p>
            <div className='self-center'>
              <PayButton></PayButton>
            </div>         
          </div>
        
      )}
    </div>
  );
};

export default CartView;
