import { Criteria, Operator } from '@dinnosc/criteria';

export class MongoCriteriaMapper {
  transformQuery<T>(criteria: Criteria<T>) {
    if (criteria.hasFilters()) {
      return {};
    }

    return criteria.filters.value().reduce((query, { field, operator, value }) => {
      const key = field.value === 'id' ? '_id' : field.value;
      const fieldValue = value.value;

      switch (operator.value) {
        case Operator.EQUAL:
          query[key as string] = fieldValue;
          break;
        case Operator.NOT_EQUAL:
          query[key as string] = { $ne: fieldValue };
          break;
        case Operator.GT:
          query[key as string] = { $gt: fieldValue };
          break;
        case Operator.LT:
          query[key as string] = { $lt: fieldValue };
          break;
        case Operator.CONTAINS:
          query[key as string] = { $regex: new RegExp(fieldValue as string, 'ig') };
          break;
        case Operator.NOT_CONTAINS:
          query[key as string] = { $not: { $regex: new RegExp(fieldValue as string, 'ig') } };
          break;
      }

      return query;
    }, {});
  }
}
