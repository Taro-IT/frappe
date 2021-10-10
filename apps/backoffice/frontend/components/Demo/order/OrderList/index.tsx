import { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import OrderCard from './OrderCard';

type order = {
    readonly id: string,
    readonly name: string
}

const OrderList = props => {
    const [orders, setOrders] = useState([])

    // TODO: centralize to state management -> refactor to custom hook
    useEffect(() => {
        const getOrders = async (): Promise<void> => {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/orders`)
            const data = response.data.result
            if (data.length !== 0) {
                setOrders(data);
            }
        }
        getOrders()
    }, [])

    const useOrders = useMemo(() => orders.map((order, index) => {
        return (
          <OrderCard id={index} order={order} items={order.items} />
        )
    }), [orders])


    return (
        <div className="overflow-y-scroll w-full">
            <div className="w-full  ">
              {useOrders.length ? useOrders : "No tienes órdenes registradas."}
            </div>
        </div>
    )
};

export default OrderList;
