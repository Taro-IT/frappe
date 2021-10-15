import {mock, MockProxy} from "jest-mock-extended";
import {ProductRepository} from "@frappe/product/domain";
import {ProductSearcher} from "./ProductSearcher";
import { Operator, OrderTypes } from "@dinnosc/criteria";
import { ProductMother } from "@frappe/product/test";

describe('ProductSearcher', () => {
  let repository: MockProxy<ProductRepository>;
  let service: ProductSearcher;

  beforeEach(() => {
    repository = mock<ProductRepository>();
    service = new ProductSearcher({ productRepository: repository });
  });

  it('should return an empty result', async () => {
    repository.search.mockResolvedValue([]);
    repository.total.mockResolvedValue(0);
    const run = async () => service.execute([],{by:"",type:OrderTypes.NONE});
    await expect(run()).resolves.toEqual({products: [], total: 0});
  });

  it('should return all products', async () => {
    const products = Array.from({length: 5}, () => ProductMother.random());
    repository.search.mockResolvedValue(products);
    repository.total.mockResolvedValue(products.length);
    const run = async () => service.execute([],{by:"",type:OrderTypes.NONE});
    await expect(run()).resolves.toEqual({products: products.map(product => product.toPrimitives()), total: products.length});
  });
  
  it('should return filtered products by name', async () => {
    const products = Array.from({length: 5}, () => ProductMother.random());
    repository.search.mockResolvedValue([products[0]]);
    repository.total.mockResolvedValue(1);
    const run = async () => service.execute([{field: "name", operator: "EQUAL", value: products[0].name.value }],{by:"",type:OrderTypes.NONE});
    await expect(run()).resolves.toEqual({products: [products[0].toPrimitives()] , total: 1});
  });

  it('should return filtered products by price', async () => {
    const products = Array.from({length: 5}, () => ProductMother.random());
    repository.search.mockResolvedValue([products[0]]);
    repository.total.mockResolvedValue(1);
    const run = async () => service.execute([{field: "price", operator: "EQUAL", value: products[0].price.value }],{by:"",type:OrderTypes.NONE});
    await expect(run()).resolves.toEqual({products: [products[0].toPrimitives()] , total: 1});
  });

  it('should return filtered products by id', async () => {
    const products = Array.from({length: 5}, () => ProductMother.random());
    repository.search.mockResolvedValue([products[0]]);
    repository.total.mockResolvedValue(1);
    const run = async () => service.execute([{field: "id", operator: "EQUAL", value: products[0].id.value }],{by:"",type:OrderTypes.NONE});
    await expect(run()).resolves.toEqual({products: [products[0].toPrimitives()] , total: 1});
  });
  
});
