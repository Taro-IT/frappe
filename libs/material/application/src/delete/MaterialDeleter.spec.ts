/* User Story: Frappe 68 */

import { MaterialRepository, MaterialNotFound } from '@frappe/material/domain';
import { MaterialDeleter } from './MaterialDeleter';
import { MaterialFinder } from '../find';
import { mock, MockProxy, DeepMockProxy, mockDeep } from 'jest-mock-extended';
import { MaterialMother } from '@frappe/material/test';

describe('MaterialDeleter', () => {
  let materialRepository: MockProxy<MaterialRepository>;
  let materialFinder: DeepMockProxy<MaterialFinder>;

  let deleter: MaterialDeleter;

  beforeEach(() => {
    materialRepository = mock<MaterialRepository>();
    materialFinder = mockDeep<MaterialFinder>(new MaterialFinder({ materialRepository }));

    deleter = new MaterialDeleter({ materialRepository, materialFinder });
  });

  it('should delete a Material', async () => {
    const material = MaterialMother.deleted();
    materialRepository.find.mockResolvedValueOnce(material);
    await deleter.execute(material.id.value);

    expect(materialRepository.save).toHaveBeenCalledWith(material);
  });

  it('should throw a MaterialNotFound', async () => {
    const material = MaterialMother.random();

    materialRepository.find.mockRejectedValueOnce(MaterialNotFound);
    const response = () => deleter.execute(material.id.value);

    await expect(async () => response()).rejects.toThrow(MaterialNotFound);
  });
});
