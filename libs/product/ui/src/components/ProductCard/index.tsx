import { ProductPrimitives } from '@frappe/product/domain';
import { Card } from '@frappe/common/design-system';
import { useRouter } from 'next/router';


type ProductCardProps = Pick<ProductPrimitives, 'id' | 'name' | 'price' | 'images'>

export const ProductCard = ({ id, name, price, images }: ProductCardProps) => {
  const router = useRouter();
  
  const handleClick = () => {
    router.push(`/products/${id}`);
  }

  return (
    <Card className="h-auto " onClick={handleClick}>
        <div className="p-3 h-full flex flex-col justify-between">
            <div className="flex h-full items-center mb-3">{(images && images[0]) ? <img src={images[0]} />:
              <img src="/img/notFound.jpg"/>}
            </div>
          <div className="flex justify-between">
            <p className="font-bold text-sm">
              {name}
            </p>
            <p className="font-semibold text-sm">
              ${price}
            </p>
          </div>
        </div>
    </Card>
  )
}
