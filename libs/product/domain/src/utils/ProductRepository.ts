import { Product  } from '..';

export interface ProductRepository {
  save(product: Product): Promise<void>;
  
}
