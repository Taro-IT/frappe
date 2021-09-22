import {Category, CategoryId, CategoryName, CategoryRepository} from "@frappe/category/domain";

interface Props {
  readonly categoryRepository: CategoryRepository
}

export class CategoryCreator {
  private readonly categoryRepository: CategoryRepository;

  constructor({ categoryRepository }: Props) {
    this.categoryRepository = categoryRepository;
  }


  async execute(id: string, name: string) {
    // TODO Validate name dos not exist

    const category = new Category(new CategoryId(id), new CategoryName(name));

    return this.categoryRepository.save(category);
  }
}
