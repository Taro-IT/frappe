import { ProductPrimitives } from '@frappe/product/domain';
import { Button, Card } from '@frappe/common/design-system';
import { useRouter } from 'next/router';


type ProductCardProps = Pick<ProductPrimitives, 'id' | 'name' | 'price' | 'images'>

export const BackofficeProductCard = ({ id, name, price, images }: ProductCardProps) => {
  const router = useRouter();
  
  const handleClickEdit = () => {
    router.push(`/productEdit/${id}`);
  }
  const handleClickDelete = () => {
    const delMessage = `¿Realmente deseas eliminar el producto ${name} con ID ${id}? Esta acción no se podrá desacer. Esta acción no afectara pedidos existentes.`;

    const confirmDelete = confirm(delMessage);

    if (!confirmDelete) {
      alert("Se ha cancelado la operación. EL producto NO se eliminará.");
      return;
    }

    alert(`Eliminando el producto ${name} con ID ${id}.`)
  }


  return (
    <Card className="h-auto ">
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
            <Button type={'button'} title={'Editar'} variant={'cta'} onClick={handleClickEdit} />
            <Button type={'button'} title={'Borrar'} variant={'red'} onClick={handleClickDelete}/>
          </div>
        </div>
    </Card>
  )
}
