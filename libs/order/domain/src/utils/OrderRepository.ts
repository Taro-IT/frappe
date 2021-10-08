import { Order, OrderId } from "..";

export interface OrderRepository {
    save(category: Order): Promise<void>;
    find(id: OrderId): Promise<Order | null>;
    all(): Promise<Order[] | null>
}