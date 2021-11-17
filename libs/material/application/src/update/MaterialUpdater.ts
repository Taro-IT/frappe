// User Story: Frappe 67

import {
  MaterialRepository,
  MaterialIdNotFound,
  MaterialPrimitives,
  Material,
  MaterialAlreadyExists
} from '@frappe/material/domain';
import { MaterialFinder, MaterialNameFinder } from '../find';

interface Props {
  readonly materialRepository: MaterialRepository;
  readonly materialFinder: MaterialFinder;
  readonly materialNameFinder: MaterialNameFinder;
}

export class MaterialUpdater {
  private readonly materialRepository: MaterialRepository;
  private readonly materialFinder: MaterialFinder;
  private readonly materialNameFinder: MaterialNameFinder;

  constructor({ materialRepository, materialFinder, materialNameFinder }: Props) {
    this.materialRepository = materialRepository;
    this.materialFinder = materialFinder;
    this.materialNameFinder = materialNameFinder;
  }

  async execute(id: string, name?: string, image?: string) {
    const material = await this.materialExists(id);
    
    if (material === null) {
      throw new MaterialIdNotFound(id);
    }

    const nameExists = await this.nameExists(name);

    if (nameExists === null) {
      throw new MaterialAlreadyExists(name);
    }

    const updatedMaterial: MaterialPrimitives = { 
      ...material, 
      name: name ? name : material.name,
      image: image ? image : material.image 
    };

    return this.materialRepository.save(Material.fromPrimitives(updatedMaterial));
  }

  private async nameExists(name: string) {
    try {
      await this.materialNameFinder.execute(name);
      return null;
    } catch (error) {
      return error;
    }
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
