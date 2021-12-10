import { Product, ProductId, ProductName } from '../model';
import { Criteria } from '@dinnosc/criteria';
import { Nullable } from '@frappe/common/utils';

export interface ProductRepository {
  search(criteria: Criteria<Product>): Promise<Product[]>;
  total(): Promise<number>;
  save(product: Product): Promise<void>;
  find(id: ProductId): Promise<Product>;
  findByName(name: ProductName): Promise<Nullable<Product>>;
  delete(id: ProductId): Promise<Nullable<boolean>>;
}
