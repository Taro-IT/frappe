import { CategoryId } from './CategoryId';
import { CategoryName } from './CategoryName';
import { CategoryPrimitives } from '../utils';

export class Category {
  constructor(readonly id: CategoryId, readonly name: CategoryName) {}

  static fromPrimitives(primitives: CategoryPrimitives): Category {
    return new Category(new CategoryId(primitives.id), new CategoryName(primitives.name));
  }

  toPrimitives(): CategoryPrimitives {
    return {
      id: this.id.value,
      name: this.name.value
    };
  }
}
