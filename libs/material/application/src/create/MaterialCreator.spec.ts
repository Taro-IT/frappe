// User Story: Frappe 508
import { MaterialAlreadyExists, MaterialRepository } from '@frappe/material/domain';
import { MaterialCreator } from './MaterialCreator';
import { MaterialNameFinder } from '../find';
import { mock, MockProxy, DeepMockProxy, mockDeep } from 'jest-mock-extended';
import { MaterialMother } from '@frappe/material/test';

describe('MaterialCreator', () => {
  let materialRepository: MockProxy<MaterialRepository>;
  let materialNameFinder: DeepMockProxy<MaterialNameFinder>;

  let creator: MaterialCreator;

  beforeEach(() => {
    materialRepository = mock<MaterialRepository>();
    materialNameFinder = mockDeep<MaterialNameFinder>(new MaterialNameFinder({ materialRepository }));

    creator = new MaterialCreator({ materialRepository, materialNameFinder });
  });

  it('should create a new Material', async () => {
    const material = MaterialMother.random();

    materialRepository.findByName.mockRejectedValueOnce(MaterialAlreadyExists);
    await creator.execute(material.id.value, material.name.value, material.image.value);

    expect(materialRepository.save).toHaveBeenCalledWith(material);
  });

  it('should throw a MaterialAlreadyExist error', async () => {
    const material = MaterialMother.random();

    materialRepository.findByName.mockResolvedValue(material);
    const response = () => creator.execute(material.id.value, material.name.value, material.image.value);

    await expect(async () => response()).rejects.toThrow(MaterialAlreadyExists);
  });
});
