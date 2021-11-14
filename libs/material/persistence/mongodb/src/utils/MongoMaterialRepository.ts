import { MongoRepository } from '@frappe/common/persistence/mongodb';
import { Material, MaterialId, MaterialName, MaterialPrimitives, MaterialRepository } from '@frappe/material/domain';
import { Nullable } from '@frappe/common/utils';

export class MongoMaterialRepository extends MongoRepository implements MaterialRepository {

  protected moduleName(): string {
    return 'materials';
  }

  // User Story: Frappe 508
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

  /**
   * Finds a material by id @see {@link Material}
   * @param id - The id of the material that will be searched.
   *
   * @returns the Material with the given id.
  */
  async find(id: MaterialId): Promise<Nullable<Material>> {
    const collection = await this.collection();
    const document = await collection.findOne({ _id: id.value });

    if (!document) {
      return null;
    }

    return Material.fromPrimitives({ ...document, id: document._id } as MaterialPrimitives);
  }

  /**
   * Gets all materials @see {@link Material}
   *
   * @returns an array with all existing materials
  */
  async all(): Promise<Material[] | null> {
    const collection = await this.collection();
    const documents = await collection.find().toArray();

    if (!documents) {
      return null;
    }

    return documents?.map(doc => Material.fromPrimitives({ ...doc, id: doc._id } as MaterialPrimitives)) || [];
  }
}