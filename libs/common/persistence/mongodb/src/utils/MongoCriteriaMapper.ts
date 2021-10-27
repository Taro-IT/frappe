import { Criteria, Operator } from '@dinnosc/criteria';

export class MongoCriteriaMapper {
  transformQuery(criteria: Criteria) {
    if (criteria.hasFilters()) {
      return {};
    }

    return criteria.filters.value().reduce((query, { field, operator, value }) => {
      const key = field.value === 'id' ? '_id' : field.value;
      const fieldValue = value.value;

      switch (operator.value) {
        case Operator.EQUAL:
          query[key] = fieldValue;
          break;
        case Operator.NOT_EQUAL:
          query[key] = { $ne: fieldValue };
          break;
        case Operator.GT:
          query[key] = { $gt: fieldValue };
          break;
        case Operator.LT:
          query[key] = { $lt: fieldValue };
          break;
        case Operator.CONTAINS:
          query[key] = { $regex: new RegExp(fieldValue, 'ig') };
          break;
        case Operator.NOT_CONTAINS:
          query[key] = { $not: { $regex: new RegExp(fieldValue, 'ig') } };
          break;
      }

      return query;
    }, {});
  }
}
