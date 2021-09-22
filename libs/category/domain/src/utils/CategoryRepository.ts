import {Category, CategoryId} from "../model";

export interface CategoryRepository {
  save(category: Category): Promise<void>;
  find(id: CategoryId): Promise<Category | null>;
}
