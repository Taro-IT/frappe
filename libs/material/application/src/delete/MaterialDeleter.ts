import {
  Material,
  MaterialNotFound,
  MaterialRepository,
  MaterialPrimitives
} from '@frappe/material/domain';
import { MaterialFinder } from '../find';

interface Props {
  readonly materialRepository: MaterialRepository;
  readonly materialFinder: MaterialFinder;
}

export class MaterialDeleter {
  private readonly materialFinder: MaterialFinder;
  private readonly materialRepository: MaterialRepository;

  constructor({ materialRepository, materialFinder }: Props) {
    this.materialRepository = materialRepository;
    this.materialFinder = materialFinder;
  }

  async execute(id: string) {

    const material = await this.materialExists(id);

    if (material === null) {
      throw new MaterialNotFound(id);
    }

    const isActive = false;
    const deletedAt = new Date();
    const updatedMaterial: MaterialPrimitives = { ...material, isActive, deletedAt };

    return this.materialRepository.save(Material.fromPrimitives(updatedMaterial));
  }

  private async materialExists(id: string) {
    try {
      const material = await this.materialFinder.execute(id);
      return material as MaterialPrimitives;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}
