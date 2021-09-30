import {CategoryNotFound, CategoryRepository, CategoryId} from "@frappe/category/domain";

interface Props {
  readonly categoryRepository: CategoryRepository
}

export class CategoryFinder {
  private readonly categoryRepository: CategoryRepository;

  constructor({ categoryRepository }: Props) {
    this.categoryRepository = categoryRepository;
  }

  async execute(id: string) {
    const category = await this.categoryRepository.find(new CategoryId(id));
    
    if(category === null) {
      throw new CategoryNotFound(id)
    }

    return category.toPrimitives()
  }
}