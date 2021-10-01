import {MongoRepository} from "@frappe/common/persistence/mongodb";
import {Category, CategoryId, CategoryName, CategoryPrimitives, CategoryRepository} from "@frappe/category/domain";

export class MongoCategoryRepository extends MongoRepository implements CategoryRepository {

  protected moduleName(): string {
    return 'categories';
  }

  async save(category: Category): Promise<void> {
    return this.persist(category.id.value, category);
  }

  async find(id: CategoryId): Promise<Category | null> {
    const collection = await this.collection();
    const document = await collection.findOne({ _id: id.value });

    if (!document) {
      return null;
    }

    return Category.fromPrimitives({ ...document, id: document._id } as CategoryPrimitives);
  }

  async findByName(name: CategoryName): Promise<Category | null> {
    const collection = await this.collection();
    const document = await collection.findOne({name: name.value})
    
    if (document === null) {
      return null
    }
    
    return Category.fromPrimitives({ ...document, id: document._id } as CategoryPrimitives);
  }
  
}
