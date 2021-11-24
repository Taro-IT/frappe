import { CategoryRepository, CategoryNotFound } from '@frappe/category/domain';
import { CategoryDeleter } from './CategoryDeleter';
import { CategoryFinder } from '../find';
import { mock, MockProxy, DeepMockProxy, mockDeep } from 'jest-mock-extended';
import { CategoryMother } from '@frappe/category/test';

describe('CategoryDeleter', () => {
  let categoryRepository: MockProxy<CategoryRepository>;
  let categoryFinder: DeepMockProxy<CategoryFinder>;

  let deleter: CategoryDeleter;

  beforeEach(() => {
    categoryRepository = mock<CategoryRepository>();
    categoryFinder = mockDeep<CategoryFinder>(new CategoryFinder({ categoryRepository }));

    deleter = new CategoryDeleter({ categoryRepository, categoryFinder });
  });

  it('should delete a Category', async () => {
    const category = CategoryMother.withDeletedDate(new Date);
    categoryRepository.find.mockResolvedValueOnce(category);
    await deleter.execute(category.id.value, category.deletedAt?.value);

    expect(categoryRepository.save).toHaveBeenCalledWith(category);
  });

  it('should throw a CategoryNotFound', async () => {
    const category = CategoryMother.random();

    categoryRepository.find.mockRejectedValueOnce(CategoryNotFound);
    const response = () => deleter.execute(category.id.value);

    await expect(async () => response()).rejects.toThrow(CategoryNotFound);
  });
});
