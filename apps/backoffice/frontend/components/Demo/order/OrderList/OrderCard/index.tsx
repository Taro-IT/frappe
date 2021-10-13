
import { useState } from 'react';
import clsx from 'clsx'
import classes from '../OrderList.module.scss';
import {ChevronRightIcon, ChevronDownIcon} from '@heroicons/react/outline'
import { Button, Card} from '@frappe/common/design-system';
import ItemCard from '../ItemCard';

type OrderCardProps = {
  readonly items,
  readonly order,
  readonly id,
}

const OrderCard = ({items, order}: OrderCardProps) => {
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
    setExpanded(previous => !previous)  
  }

  const handlePDFOpen = (pdfFile) => window.open(pdfFile, '_blank')

  return (
    <Card className={clsx(classes.orders)}>
      <div className="flex flex-row py-4 align-middle">
        {closed ?
          <ChevronDownIcon className={clsx(classes['chevron-icon'], classes['expand-icon'])} onClick={handleExpandOrder}/>:
          <ChevronRightIcon className={clsx(classes['chevron-icon'], classes['expand-icon'])} onClick={handleExpandOrder}/>
        }
        <h1 className={clsx("text-2xl")}>{`Orden del ${day} de ${monthNames[month]} del ${year}`}</h1>
      </div>
      <hr className={clsx("mb-2", !closed && "invisible")}/>
      {
        items.map(({ id, ...item }) => (
          closed &&
          <ItemCard onItemClick={handlePDFOpen} id={id} item={item} imgSrc="https://cinica.mx/wp-content/uploads/2021/07/PHOTO-2020-07-22-22-35-46-3.jpeg" />
        ))
      }
    </Card>
  )
}

export default OrderCard