import { CategoryId, CategoryNotFound, CategoryRepository} from "@frappe/category/domain";
import { CategoryFinder } from "../find";

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
    const exists = await this.categoryExists(id)

    if(exists !== null) {
      throw new CategoryNotFound(id);
    }

    return this.categoryRepository.delete(new CategoryId(id));
  }

  private async categoryExists(id: string) {
    try {
      await this.categoryFinder.execute(id)
      return null
    } catch (error) {
      return error
    }
  }
}
