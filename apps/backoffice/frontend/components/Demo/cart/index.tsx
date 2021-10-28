import { BadgeCheckIcon, ExclamationIcon } from '@heroicons/react/solid';
import { Button, Card, Modal, SpanError } from '@frappe/common/design-system';
import classes from './CartDetails.module.scss';
import { useState, useMemo, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';

const CartView = () => {
  var categories = [];
  if (typeof window !== 'undefined') {
    var products = [];
    products[0] = { 'name': 'Chido', 'id': '0', 'color': 'azul', 'productId':'alsk-1234' , 'amount':'1', 'additionalComments':'Tamaño grande'};
    products[1] = { 'name': 'Chido2', 'id': '1', 'color': 'rojo', 'productId':'alsk-1235' , 'amount':'1', 'additionalComments':'Tamaño grande'};
    localStorage.setItem('objeto',JSON.stringify(products));
    categories = JSON.parse(localStorage.getItem('objeto')); 
  }
  const [categoryName, setCategoryName] = useState('');
  
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

  type buttonprops = { id: string; name?: string };

  const EditButton = ({ id, name }: buttonprops) => {
    return <Button title="Editar" className="ml-2 w-24" variant="cta"  />;
  };
  const DeleteButton = ({ id, name }: buttonprops) => {
    return <Button title="Eliminar" className="ml-2 w-24" variant="cta"  />;
  };

  const useCategories = useMemo(
    () =>
      
      categories.map((category, index) => {
        const { id, name } = category;
        console.log(category);
        return (
          <Card className={clsx(classes.categories, 'text-center', 'p-4')} key={index}>
            <h1 className='text-2xl'>{category.nombre}</h1>
            <p>{category.name}</p>
            <p>{category.color}</p>
            <p className='text-lg mb-12'>Productos en esta categoría: 4</p>
            <EditButton id={id} name={name} />
            <DeleteButton id={id} name={name} />
          </Card>
        );
      }),
    [categories]
  );

  return (
    <div className=" overflow-y-scroll">
      {useCategories.length ? useCategories : 'No tienes productos en tu carrito.'}
    </div>
  );
};

export default CartView;
