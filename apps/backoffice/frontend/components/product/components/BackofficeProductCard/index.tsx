import { Button, Card } from '@frappe/common/design-system';
import { useRouter } from 'next/router';
import { Dispatch, SetStateAction } from 'react';


// type ProductCardProps = Pick<ProductPrimitives, 'id' | 'name' | 'price' | 'images'>


export type ProductCardData = {
  id: string,
  name: string
}

type ProductCardProps = {
  id: string,
  name: string,
  price: number,
  images: string[],
  setDeleteModal: Dispatch<SetStateAction<boolean>>,
  setCurrentProd: Dispatch<SetStateAction<ProductCardData>>,
}

export const BackofficeProductCard = ({ id, name, price, images, setDeleteModal, setCurrentProd}: ProductCardProps) => {
  const router = useRouter();
  
  const handleClickEdit = () => {
    router.push(`/productEdit/${id}`);
  }

  const handleClickDelete = () => {
    setDeleteModal(true);
    setCurrentProd({id: id, name: name})
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
