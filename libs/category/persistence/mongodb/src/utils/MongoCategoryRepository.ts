import { MongoRepository } from '@frappe/common/persistence/mongodb';
import { Category, CategoryId, CategoryName, CategoryPrimitives, CategoryRepository } from '@frappe/category/domain';
import { Nullable } from '@frappe/common/utils';
import { Criteria } from '@dinnosc/criteria';

export class MongoCategoryRepository extends MongoRepository implements CategoryRepository {
  protected moduleName(): string {
    return 'categories';
  }

  async save(category: Category): Promise<void> {
    return this.persist(category.id.value, category);
  }

  async find(id: CategoryId): Promise<Nullable<Category>> {
    const collection = await this.collection();
    const document = await collection.findOne({ _id: id.value });

    if (!document) {
      return null;
    }

    return Category.fromPrimitives({ ...document, id: document._id } as CategoryPrimitives);
  }

  async findByName(name: CategoryName): Promise<Nullable<Category>> {
    const collection = await this.collection();
    const document = await collection.findOne({ name: name.value });

    if (document === null) {
      return null;
    }

    return Category.fromPrimitives({ ...document, id: document._id } as CategoryPrimitives);
  }

  async all(): Promise<Category[] | null> {
    const collection = await this.collection();
    const documents = await collection.find().toArray();

    if (!documents) {
      return null;
    }

    return documents?.map(doc => Category.fromPrimitives({ ...doc, id: doc._id } as CategoryPrimitives)) || [];
  }

  async delete(id: CategoryId): Promise<Nullable<boolean>> {
    const collection = await this.collection();
    return (await collection.deleteOne({ _id: id.value })).acknowledged;
  }

  /**
   * Search database categorys that matches the provided criteria
   *
   * @param criteria Object that represents a Query
   */
   async search(criteria: Criteria<Category>): Promise<Category[]> {
    const categories = await this.searchByCriteria(criteria);

    return categories.map(category => Category.fromPrimitives({ ...category, id: category._id } as CategoryPrimitives));
  }
}
