
import {Category, CategoryAlreadyExists, CategoryNotFound, CategoryPrimitives, CategoryRepository} from "@frappe/category/domain";
import {CategoryLister} from "./CategoryLister";
import {CategoryNameFinder} from '../find/find-by-name/CategoryNameFinder'
import { mock, MockProxy, DeepMockProxy, mockDeep } from 'jest-mock-extended'
import {CategoryMother} from "@frappe/category/test";


describe('CategoryLister', () => {
  let categoryRepository: MockProxy<CategoryRepository>;

  let lister: CategoryLister;

  beforeEach(() => {
    categoryRepository = mock<CategoryRepository>();

    lister = new CategoryLister({ categoryRepository });
  })

  it('should list all categories', async () => {
    
    const categories = new Array<Category>(5).fill(CategoryMother.random())
    
    categoryRepository.all.mockResolvedValueOnce(categories);
    await lister.execute();
    expect(categoryRepository.all).toReturn()
  });

  it('should return an empty object', async () => {
    const categories: Category[] = []
    categoryRepository.all.mockResolvedValueOnce(categories);
    await lister.execute();  
    expect(categoryRepository.all).toReturn()
  });
});
