import { UuidMother, StringMother, NumberMother} from "@frappe/common/test";
import { Product } from "@frappe/product/domain";
import { ProductId, ProductName, ProductPrice } from "@frappe/product/domain";

export class ProductMother {
    static random(): Product {
        return new Product(
            new ProductId(UuidMother.random()),
            new ProductName(StringMother.randomWord()),
            new ProductPrice(NumberMother.random())
            )  
    }
}