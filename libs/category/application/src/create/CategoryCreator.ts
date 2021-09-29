import {Category, CategoryAlreadyExists, CategoryId, CategoryName, CategoryRepository} from "@frappe/category/domain";
import { CategoryNameFinder } from "../find";

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
    // Validate name dos not exist
    const exists = await this.categoryExists(name)
    
    if(exists === null) {
      throw new CategoryAlreadyExists(name);
    }

    const category = new Category(new CategoryId(id), new CategoryName(name));
    return this.categoryRepository.save(category);
  }

  async categoryExists(name: string) {
    try {
      await this.categoryNameFinder.execute(name)
      return null
    } catch (error) {
      return error
    }
  }
}