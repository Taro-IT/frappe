// User Story: Frappe 67

import { MaterialAlreadyExists, MaterialRepository, MaterialIdNotFound } from '@frappe/material/domain';
import { MaterialUpdater } from './MaterialUpdater';
import { MaterialNameFinder } from '../find/find-by-name';
import { MaterialFinder } from '../find/find-by-id';
import { mock, MockProxy, DeepMockProxy, mockDeep } from 'jest-mock-extended';
import { MaterialMother } from '@frappe/material/test';

describe('MaterialUpdater', () => {
  let materialRepository: MockProxy<MaterialRepository>;
  let materialNameFinder: DeepMockProxy<MaterialNameFinder>;
  let materialFinder: DeepMockProxy<MaterialFinder>;

  let updater: MaterialUpdater;

  beforeEach(() => {
    materialRepository = mock<MaterialRepository>();
    materialNameFinder = mockDeep<MaterialNameFinder>(new MaterialNameFinder({ materialRepository }));
    materialFinder = mockDeep<MaterialFinder>(new MaterialFinder({ materialRepository }));

    updater = new MaterialUpdater({ materialRepository, materialNameFinder, materialFinder });
  });

  it('should update an existent Material', async () => {
    const material = MaterialMother.random();

    materialRepository.find.mockResolvedValueOnce(material);
    materialRepository.search.mockRejectedValueOnce(MaterialAlreadyExists);
    await updater.execute(material.id.value, material.name.value, material.image.value);

    expect(materialRepository.save).toHaveBeenCalledWith(material);
  });

  it('should throw a MaterialAlreadyExist error', async () => {
    const material = MaterialMother.random();

    materialRepository.find.mockResolvedValueOnce(material);
    materialRepository.search.mockResolvedValueOnce([material]);

    const response = () => updater.execute(material.id.value, material.name.value, material.image.value);

    await expect(async () => response()).rejects.toThrow(MaterialAlreadyExists);
  });

  it('should throw a MaterialIdNotFound error', async () => {
    const material = MaterialMother.random();

    materialRepository.find.mockRejectedValueOnce(MaterialIdNotFound);
    materialRepository.findByName.mockRejectedValueOnce(MaterialAlreadyExists);

    const response = () => updater.execute(material.id.value, material.name.value, material.image.value);

    await expect(async () => response()).rejects.toThrow(MaterialIdNotFound);
  });
});
