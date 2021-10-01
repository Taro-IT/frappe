import {CategoryAlreadyExists, CategoryRepository} from "@frappe/category/domain";
import {CategoryCreator} from "./CategoryCreator";
import {CategoryNameFinder} from '../find/find-by-name/CategoryNameFinder'
import { mock, MockProxy, DeepMockProxy, mockDeep } from 'jest-mock-extended'
import {CategoryMother} from "@frappe/category/test";


describe('CategoryCreator', () => {
  let categoryRepository: MockProxy<CategoryRepository>;
  let categoryNameFinder: DeepMockProxy<CategoryNameFinder>;

  let creator: CategoryCreator;

  beforeEach(() => {
    categoryRepository = mock<CategoryRepository>();
    categoryNameFinder = mockDeep<CategoryNameFinder>(new CategoryNameFinder({ categoryRepository }));

    creator = new CategoryCreator({ categoryRepository, categoryNameFinder });
  })

  it('should create a new Category', async () => {
    const category = CategoryMother.random();

     categoryRepository.findByName.mockRejectedValueOnce(CategoryAlreadyExists);
    await creator.execute(category.id.value, category.name.value);

    expect(categoryRepository.save).toHaveBeenCalledWith(category);
  });

  it('should throw a CategoryAlreadyExist error', async () => {
    const category = CategoryMother.random();

    categoryRepository.findByName.mockResolvedValue(category);
    const response = () => creator.execute(category.id.value, category.name.value);

    await expect(async () => await response()).rejects.toThrow(CategoryAlreadyExists);
  });
});
