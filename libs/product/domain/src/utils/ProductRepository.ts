import {Product} from "../model";
import {Criteria} from "@dinnosc/criteria";

export interface ProductRepository {
  search(criteria: Criteria<Product>): Promise<Product[]>;
  total(): Promise<number>;
}
