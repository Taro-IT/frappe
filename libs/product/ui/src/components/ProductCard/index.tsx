import { ProductPrimitives } from '@frappe/product/domain';
import { Card } from '@frappe/common/design-system';


type ProductCardProps = Pick<ProductPrimitives, 'id' | 'name' | 'price' | 'priceInSale' | 'images' >

export const ProductCard = ({ id, name, price, priceInSale, images } : ProductCardProps) => {
  const productLink = "/product/" + id
console.log('Product Name: ' + name + 'Price In Sale' + priceInSale)
  return (
    <a href={productLink}>
      <Card className="h-full">
        <div className="p-3 h-full flex flex-col justify-between">
            <div className="flex h-full items-center mb-3">{(images && images[0]) ? <img src={images[0]} />:
              <img src="/img/notFound.jpg"/>}
            </div>
          <div className="flex justify-between">
            <p className="font-bold text-sm">
              {name}
            </p>
              {priceInSale ? <div> <p className="font-semibold text-sm line-through">  ${price}</p> <p className="font-semibold text-sm">  ${priceInSale}  </p> </div>: <p className="font-semibold text-sm"> ${price} </p>}
          </div>
        </div>
    </Card>
    </a>
  )
}
