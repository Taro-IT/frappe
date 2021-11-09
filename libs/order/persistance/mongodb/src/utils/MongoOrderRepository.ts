import { MongoRepository } from '@frappe/common/persistence/mongodb';
import { Order, OrderId, OrderPrimitives, OrderRepository } from '@frappe/order/domain';

export class MongoOrderRepository extends MongoRepository implements OrderRepository {
  /**
   * Finds an order @see {@link Order}
   * @param id - The id of the order you want to find
   *
   * @returns the found order or null if it does not exist
   */
  async find(id: OrderId): Promise<Order> {
    const collection = await this.collection();
    const document = await collection.findOne({ _id: id.value });
    if (!document) {
      return null;
    }
    return Order.fromPrimitives({ ...document, id: document._id } as OrderPrimitives);
  }

  /**
 * Saves a new Order @see {@link Order}
 * @param order - The order object that want to saved
 *
 * @returns a new Order
 */
  async save(order: Order): Promise<void> {
    return this.persist(order.id.value, order);
  }

  /**
 * Returns a collection of all existing orders @see {@link Order}
 *
 * @returns all existing orders
 */
  async all(): Promise<Order[]> {
    const collection = await this.collection();
    const documents = await collection.find().toArray();
    
    return documents?.map(doc => Order.fromPrimitives({ ...doc, id: doc._id } as OrderPrimitives)) || [];
  }

  protected moduleName(): string {
    return 'orders';
  }
}
