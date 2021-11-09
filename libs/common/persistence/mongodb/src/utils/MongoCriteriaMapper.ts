import { Criteria, Operator } from '@dinnosc/criteria';

export class MongoCriteriaMapper {
  transformQuery<T>(criteria: Criteria<T>) {
    
    if (criteria.filters.value.length === 0) {
      return {};
    }

    const betweenCache: Record<string, boolean> = {};

    const auxBuiltQuery = criteria.filters.value.reduce((query, { field, operator, value }) => {
      //@ts-ignore
      const key = field  === 'id' ? '_id' : field ;
      const fieldValue: unknown = value ;

      //@ts-ignore
      switch (operator as Operator) {
        case Operator.EQUAL:
          query[key as string] = fieldValue;
          break;
        case Operator.NOT_EQUAL:
          query[key as string] = { $ne: fieldValue };
          break;
        case Operator.GT:
          // TODO refactor to remove const creation
          const auxGt = query[key as string] ?? {};

          query[key as string] = (betweenCache[key as string] !== undefined) ? 
          { ...auxGt, $gte: Number(fieldValue) } :
          { $gte: Number(fieldValue) };

          betweenCache[key as string] = true;
          break;
        case Operator.LT:
          // TODO refactor to remove const creation
          const auxLt = query[key as string] ?? {};

          query[key as string] = (betweenCache[key as string] !== undefined) ? 
          { ...auxLt, $lte: Number(fieldValue) } :
          { $lte: Number(fieldValue) };

          betweenCache[key as string] = true;
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

    console.log('builded query', auxBuiltQuery);
    
    return auxBuiltQuery
    
  }
}
