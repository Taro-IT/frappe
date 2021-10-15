import { Product, ProductId  } from '..';

export interface ProductRepository {
  save(product: Product): Promise<void>;
  find(id: ProductId): Promise<Product>;
  
}
