//User Stories: frappe-91, frappe-507, frappe-85
import { ChangeEvent, useState } from 'react';
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

  const [displayParcelModal, setParcelModal] = useState<boolean>(false);

  const [parcelLength, setParcelLength] = useState<string>();
  const [parcelHeight, setParcelHeight] = useState<string>();
  const [parcelWidth, setParcelWidth] = useState<string>();
  const [parcelWeight, setParcelWeight] = useState<string>();

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

  const handleLenghtChange = (e : ChangeEvent<HTMLInputElement>) => {
    setParcelLength(e.target.value);
  };

  const handleHeightChange = (e : ChangeEvent<HTMLInputElement>) => {
    setParcelHeight(e.target.value);
    console.log(e.target.value)
  };


  const handleWidthChange = (e : ChangeEvent<HTMLInputElement>) => {
    setParcelWidth(e.target.value);
  };


  const handleWeightChange = (e : ChangeEvent<HTMLInputElement>) => {
    setParcelWeight(e.target.value);
  };


  

  const handleShippingModal = () => {
    setParcelModal(previous => !previous)
  }


  const handleShippingClick = async event  => {
    event.preventDefault();
  console.log(parcelWeight)
   const  orderShipping : any  = await axios.post('https://api-demo.skydropx.com/v1/shipments',
    { "address_from": {
      "province": "Querétaro",
      "city": "Corregidora",
      "name": "Doris Gómez",
      "zip": "76910",
      "country": "MX",
      "address1": "Av. Andmaxei #62",
      "company": "Cínica",
      "address2": "Fraccionamiento Petirrojo",
      "phone": "5521944332",
      "email": "doris@cinica.mx"
      },
      "parcels": [{
        "weight": parseInt(parcelWeight,10),
        "distance_unit": "CM",
        "mass_unit": "KG",
        "height":  parseInt(parcelHeight,10),
        "width":  parseInt(parcelWidth,10),
        "length":  parseInt(parcelLength,10)
      }],
      "address_to": {
        "province": order.address.province,
        "city":  order.address.city,
        "name":  order.clientName,
        "zip":  order.address.zip,
        "country": "MX",
        "address1":  order.address.address1,
        "company":  order.address.company,
        "address2":  order.address.address2,
        "phone":  order.address.phone,
        "email":  order.address.email,
        "reference":  order.address.reference,
        "contents": ' ' }
        },{
      headers : {
        Authorization: "Token token=" + process.env.NEXT_PUBLIC_SKYDROPX,
        "Content-Type": "application/json"
      }
    })

    let days = 100;
    let rateId : string
    orderShipping.data.included?.map( (rate) => {
      if(rate.type == "rates"){
        if(rate.attributes?.days < days){
          days = rate.attributes?.days
          rateId = rate.id
          console.log(rateId)
        }
      }
    });

    //TODO: cambiar a producción en variable de entorno:
    const label = await axios.post('https://api-demo.skydropx.com/v1/labels',
    {
      "rate_id": parseInt(rateId, 10),
       "label_format": "pdf"
    },
    {
      headers: {
      Authorization: "Token token=" + process.env.NEXT_PUBLIC_SKYDROPX,
      "Content-Type": "application/json",
    }
    })

    const labelId = label.data.data?.id

    const specificLabel = await axios.get('https://api-demo.skydropx.com/v1/labels/'+labelId,
    {
      headers: {
        Authorization: "Token token=" + process.env.NEXT_PUBLIC_SKYDROPX,
        "Content-Type": "application/json",
      }
    })
    
    window.open(specificLabel.data.data.attributes.label_url);
  };

  const onChangeOrderStatus = (event) => {
    setNewStatus(event.target.value);
    console.log(event.target.value)
  }

  const handleChangeModal = () => {
    setEditModal(true);
  }

  const handleChangeStatus = async event => {

    setStatus(newStatus);
    event.preventDefault();
    try {
      await axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/orders/${order.id}`, {
        status: newStatus
      },
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("authToken")
        }
      });
    } catch (error) {
      console.error('No se pudo actualizar el estado de la orden.');
    }
    setEditModal(false);
  }
  const generateOrderPDF = async () => {
    // Sorry
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/orders/pdf/${order.id}`,
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("authToken")
        }
      }
    )
    window.open(data.url)
  }

  return (
    <Card className={clsx(classes.orders, "w-11/12 ml-auto")}>
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
        {status === OrderStatuses.LISTA_PARA_ENVIO  && localStorage.getItem("accountRole") === "ADMIN" && (
        <Button title={'Imprimir Guía'} variant={'cta'} className="flex" onClick={handleShippingModal} />
        )}
        </div>

      <hr className={clsx('mb-2', !closed && 'invisible')} />
      {/*Dirección de envío y estado de orden de compra*/}
      {closed && (
        <div className="flex flex-row">
          <div className="mr-auto ml-4">
            <h5 className="font-bold text-left">Dirección de envío:</h5>
            <p>{order.address?.address1}</p>
            <p>{order.address?.city}, {order.address?.province}, {order.address?.country}</p>
            <p>CP: {order.address?.zip}</p>

          </div>
          <div className="ml-auto mr-4">
            <h5 className="font-bold text-center">Estado de la orden de compra:</h5>
            <ProgressBar status={status}/>

          </div>
          {(status != OrderStatuses.ENTREGADA)  && (
          <div className="">
            <Button title={'Cambiar estado de la orden'} variant={'cta'} className="flex" onClick={handleChangeModal}/>
          </div>
          )}

          {closed &&
            <Button title={order.pdfFile ? "Ver PDF" : "Generar PDF"} variant={'cta'} className="flex h-full ml-auto mr-6 " onClick={generateOrderPDF} />
          }
        </div>
      )}
      <hr />
      {items.map(
        ({ id, ...item }) =>
          closed && (
            <ItemCard
              id={id}
              item={item}
              imgSrc={item.productImages[0]}
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
              <div className="pb-4 ">
                <input type="radio" value={OrderStatuses.COMPLETADA} name="status" /> {OrderStatuses.COMPLETADA}
              </div>
              <div className="pb-4 ">
                <input type="radio" value={OrderStatuses.CANCELADA} name="status" /> {OrderStatuses.CANCELADA}
              </div>
              <div className="pb-4 ">
                <input type="radio" value={OrderStatuses.ERRONEA} name="status" /> {OrderStatuses.ERRONEA}
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
       {displayParcelModal && (
        /*Modal donde viene el radio para cambiar el estatus*/
        /*TODO: Poner el onClick en el botón para que llame la función del query*/
        <Modal
          title={`¿Cuáles son las caracterísiticas de la parcela a enviar?`}
          showModal={displayParcelModal}
          toggleModal={setParcelModal}
        >
          <div className="self-center text-center">
            <form onSubmit={handleShippingClick}>
              <div  className="p-2">
              <label>Largo (cm): </label>
              <input  placeholder="10.0"  required onChange={handleLenghtChange}/>
              </div>
              <div  className="p-2">
              <label>Alto (cm): </label>
              <input  placeholder="10.0"  required onChange={handleHeightChange}/>
              </div >
              <div className="p-2">
              <label>Ancho (cm): </label>
              <input  placeholder="10.0" required onChange={handleWidthChange}/>
              </div>
              <div className="p-2">
              <label>Peso (KG): </label>
              <input  placeholder="3.0"   required onChange={handleWeightChange}/>
              </div>
              <Alert
                title="¡Advertencia!"
                body="Al dar clic en 'Guardar y enviar', se generará la guía de envío para esta orden"
                color="yellow"
                className="self-center mt-4 mb-4"
              />
              <Button type="submit" title="Guardar y enviar"  variant={'cta'} className="text-center"/>
            </form>
          </div>
          <div className="p-3  self-center">
          </div>
        </Modal>
        
      )}
    </Card>
  );
};

export default OrderCard;
