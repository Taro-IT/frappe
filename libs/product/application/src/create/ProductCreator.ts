import { Product, ProductId, ProductName, ProductPrice, ProductAmount, ProductCategories, ProductDescription, ProductImages, ProductIsCustom, ProductIsInSale, ProductIsLimited, ProductIsOutOfStock,ProductMaterials, ProductSizes,ProductRepository } from '@frappe/product/domain';

interface Props {
  readonly productRepository: ProductRepository;
}

export class ProductCreator {
  private readonly productRepository: ProductRepository;

  constructor({ productRepository }: Props) {
    this.productRepository = productRepository;
  }

  async execute(id: string, name: string, price:number, categories: string[], description:string, images: string[], isCustom: boolean, isInSale: boolean, isLimited: boolean, isOutOfStock: boolean, materials: string[], sizes: number[], amount:number,  ) {
   
    // TODO: use search to validate that product doesn't exists

    const product = new Product(
      new ProductId(id),
      new ProductName(name),
      new ProductPrice(price),
      new ProductCategories(categories),
      new ProductDescription(description),
      new ProductImages(images),
      new ProductIsCustom(isCustom),
      new ProductIsInSale(isInSale),
      new ProductIsLimited(isLimited),
      new ProductIsOutOfStock(isOutOfStock),
      new ProductMaterials(materials),
      new ProductSizes(sizes),
      new ProductAmount(amount),
        );
    return this.productRepository.save(product);
  }

 
}
