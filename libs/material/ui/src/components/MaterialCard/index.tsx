import {Material} from '../MaterialList'
import { Card, Button } from '@frappe/common/design-system';



type MaterialCardProps = {
  id: string, 
  name: string, 
  image: string,
  setEditModal: (nv:boolean) => any,
  setCurrentMaterial: (nv: any) => any,
  setNameErrors: (nv:boolean) => any,

}

export const MaterialCard = ({ id, name, image, setEditModal, setCurrentMaterial, setNameErrors }: MaterialCardProps) => {

  const EditButton = ({ id, name, image }: Material) => {
    const edit = () => {
      setEditModal(true);
      setCurrentMaterial({ id, name, image });
      setNameErrors(false);
    };
    return <Button title="Editar" className=" mt-4 w-24" variant="cta" onClick={edit} />;
  };

  return (
    <>
      <Card key={id} className="h-auto ">
          <div className="p-3 h-full flex flex-col justify-between">
              <div className="flex h-full items-center mb-3">{image ? <img src={image} />:
                <img src="/img/notFound.jpg"/>}
              </div>
            <div className="flex justify-between">
              <p className="font-bold text-lg">
                {name}
              </p>
            </div>
            {/* TODO: remove button is this is on ecommerce site */}
            <EditButton id={id} name={name} image={image} />
          </div>
      </Card>
      
    </>
  )
}
