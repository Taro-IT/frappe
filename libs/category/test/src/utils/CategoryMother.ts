import { Category, CategoryId, CategoryName, CategoryIsActive, CategoryDeletedAt } from '@frappe/category/domain';
import { StringMother, UuidMother } from '@frappe/common/test';

export class CategoryMother {
  static random(): Category {
    return new Category(new CategoryId(UuidMother.random()), new CategoryName(StringMother.random()), new CategoryIsActive(true) );
  }
}
