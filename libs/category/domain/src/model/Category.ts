import { CategoryId } from './CategoryId';
import { CategoryName } from './CategoryName';
import { CategoryPrimitives } from '../utils';
import { CategoryIsActive } from './CategoryIsActive'
import { CategoryDeletedAt } from './CategoryDeletedAt'

export class Category {
  constructor(
    readonly id: CategoryId,
    readonly name: CategoryName,
    readonly isActive: CategoryIsActive,
    readonly deletedAt?: CategoryDeletedAt
  ) {}

  static fromPrimitives(primitives: CategoryPrimitives): Category {
    return new Category(
      new CategoryId(primitives.id),
      new CategoryName(primitives.name),
      new CategoryIsActive(primitives.isActive),
      primitives.deletedAt && new CategoryDeletedAt(primitives.deletedAt)
      );
  }

  toPrimitives(): CategoryPrimitives {
    return {
      id: this.id.value,
      name: this.name.value,
      isActive: this.isActive.value,
      deletedAt: this.deletedAt?.value
    };
  }
}
