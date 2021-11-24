import { Criteria, Order } from '@dinnosc/criteria';
import { CategoryNotFound, CategoryName, CategoryRepository, Category } from '@frappe/category/domain';
import { Nullable } from '@frappe/common/utils';

interface Props {
  readonly categoryRepository: CategoryRepository;
}

export class CategoryNameFinder {
  private readonly categoryRepository: CategoryRepository;

  constructor({ categoryRepository }: Props) {
    this.categoryRepository = categoryRepository;
  }

  private async findCategoryByName (name: string): Promise<Nullable<Category>> {
    const filters = [
      { field : "isActive", operator: "EQUAL", value: true },
      { field: "name", operator: "EQUAL", value: name }
    ]
    const criteria = new Criteria<Category>(
      /* eslint-disable @typescript-eslint/ban-types */
      // @ts-ignore
      { value: filters },
      Order.none(),
    );

    const materials = await this.categoryRepository.search(criteria);
    return materials.length !== 0 ? materials[0] : null;
  }

  async execute(name: string) {
    const category = await this.findCategoryByName(name);

    if (category === null) {
      throw new CategoryNotFound(name);
    }

    return category.toPrimitives();
  }
}
