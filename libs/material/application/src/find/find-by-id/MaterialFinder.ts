import { MaterialNotFound, MaterialRepository, MaterialId } from '@frappe/material/domain';

interface Props {
  readonly materialRepository: MaterialRepository;
}

export class MaterialFinder {
  private readonly materialRepository: MaterialRepository;

  constructor({ materialRepository }: Props) {
    this.materialRepository = materialRepository;
  }

  async execute(id: string) {
    const material = await this.materialRepository.find(new MaterialId(id));

    if (material === null) {
      throw new MaterialNotFound(id);
    }

    return material.toPrimitives();
  }
}
