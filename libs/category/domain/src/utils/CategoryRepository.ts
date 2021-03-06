import { Category, CategoryId, CategoryName } from '../model';
import { Nullable } from '@frappe/common/utils';
import { Criteria } from '@dinnosc/criteria';

export interface CategoryRepository {
  save(category: Category): Promise<void>;
  find(id: CategoryId): Promise<Nullable<Category>>;
  all(): Promise<Category[]>;
  findByName(name: CategoryName): Promise<Nullable<Category>>;
  delete(id: CategoryId): Promise<Nullable<boolean>>;
  search (criteria: Criteria<Category>): Promise<Category[]>

}
