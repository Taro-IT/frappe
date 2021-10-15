import {mock, MockProxy} from "jest-mock-extended";
import {ProductRepository} from "@frappe/product/domain";
import {ProductSearcher} from "./ProductSearcher";

describe('ProductSearcher', () => {
  let repository: MockProxy<ProductRepository>;
  let service: ProductSearcher;

  beforeEach(() => {
    repository = mock();
    service = new ProductSearcher({ productRepository: repository });
  });

  it('should return an empty result', () => {

  });
});
