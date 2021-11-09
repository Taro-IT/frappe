import { Criteria, Operator } from '@dinnosc/criteria';

export class MongoCriteriaMapper {
  transformQuery<T>(criteria: Criteria<T>) {
    
    if (criteria.filters.value.length === 0) {
      return {};
    }

    return criteria.filters.value.reduce((query, { field, operator, value }) => {
      const key = field  === 'id' ? '_id' : field ;
      const fieldValue = value ;
      //@ts-ignore
      switch (operator as Operator) {
        case Operator.EQUAL:
          query[key as string] = fieldValue;
          break;
        case Operator.NOT_EQUAL:
          query[key as string] = { $ne: fieldValue };
          break;
        case Operator.GT:
          query[key as string] = { $gt: Number(fieldValue) };
          break;
        case Operator.LT:
          query[key as string] = { $lt: Number(fieldValue) };
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
