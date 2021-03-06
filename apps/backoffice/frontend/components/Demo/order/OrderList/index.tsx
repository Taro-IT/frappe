//User Story: frappe-91
import { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import OrderCard from './OrderCard';

const OrderList = () => {
  const [orders, setOrders] = useState([]);

  // TODO: centralize to state management -> refactor to custom hook
  useEffect(() => {
    const getOrders = async (): Promise<void> => {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/orders`,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("authToken")
          }
        }
      );
      const data = response.data.result;
      console.log(data);
      if (data.length !== 0) {
        const arr = data.reverse();
        console.log("arr", arr);
        setOrders(arr);
      }
    };
    getOrders();
  }, []);
  
  const useOrders = useMemo(
    () =>
    orders.map(order => {
        return <OrderCard id={order.id} order={order} items={order.items} key={order.id} />;
      }),
    [orders]
  );

  return (
      <div className="w-full overflow-y-scroll">{useOrders.length ? useOrders : 'No tienes órdenes registradas.'}</div>
  );
};

export default OrderList;
