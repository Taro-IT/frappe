import { Category, CategoryId, CategoryName } from '@frappe/category/domain';
import { StringMother, UuidMother } from '@frappe/common/test';

export class CategoryMother {
  static random(): Category {
    return new Category(new CategoryId(UuidMother.random()), new CategoryName(StringMother.random()) );
  }
}
