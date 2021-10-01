
import {CategoryAlreadyExists, CategoryNotFound, CategoryRepository} from "@frappe/category/domain";
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
    const category = CategoryMother.random();

    categoryRepository.find.mockRejectedValueOnce(CategoryNotFound);
    await lister.execute();

    expect(categoryRepository.save).toHaveBeenCalledWith(category);
  });
});
