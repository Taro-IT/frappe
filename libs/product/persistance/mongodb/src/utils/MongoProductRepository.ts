import {MongoRepository} from '@frappe/common/persistence/mongodb';
import {Product, ProductId, ProductPrimitives, ProductRepository, ProductName} from '@frappe/product/domain';

export class MongoProductRepository extends MongoRepository implements ProductRepository {
  protected moduleName(): string {
    return 'products';
  }
  /**
   * Finds a product @see {@link Product}
   * @param id - The id of the product you want to find
   *
   * @returns the found product or null if it does not exist
   */
  async find(id: ProductId): Promise<Product> {
    const collection = await this.collection();
    const document = await collection.findOne({ _id: id.value });
    if (!document) {
      return null;
    }
    return Product.fromPrimitives({ ...document, id: document._id } as ProductPrimitives);
  }

/**
 * Saves a new Product @see {@link Product}
 * @param product - The product object that want to saved
 *
 * @returns a new Product
 */
  save(product: Product): Promise<void> {        
    return this.persist(product.id.value, product)
  }

  /**
   * Finds a product by name @see {@link Product}
   * @param name - The name of the product that will be searched.
   *
   * @returns the Product with the given name.
  */
  async findByName(name: ProductName): Promise<Product | null> {
    const collection = await this.collection();
    const document = await collection.findOne({ name: name.value });

    if (document === null) {
      return null;
    }

    return Product.fromPrimitives({ ...document, id: document._id } as ProductPrimitives);
  }

}