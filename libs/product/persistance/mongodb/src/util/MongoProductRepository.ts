import {MongoRepository} from "@frappe/common/persistence/mongodb";
import {Product, ProductPrimitives, ProductRepository} from "@frappe/product/domain";
import {Criteria} from "@dinnosc/criteria";

export class MongoProductRepository extends MongoRepository implements ProductRepository {
  protected moduleName(): string {
    return 'products';
  }

  /**
   * Search database products that matches the provided criteria
   *
   * @param criteria Object that represents a Query
   */
  async search(criteria: Criteria<Product>): Promise<Product[]> {
    const products = await this.searchByCriteria(criteria);

    return products.map(product => Product.fromPrimitives({ ...product, id: product._id } as ProductPrimitives));
  }
}
