import { Product, ProductId, ProductName  } from '..';

export interface ProductRepository {
  save(product: Product): Promise<void>;
  find(id: ProductId): Promise<Product>;
  findByName(name: ProductName): Promise<Product | null>;
}
