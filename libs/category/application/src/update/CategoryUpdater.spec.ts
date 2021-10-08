import {CategoryAlreadyExists, CategoryRepository, CategoryIdNotFound} from "@frappe/category/domain";
import {CategoryUpdater} from "./CategoryUpdater";
import {CategoryNameFinder} from '../find/find-by-name/CategoryNameFinder'
import {CategoryFinder} from '../find/find-by-id'
import { mock, MockProxy, DeepMockProxy, mockDeep } from 'jest-mock-extended'
import {CategoryMother} from "@frappe/category/test";


describe('CategoryUpdater', () => {
  let categoryRepository: MockProxy<CategoryRepository>;
  let categoryNameFinder: DeepMockProxy<CategoryNameFinder>;
  let categoryFinder: DeepMockProxy<CategoryFinder>;

  let updater: CategoryUpdater;

  beforeEach(() => {
    categoryRepository = mock<CategoryRepository>();
    categoryNameFinder = mockDeep<CategoryNameFinder>(new CategoryNameFinder({ categoryRepository }));
    categoryFinder = mockDeep<CategoryFinder>(new CategoryFinder({ categoryRepository }));


    updater = new CategoryUpdater({ categoryRepository, categoryNameFinder, categoryFinder });
  })

  it('should update an existent Category', async () => {
    const category = CategoryMother.random();

    categoryRepository.find.mockResolvedValueOnce(category);
    categoryRepository.findByName.mockRejectedValueOnce(CategoryAlreadyExists);
    await updater.execute(category.id.value, category.name.value);

    expect(categoryRepository.save).toHaveBeenCalledWith(category);
  });

  it('should throw a CategoryAlreadyExist error', async () => {
    const category = CategoryMother.random();

    categoryRepository.find.mockResolvedValueOnce(category);
    categoryRepository.findByName.mockResolvedValueOnce(category);

    const response = () => updater.execute(category.id.value, category.name.value);

    await expect(async () => response()).rejects.toThrow(CategoryAlreadyExists);
  });

  it('should throw a CategoryIdNotFound error' , async () => {
    const category = CategoryMother.random();
    console.log(category.id.value);

    categoryRepository.find.mockRejectedValueOnce(CategoryIdNotFound);
    categoryRepository.findByName.mockRejectedValueOnce(CategoryAlreadyExists);

    const response = () => updater.execute(category.id.value, category.name.value)

    await expect(async () => response()).rejects.toThrow(CategoryIdNotFound);

  });
});
