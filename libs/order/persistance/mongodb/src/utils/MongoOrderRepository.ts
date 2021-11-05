import { MongoRepository } from '@frappe/common/persistence/mongodb';
import { Order, OrderId, OrderPrimitives, OrderRepository } from '@frappe/order/domain';

export class MongoOrderRepository extends MongoRepository implements OrderRepository {
  async find(id: OrderId): Promise<Order> {
    const collection = await this.collection();
    const document = await collection.findOne({ _id: id.value });
    if (!document) {
      return null;
    }
    return Order.fromPrimitives({ ...document, id: document._id } as OrderPrimitives);
  }

  async save(order: Order): Promise<void> {
    return this.persist(order.id.value, order);
  }

  async all(): Promise<Order[]> {
    const collection = await this.collection();
    const documents = await collection.find().toArray();
    
    return documents?.map(doc => Order.fromPrimitives({ ...doc, id: doc._id } as OrderPrimitives)) || [];
  }

  protected moduleName(): string {
    return 'orders';
  }
}
