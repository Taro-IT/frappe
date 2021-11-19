import { Criteria, Order } from '@dinnosc/criteria';
import { Nullable } from '@frappe/common/utils';
import { MaterialNotFound, MaterialRepository, Material, MaterialPrimitives } from '@frappe/material/domain';

interface Props {
  readonly materialRepository: MaterialRepository;
}

export class MaterialNameFinder {
  private readonly materialRepository: MaterialRepository;

  constructor({ materialRepository }: Props) {
    this.materialRepository = materialRepository;
  }

  private async findMaterialByName (name: string): Promise<Nullable<Material>> {
    const filters = [
      { field : "isActive", operator: "EQUAL", value: true },
      { field: "name", operator: "EQUAL", value: name }
    ]
    const criteria = new Criteria<Material>(
      /* eslint-disable @typescript-eslint/ban-types */
      // @ts-ignore
      { value: filters },
      Order.fromValue("", "ASC"),
    );
    
    const materials = await this.materialRepository.search(criteria);

    return materials.length !== 0 ? materials[0] : null;
  }

  async execute(name: string): Promise<MaterialPrimitives> {
    const material = await this.findMaterialByName(name);

    if (material === null) {
      throw new MaterialNotFound(name);
    }

    return material.toPrimitives();
  }
}