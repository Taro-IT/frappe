import { MongoRepository } from '@frappe/common/persistence/mongodb';
import { Material, MaterialId, MaterialName, MaterialPrimitives, MaterialRepository } from '@frappe/material/domain';
import { Nullable } from '@frappe/common/utils';

export class MongoMaterialRepository extends MongoRepository implements MaterialRepository {

  protected moduleName(): string {
    return 'materials';
  }

  /**
   * Saves a new Material @see {@link Material}
   * @param material - The material object that want to saved
   *
   * @returns a new Material
   */
  async save(material: Material): Promise<void> {
    return this.persist(material.id.value, material);
  }

  /**
   * Finds a material by name @see {@link Material}
   * @param name - The name of the material that will be searched.
   *
   * @returns the Material with the given name.
  */
  async findByName(name: MaterialName): Promise<Nullable<Material>> {
    const collection = await this.collection();
    const document = await collection.findOne({ name: name.value });


    if (document === null) {
      return null;
    }

    return Material.fromPrimitives({ ...document, id: document._id } as MaterialPrimitives);
  }
}