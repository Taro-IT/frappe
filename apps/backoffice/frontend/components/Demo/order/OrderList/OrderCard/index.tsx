//User Story: frappe-91
import { useState } from 'react';
import clsx from 'clsx';
import classes from '../OrderList.module.scss';
import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/outline';
import { Button, Card, Badge, ProgressBar} from '@frappe/common/design-system';
import ItemCard from '../ItemCard';
import * as React from 'react';
import { OrderStatuses } from '@frappe/order/domain'


type OrderCardProps = {
  readonly items;
  readonly order;
  readonly id;
  readonly status;
};

const OrderCard = ({ items, order, status }: OrderCardProps) => {
  const [closed, setExpanded] = useState<boolean>(false);
  const monthNames = [
    'enero',
    'febrero',
    'marzo',
    'abril',
    'mayo',
    'junio',
    'julio',
    'agosto',
    'septiembre',
    'octubre',
    'noviembre',
    'diciembre'
  ];

  const prettyDate = new Date(order.dateCreated);
  const year = prettyDate.getUTCFullYear();
  const month = prettyDate.getUTCMonth();
  const day = prettyDate.getUTCDate();

  const handleExpandOrder = () => {
    setExpanded(previous => !previous);
  };

  const handleClick = () => {
    console.log("Imprimir guía de envío")
  };

  const handlePDFOpen = pdfFile => window.open(pdfFile, '_blank');

  console.log(order);

  return (
    <Card className={clsx(classes.orders)}>
      <div className="flex flex-row justify-between py-4 align-middle pr-8">
        <div className="flex">
          {closed ? (
            <ChevronDownIcon
              className={clsx(classes['chevron-icon'], classes['expand-icon'])}
              onClick={handleExpandOrder}
            />
          ) : (
            <ChevronRightIcon
              className={clsx(classes['chevron-icon'], classes['expand-icon'])}
              onClick={handleExpandOrder}
            />
          )}
          <h1 className={clsx('text-2xl')}>{`Orden del ${day} de ${monthNames[month]} del ${year} - ${order.clientName}`}</h1>
        </div>
        {/*Solo mostrar la alerta si la orden está atrasada*/}
        {order.isDelayed && (
            <Badge content="Atrasada" color="red"/>
        )}
        {status === OrderStatuses.LISTA_PARA_ENVIO  && (
        <Button title={'Imprimir Guía'} variant={'cta'} className="flex" onClick={handleClick} />
        )}
        </div>
      
      <hr className={clsx('mb-2', !closed && 'invisible')} />
      {/*Dirección de envío y estado de orden de compra*/}
      {closed && (
        <div className="flex flex-row justify-evenly">
          <div>
            <h5 className="font-bold text-left">Dirección de envío:</h5>
            <p>{order.address?.address1}</p>
            <p>{order.address?.city}, {order.address?.province}, {order.address?.country}</p>
            <p>CP: {order.address?.zip}</p>
            
          </div>
          <div>
            <h5 className="font-bold text-center">Estado de la orden de compra:</h5>
            <ProgressBar status={status}/>
          </div>
        </div>
      )}
      {items.map(
        ({ id, ...item }) =>
          closed && (
            <ItemCard
              onItemClick={handlePDFOpen}
              id={id}
              item={item}
              imgSrc="https://cinica.mx/wp-content/uploads/2021/07/PHOTO-2020-07-22-22-35-46-3.jpeg"
            />
          )
      )}
      {/*Total y subtotal*/}
      {closed && (
        <div className="pr-8 pb-8">
          <div className="flex justify-end">
            <h5 className="text-sm">Subtotal: ${ order.subtotal }</h5>
          </div>
          <div className="flex justify-end">
            <h5 className="font-bold">Total: ${ order.total } </h5>
          </div>
        </div>
      )}
    </Card>
  );
};

export default OrderCard;
