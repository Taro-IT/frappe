import {  CategoryRepository, CategoryIdNotFound, CategoryPrimitives, Category, CategoryAlreadyExists } from '@frappe/category/domain';
import { CategoryFinder, CategoryNameFinder } from '../find';

interface Props {
  readonly categoryRepository: CategoryRepository;
  readonly categoryFinder: CategoryFinder;
  readonly categoryNameFinder: CategoryNameFinder;
}

export class CategoryUpdater {
  private readonly categoryRepository: CategoryRepository;
  private readonly categoryFinder: CategoryFinder;
  private readonly categoryNameFinder: CategoryNameFinder;

  constructor({ categoryRepository, categoryFinder, categoryNameFinder }: Props) {
    this.categoryRepository = categoryRepository;
    this.categoryFinder = categoryFinder;
    this.categoryNameFinder = categoryNameFinder;
  }

  async execute(id: string, name: string) {
    const category = await this.categoryExists(id);
    

    if(category === null) {
      throw new CategoryIdNotFound(id);
    }

    const nameExists = await this.nameExists(name);

    if(nameExists === null) {
      throw new CategoryAlreadyExists(name);
    }

    const updatedCategory:CategoryPrimitives = {...category, name}

    return this.categoryRepository.save(Category.fromPrimitives(updatedCategory))
  }

  private async nameExists(name: string) {
    try {
      await this.categoryNameFinder.execute(name);
      return null;
    } catch (error) {
      return error;
    }
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
