import { QueryHandler } from '@tshio/query-bus';
import { FindMaterialNameQuery } from './FindMaterialNameQuery';
import { MaterialNameFinder } from './MaterialNameFinder';
import { MaterialPrimitives } from '@frappe/material/domain';

type Props = {
  readonly materialNameFinder: MaterialNameFinder;
};

interface FindMaterialQueryHandlerResult {
  readonly result: MaterialPrimitives;
}

export class FindMaterialNameQueryHandler
  implements QueryHandler<FindMaterialNameQuery, FindMaterialQueryHandlerResult>
{
  private readonly MaterialNameFinder: MaterialNameFinder;

  readonly queryType = FindMaterialNameQuery.name;

  constructor({ materialNameFinder }: Props) {
    this.MaterialNameFinder = materialNameFinder;
  }

  async execute(Query: FindMaterialNameQuery) {
    const { name } = Query.payload;

    const result = await this.MaterialNameFinder.execute(name);
    return { result };
  }
}
