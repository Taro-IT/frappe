import {Category, CategoryId, CategoryName} from "../model";

export interface CategoryRepository {
  save(category: Category): Promise<void>;
  find(id: CategoryId): Promise<Category | null>;
  findByName(name: CategoryName): Promise<Category | null>
}
