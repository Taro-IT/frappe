import {Category, CategoryName, CategoryRepository} from "@frappe/category/domain";
import {Uuid} from "@frappe/common/value-object";

interface Props {
  readonly categoryRepository: CategoryRepository
}

export class CategoryCreator {
  private readonly categoryRepository: CategoryRepository;

  constructor({ categoryRepository }: Props) {
    this.categoryRepository = categoryRepository;
  }


  async execute(name: string) {
    // TODO Validate name dos not exist

    const category = new Category(Uuid.create(), new CategoryName(name));

    return this.categoryRepository.save(category);
  }
}
