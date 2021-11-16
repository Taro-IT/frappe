//User Stories: frappe-91, frappe-507
import { useState } from 'react';
import clsx from 'clsx';
import classes from '../OrderList.module.scss';
import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/outline';
import { Button, Card, Badge, Modal, ProgressBar, Alert} from '@frappe/common/design-system';
import ItemCard from '../ItemCard';
import * as React from 'react';
import { OrderStatuses } from '@frappe/order/domain'
import axios from 'axios';


type OrderCardProps = {
  readonly items;
  readonly order;
  readonly id;
};

const OrderCard = ({ items, order }: OrderCardProps) => {
  const [closed, setExpanded] = useState<boolean>(false);
  const [status, setStatus] = useState<OrderStatuses>(order.status);
  const [newStatus, setNewStatus] = useState<OrderStatuses>();
  const [displayEditModal, setEditModal] = useState<boolean>(false);
  

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


  const onChangeOrderStatus = (event) => {
    setNewStatus(event.target.value);
    console.log(event.target.value)
  }

  const handleChangeModal = () => {
    setEditModal(true);
  }

  const handlePDFOpen = pdfFile => window.open(pdfFile, '_blank');

  const handleChangeStatus = async event => {
    
    setStatus(newStatus);
    event.preventDefault();
    try {
      await axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/orders/${order.id}`, {
        status: newStatus
      });
    } catch (error) {
      console.error('No se pudo actualizar el estado de la orden.');
    }
    setEditModal(false);
  }

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
          {(status != OrderStatuses.ENTREGADA)  && (  
          <div className="">
            <Button title={'Cambiar estado de la orden'} variant={'cta'} className="flex" onClick={handleChangeModal}/>
          </div>
          )}
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
      {displayEditModal && (
        /*Modal donde viene el radio para cambiar el estatus*/
        /*TODO: Poner el onClick en el botón para que llame la función del query*/
        <Modal
          title={`¿Cómo va la orden?`}
          showModal={displayEditModal}
          toggleModal={setEditModal}
        >
          <div className="self-center text-center">
            <div className="pb-4 flex-row text-left" onChange={onChangeOrderStatus}>
              <div className="pb-4 ">
                <input type="radio" value={OrderStatuses.ABIERTO} name="status" /> {OrderStatuses.ABIERTO}
              </div>
              <div className="pb-4 ">
                <input type="radio" value={OrderStatuses.EN_PROCESO} name="status" /> {OrderStatuses.EN_PROCESO}
              </div>
              <div className="pb-4 ">
                <input type="radio" value={OrderStatuses.LISTA_PARA_ENVIO} name="status" /> {OrderStatuses.LISTA_PARA_ENVIO}
              </div>
              <div className="pb-4 ">
                <input type="radio" value={OrderStatuses.ENTREGADA} name="status" /> {OrderStatuses.ENTREGADA}
              </div>
            </div>
          </div>
          <Alert 
            title="¡Advertencia!" 
            body="Al dar clic en 'Guardar y enviar', se le mandará un correo al cliente notificándole el nuevo estado de su orden"
            color="yellow"
            className="w-5/6 self-center"
          />
          <div className="p-3  self-center">
            <Button title={'Guardar y enviar'} variant={'cta'} className="text-center" onClick={handleChangeStatus}/> 
          </div>
        </Modal>
      )}
    </Card>
  );
};

export default OrderCard;
