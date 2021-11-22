import { MaterialNotFound, MaterialName, MaterialRepository } from '@frappe/material/domain';

interface Props {
  readonly materialRepository: MaterialRepository;
}

export class MaterialNameFinder {
  private readonly materialRepository: MaterialRepository;

  constructor({ materialRepository }: Props) {
    this.materialRepository = materialRepository;
  }

  async execute(name: string) {
    const material = await this.materialRepository.findByName(new MaterialName(name));

    if (material === null) {
      throw new MaterialNotFound(name);
    }

    return material.toPrimitives();
  }
}
