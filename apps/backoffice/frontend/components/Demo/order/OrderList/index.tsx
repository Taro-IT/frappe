import { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import OrderCard from './OrderCard';
import { Steps, Summaries } from '@frappe/common/design-system';

const OrderList = () => {
  const [orders, setOrders] = useState([]);

  // TODO: centralize to state management -> refactor to custom hook
  useEffect(() => {
    const getOrders = async (): Promise<void> => {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/orders`);
      const data = response.data.result;
      if (data.length !== 0) {
        setOrders(data);
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
    <div className="overflow-y-scroll w-full">
      <Steps />
      <Summaries />
      <div className="w-full  ">{useOrders.length ? useOrders : 'No tienes órdenes registradas.'}</div>
    </div>
  );
};

export default OrderList;
