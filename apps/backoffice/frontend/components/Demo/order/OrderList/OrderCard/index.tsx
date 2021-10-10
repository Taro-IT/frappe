
import { useState } from 'react';
import clsx from 'clsx'
import classes from '../OrderList.module.scss';
import {ChevronRightIcon, ChevronDownIcon} from '@heroicons/react/outline'
import { Button, Card} from '@frappe/common/design-system';

type OrderCardProps = {
  readonly items,
  readonly id
  readonly order
}
const OrderCard = ({items, id, order}: OrderCardProps) => {
  const [closed, setExpanded] = useState<boolean>(false)
  const monthNames = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
  ];
      
  const prettyDate = new Date(order.dateCreated)
  const year = prettyDate.getFullYear()
  const month = prettyDate.getMonth()
  const day = prettyDate.getDay()

  const handleExpandOrder = () => {
    setExpanded((previous) => {
      return !previous
    })
  }

  return (
    <Card className={clsx(classes.orders, "text-left", "p-4")} key={id}>
      <div className="flex flex-row py-4 align-middle">
        {closed ? 
          <ChevronDownIcon className={clsx("h-5", classes['expand-icon'], "inline-block", "align-bottom", "m-2")} onClick={handleExpandOrder}/>:
          <ChevronRightIcon className={clsx("h-5", classes['expand-icon'], "inline-block", "align-bottom", "m-2")} onClick={handleExpandOrder}/>
        }
        <h1 className={clsx("text-2xl")}>{`Orden del ${day} de ${monthNames[month]} del ${year}`}</h1>
      </div>
      <hr className={clsx("mb-2", !closed && "invisible")}/>
      {
        items.map(({ id, ...item }) => (
          closed && 
          <div className="p-4">
            <div className="flex flex-row">
              <p className="mr-12 text-xl" key={ id }> { item.productName }  </p>
              <p className="text-gray-500 mr-12 text-lg">${item.productPrice}</p>
              <p className="mr-2 text-lg">{`Cantidad: ${item.quantity}`} </p>
                <Button title={'Ver PDF'} variant={"cta"} className="flex ml-auto" onClick={() => window.open(item.pdfFile, '_blank')}/>
            </div>
            <img className="my-6 rounded-xl" src="https://cinica.mx/wp-content/uploads/2021/07/PHOTO-2020-07-22-22-35-46-3.jpeg" alt="foto del producto" width="10%"/>
            <hr className={clsx("mb-2")}/>
          </div>
        ))
      }
    </Card>
  )
}

export default OrderCard