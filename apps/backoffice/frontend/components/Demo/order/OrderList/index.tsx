import { Button, Card, Modal, SpanError} from '@frappe/common/design-system';
import { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import OrderCard from './OrderCard';

type order = {
    readonly id: string,
    readonly name: string
}

const OrderList = props => {
    const [orders, setOrders] = useState([])
    const [displayEditModal, setEditModal] = useState<boolean>(false)
    const [currentOrder, setCurrentOrder] = useState<order>()
    const [newName, setNewName] = useState<string>("")
    const [nameErrors, setNameErrors] = useState<boolean>(false)

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

    const updateOrder = async (id:string, name: string) => {
        if(name === "" || name === currentOrder.name) {
            setNameErrors(true)
            return
        }
        try {
            await axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/orders/${id}`, {
            name: name
            })
        } catch (error) {
            console.error("La categoría ya existe.", error);
        }
        setEditModal(false)
        setNameErrors(false)
        return
    }

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }


    const editOrder = (id:string, name:string) => {
        setEditModal(true)
        setCurrentOrder({id, name})
        setNameErrors(false)
    }
    const SaveChangesButton = (props) => {
        const saveChanges = () => {
            updateOrder(props.id, props.name)
        }
        return (
            <Button title="Guardar cambios" onClick={saveChanges} variant="cta" className={"mt-4"} />
        )
    }

    const EditButton = (props) => {
        const edit = () => {
            editOrder(props.id, props.name)
        }
        return (
            <Button title="Editar" className="ml-2 w-24" variant="cta" onClick={edit}/>
        )
    }

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
            {displayEditModal &&
                    <Modal title={`Editar categoría - ${currentOrder.name}`} showModal={displayEditModal} toggleModal={setEditModal} >
                        <form className="flex flex-col w-full px-20 mb-4 py-2">
                            <label className="text-base w-full my-1">Nuevo nombre</label>
                            <input className="border-2 border-gray-500 rounded w-full placeholder-gray-500" placeholder={currentOrder.name} onChange={handleNameChange} type="name" name="orderName" />
                            {nameErrors && <SpanError message="El nombre no puede ser vacío ni igual al anterior"/>}
                            <SaveChangesButton id={currentOrder.id} name={newName}/>
                        </form>
                    </Modal>
            }
        </div>
    )
};

export default OrderList;
