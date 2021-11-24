/* User Story: Frappe 501 */

import { Query } from '@tshio/query-bus';

export class ListMaterialQuery implements Query<Record<string, never>> {
  readonly type = ListMaterialQuery.name;

  constructor(readonly payload: Record<string, never>) {}
}
