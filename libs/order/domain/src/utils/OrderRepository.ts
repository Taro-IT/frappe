import { Order, OrderId } from "..";
import {Nullable} from '@frappe/common/utils'

export interface OrderRepository {
    save(category: Order): Promise<void>;
    find(id: OrderId): Promise<Nullable<Order>>;
    all(): Promise<Order[]>
}