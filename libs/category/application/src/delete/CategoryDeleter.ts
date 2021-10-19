import { 
  Category,
  CategoryNotFound, 
  CategoryRepository,
  CategoryPrimitives
} from '@frappe/category/domain';
import { CategoryFinder } from '../find';

interface Props {
  readonly categoryRepository: CategoryRepository;
  readonly categoryFinder: CategoryFinder;
}

export class CategoryDeleter {
  private readonly categoryFinder: CategoryFinder;
  private readonly categoryRepository: CategoryRepository;

  constructor({ categoryRepository, categoryFinder }: Props) {
    this.categoryRepository = categoryRepository;
    this.categoryFinder = categoryFinder;
  }

  async execute(id: string) {

    const category = await this.categoryExists(id);

    if (category === null) {
      throw new CategoryNotFound(id);
    }

    const isActive = false;
    const deletedAt = new Date();
    const updatedCategory: CategoryPrimitives = { ...category, isActive, deletedAt };

    return this.categoryRepository.save(Category.fromPrimitives(updatedCategory));
  }

  private async categoryExists(id: string) {
    try {
      const category = await this.categoryFinder.execute(id);
      return category as CategoryPrimitives;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}
