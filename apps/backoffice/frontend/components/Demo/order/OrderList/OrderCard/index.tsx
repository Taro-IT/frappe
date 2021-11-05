import { useState } from 'react';
import clsx from 'clsx';
import classes from '../OrderList.module.scss';
import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/outline';
import { Card, Badge, ProgressBar} from '@frappe/common/design-system';
import ItemCard from '../ItemCard';
import * as React from 'react';


type OrderCardProps = {
  readonly items;
  readonly order;
  readonly id;
  readonly status;
};

const OrderCard = ({ items, order, status }: OrderCardProps) => {
  const [closed, setExpanded] = useState<boolean>(false);
  const monthNames = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
  ];

  const prettyDate = new Date(order.dateCreated);
  const year = prettyDate.getUTCFullYear();
  const month = prettyDate.getUTCMonth();
  const day = prettyDate.getUTCDate();

  const handleExpandOrder = () => {
    setExpanded(previous => !previous);
  };

  const handlePDFOpen = pdfFile => window.open(pdfFile, '_blank');

  return (
    <Card className={clsx(classes.orders)}>    
      <div className="flex flex-row py-4 align-middle">
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
        <Badge content="Atrasada" color="red" />
      )}
      <hr className={clsx('mb-2', !closed && 'invisible')} />
      {/*Dirección de envío y estado de orden de compra*/}
      {closed && (
        <div className="flex flex-row justify-evenly">
          <div>
            <h5 className="font-bold">Dirección de envío:</h5>
            <p>mi casita gg</p>
          </div>
          <div>
            <h5 className="font-bold">Estado de la orden de compra</h5>
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
        <div className="">
            <h5 className="font-bold">Subtotal:</h5> ${order.subtotal}
            <h5 className="font-bold">Total</h5> ${ order.total }          
        </div>
      )}
    </Card>
  );
};

export default OrderCard;
