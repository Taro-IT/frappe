import { Category, CategoryDeletedAt, CategoryId, CategoryIsActive, CategoryName } from '@frappe/category/domain';
import { StringMother, UuidMother } from '@frappe/common/test';

export class CategoryMother {
  static random(): Category {
    return new Category(
        new CategoryId(UuidMother.random()),
        new CategoryName(StringMother.random()),
        new CategoryIsActive(true));
  }

  static withDeletedDate(deletedAt: Date): Category {
    return new Category(
      new CategoryId(UuidMother.random()),
      new CategoryName(StringMother.random()),
      new CategoryIsActive(false),
      new CategoryDeletedAt(deletedAt)
    );
  }
}
