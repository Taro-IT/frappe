import { QueryHandler } from '@tshio/query-bus';
import { ListMaterialQuery } from './ListMaterialQuery';
import { MaterialLister } from './MaterialLister';
import { MaterialPrimitives } from '@frappe/material/domain';

type Props = {
  readonly materialLister: MaterialLister;
};

export interface ListMaterialQueryHandlerResult {
  readonly result: MaterialPrimitives[];
}

export class ListMaterialQueryHandler implements QueryHandler<ListMaterialQuery, ListMaterialQueryHandlerResult> {
  private readonly MaterialLister: MaterialLister;

  readonly queryType = ListMaterialQuery.name;

  constructor({ materialLister }: Props) {
    this.MaterialLister = materialLister;
  }

  async execute() {
    const result = await this.MaterialLister.execute();
    return { result };
  }
}
