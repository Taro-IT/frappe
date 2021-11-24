import { ProductPrimitives } from '@frappe/product/domain';
import { Button, Card } from '@frappe/common/design-system';
import { useRouter } from 'next/router';


type ProductCardProps = Pick<ProductPrimitives, 'id' | 'name' | 'price' | 'images'>

export const BackofficeProductCard = ({ id, name, price, images }: ProductCardProps) => {
  const router = useRouter();
  
  const handleClickDelete = () => {
    // no sé qué poner acá ¿Cómo hago un popup?
  }


  return (
    <Card className="h-auto ">
        <div className="p-3 h-full flex flex-col justify-between">
            <div className="items-center mb-3">{(images && images[0]) ? <img className="" src={images[0]} />:
              <img src="/img/notFound.jpg"/>}
            </div>
          <div className="flex flex-col justify-between">
            <div>
            <p className="font-bold text-sm">
              Nombre: {name}
            </p>
            <p className="font-semibold text-sm">
              Precio: ${price}
            </p>
            </div>
            <div className="flex flex-row justify-between ">
            <a href={`/productEdit/${id}`}>
            <Button type={'button'} title={'Editar'} variant={'cta'} />
            </a>
            <Button type={'button'} title={'Borrar'} variant={'red'} onClick={handleClickDelete}/>
            </div>
          </div>
        </div>
    </Card>
  )
}
