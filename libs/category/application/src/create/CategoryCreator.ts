import { Category, CategoryAlreadyExists, CategoryId, CategoryIsActive, CategoryName, CategoryRepository } from '@frappe/category/domain';
import { wrapError } from '@frappe/common/utils';
import { CategoryNameFinder } from '../find';

// SOLID
// Una Clase por lo general solo debe tener un método público

interface Props {
  readonly categoryRepository: CategoryRepository;
  readonly categoryNameFinder: CategoryNameFinder;
}

export class CategoryCreator {
  private readonly categoryNameFinder: CategoryNameFinder;
  private readonly categoryRepository: CategoryRepository;

  constructor({ categoryRepository, categoryNameFinder }: Props) {
    this.categoryRepository = categoryRepository;
    this.categoryNameFinder = categoryNameFinder;
  }

  async execute(id: string, name: string) {
    const exists = await this.categoryExists(name);

    if (exists === null) {
      throw new CategoryAlreadyExists(name);
    }

    const category = new Category(
      new CategoryId(id),
      new CategoryName(name),
      new CategoryIsActive(true)
    );
    return this.categoryRepository.save(category);
  }

  private async categoryExists(name: string) {
    const [error] = await wrapError(this.categoryNameFinder.execute(name))
    return error
  }
}
