//User story: frappe-981
import  { useEffect } from 'react';
import axios from 'axios';
import { ThankYouComponent } from '../ThankYouComponent';

export function CheckoutSuccess() {

  const generateOrder = async () => {
    const items = JSON.parse(localStorage.getItem('items')||"[]");
    items.map((item: any) => {
      item.quantity = parseInt(item.quantity, 10);
    });

    const orderData = {
      items: items,
      subtotal: parseFloat(localStorage.getItem('subtotal')||"[]"),
      total: parseFloat(localStorage.getItem('total')||"[]"),
      clientName: localStorage.getItem('clientName'),
      address: JSON.parse(localStorage.getItem('address')||"[]")
    };
    console.log(orderData);

    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/orders/`, {
        items: items,
        subtotal: parseFloat(localStorage.getItem('subtotal')||"[]"),
        total: parseFloat(localStorage.getItem('total')||"[]"),
        clientName: localStorage.getItem('clientName'),
        address: JSON.parse(localStorage.getItem('address')||"[]")
      });
      //AQUI HAY UN CLEAR DEL LOCAL STORAGE, SO SE REQUIERE CONSERVAR PARA ALGO, QUITARLO!!!!!!!!
      //localStorage.clear();
      return;
    } catch (error) {
      console.log(error);
      return;
    }
  };

  useEffect(() => {
    generateOrder();
    localStorage.clear();
  }, [])

  return (
    <div className=" bg-gray-100 ">
      <ThankYouComponent />
    </div>
  );
}