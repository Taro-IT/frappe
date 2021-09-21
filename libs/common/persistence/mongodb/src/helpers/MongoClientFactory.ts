import { MongoClient } from "mongodb";

interface MongoClientDependencies {
  readonly mongoUrl: string;
}

export const MongoClientFactory = ({ mongoUrl }: MongoClientDependencies): Promise<MongoClient> => {
  const client = new MongoClient(mongoUrl, { ignoreUndefined: true });

  return client.connect();
}
