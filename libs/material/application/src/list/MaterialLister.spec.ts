import { Material, MaterialRepository } from '@frappe/material/domain';
import { MaterialLister } from './MaterialLister';
import { mock, MockProxy } from 'jest-mock-extended';
import { MaterialMother } from '@frappe/material/test';

describe('MaterialLister', () => {
  let materialRepository: MockProxy<MaterialRepository>;

  let lister: MaterialLister;

  beforeEach(() => {
    materialRepository = mock<MaterialRepository>();

    lister = new MaterialLister({ materialRepository });
  });

  it('should list all categories', async () => {
    const categories = new Array<Material>(5).fill(MaterialMother.random());

    materialRepository.all.mockResolvedValueOnce(categories);
    await lister.execute();
    expect(materialRepository.all).toReturn();
  });

  it('should return an empty object', async () => {
    const categories: Material[] = [];
    materialRepository.all.mockResolvedValueOnce(categories);
    await lister.execute();
    expect(materialRepository.all).toReturn();
  });
});
