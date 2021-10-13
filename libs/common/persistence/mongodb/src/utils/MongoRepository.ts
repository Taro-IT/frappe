import { Collection, MongoClient } from 'mongodb';
import { MongoCriteriaMapper } from './MongoCriteriaMapper';
import { Criteria, OrderTypes } from '@dinnosc/criteria';

interface MongoRepositoryDependencies {
  readonly mongoClient: Promise<MongoClient>;
  readonly mongoCriteriaMapper: MongoCriteriaMapper;
}

export abstract class MongoRepository {
  protected readonly mongoClient: Promise<MongoClient>;
  protected readonly mongoCriteriaMapper: MongoCriteriaMapper;

  constructor({ mongoClient, mongoCriteriaMapper }: MongoRepositoryDependencies) {
    this.mongoClient = mongoClient;
    this.mongoCriteriaMapper = mongoCriteriaMapper;
  }

  protected abstract moduleName(): string;

  protected client(): Promise<MongoClient> {
    return this.mongoClient;
  }

  protected async collection(): Promise<Collection> {
    const client = await this.client();
    const db = client.db();

    return db.collection(this.moduleName());
  }

  protected async persist(id: string, entity): Promise<void> {
    const collection = await this.collection();

    const document = { ...entity.toPrimitives(), _id: id, id: undefined };

    await collection.updateOne({ _id: id }, { $set: document }, { upsert: true });
  }

  protected async searchByCriteria(criteria?: Criteria) {
    const collection = await this.collection();

    if (criteria === undefined) {
      return collection.find().toArray();
    }

    const query = this.mongoCriteriaMapper.transformQuery(criteria);
    const reference = collection.find(query);

    if (criteria.hasOrder()) {
      const { orderBy, orderType } = criteria.order;

      reference.sort({ [orderBy.value]: orderType.value === OrderTypes.ASC ? 1 : -1 });
    }

    if (criteria.limit !== undefined) {
      reference.limit(criteria.limit.value);
    }

    if (criteria.offset !== undefined) {
      reference.skip(criteria.offset.value);
    }

    return reference.toArray();
  }
}
