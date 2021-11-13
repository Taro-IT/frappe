import { Material, MaterialAlreadyExists, MaterialId, MaterialName, MaterialImage, MaterialRepository } from '@frappe/material/domain';
import { MaterialNameFinder } from '../find';

interface Props {
  readonly materialRepository: MaterialRepository;
  readonly materialNameFinder: MaterialNameFinder;
}

export class MaterialCreator {
  private readonly materialNameFinder: MaterialNameFinder;
  private readonly materialRepository: MaterialRepository;

  constructor({ materialRepository, materialNameFinder }: Props) {
    this.materialRepository = materialRepository;
    this.materialNameFinder = materialNameFinder;
  }

  async execute(id: string, name: string, image: string) {
    const exists = await this.materialExists(name);

    if (exists === null) {
      throw new MaterialAlreadyExists(name);
    }

    const material = new Material(new MaterialId(id), new MaterialName(name), new MaterialImage(image));

    return this.materialRepository.save(material);
  }

  private async materialExists(name: string) {
    try {
      await this.materialNameFinder.execute(name);
      return null;
    } catch (error) {
      return error;
    }
  }
}
