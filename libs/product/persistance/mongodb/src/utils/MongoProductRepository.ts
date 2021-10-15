import {MongoRepository} from '@frappe/common/persistence/mongodb';
import {Product, ProductRepository} from '@frappe/product/domain';

export class MongoProductRepository extends MongoRepository implements ProductRepository {
  
  /**
 * Saves a new Product @see {@link Product}
 * @param product - The product object that want to saved
 *
 * @returns a new Product
 */
  save(product: Product): Promise<void> {
   return this.persist(product.id.value, product)
  }

  protected moduleName(): string {
    return 'products';
  }
}