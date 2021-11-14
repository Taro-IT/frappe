import { MaterialRepository } from '@frappe/material/domain';

interface Props {
  readonly materialRepository: MaterialRepository;
}

export class MaterialLister {
  private readonly materialRepository: MaterialRepository;

  constructor({ materialRepository }: Props) {
    this.materialRepository = materialRepository;
  }

  async execute() {
    const categories = await this.materialRepository.all();

    return categories.map(cat => cat.toPrimitives());
  }
}
