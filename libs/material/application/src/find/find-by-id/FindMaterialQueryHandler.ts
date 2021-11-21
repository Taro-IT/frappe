import { QueryHandler } from '@tshio/query-bus';
import { FindMaterialQuery } from './FindMaterialQuery';
import { MaterialFinder } from './MaterialFinder';
import { MaterialPrimitives } from '@frappe/material/domain';

type Props = {
  readonly materialNameFinder: MaterialFinder;
};

interface FindMaterialQueryHandlerResult {
  readonly result: MaterialPrimitives;
}

export class FindMaterialQueryHandler implements QueryHandler<FindMaterialQuery, FindMaterialQueryHandlerResult> {
  private readonly MaterialNameFinder: MaterialFinder;

  readonly queryType = FindMaterialQuery.name;

  constructor({ materialNameFinder }: Props) {
    this.MaterialNameFinder = materialNameFinder;
  }

  async execute(Query: FindMaterialQuery) {
    const { id } = Query.payload;

    const result = await this.MaterialNameFinder.execute(id);
    return { result };
  }
}
