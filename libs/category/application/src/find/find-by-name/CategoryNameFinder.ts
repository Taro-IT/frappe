import {CategoryAlreadyExists, CategoryName, CategoryRepository} from "@frappe/category/domain";

interface Props {
  readonly categoryRepository: CategoryRepository
}

export class CategoryNameFinder {
  private readonly categoryRepository: CategoryRepository;

  constructor({ categoryRepository }: Props) {
    this.categoryRepository = categoryRepository;
  }

  async execute(name: string) {
    const category = await this.categoryRepository.findByName(new CategoryName(name));

    if(category === null) {
      throw new CategoryAlreadyExists(name)
    }

    return category.toPrimitives()
  }
}