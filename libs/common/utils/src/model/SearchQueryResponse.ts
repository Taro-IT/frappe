export interface SearchQueryResponse<T = unknown> {
  readonly items: T[];
  readonly total: number
}
