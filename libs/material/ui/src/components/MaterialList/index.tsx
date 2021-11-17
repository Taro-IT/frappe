import { MaterialPrimitives } from '@frappe/material/domain';
import { MaterialCard } from '../MaterialCard';
import {EmojiSadIcon, BadgeCheckIcon, ExclamationIcon} from '@heroicons/react/solid'
import {Button, Modal, SpanError, FileInput } from '@frappe/common/design-system';
import React, { useMemo, useState } from 'react';
import axios from 'axios';



interface MaterialListContentProps {
    readonly materials: MaterialPrimitives[];
    readonly ecommerce: boolean
  }
  
export interface Material {
  readonly id: string,
  readonly name?:string,
  readonly image?:string
}

  export const MaterialList = ({ materials, ecommerce }: MaterialListContentProps) => {
    const [displayEditModal, setEditModal] = useState<boolean>(false)
    const [displayDeleteModal, setDeleteModal] = useState<boolean>(false)
    const [nameErrors, setNameErrors] = useState<boolean>()
    const [currentMaterial, setCurrentMaterial] = useState<Material>()
    const [message, setMessage] = useState<string>()
    const [success, setSuccess] = useState<boolean>()
    const [newName, setNewName] = useState<string>("")
    const [displayResultModal, setDisplayResultModal] = useState<boolean>(false)
    const [file, setFile] = useState<File>()
    
    {/* // User Story: Frappe 67 */}
    const updateMaterial = async (id: string, name: string, image: string) => {
      if (name === currentMaterial.name || (!file && name === "")) {
        setNameErrors(true);
        return;
      }
      try {
        let fileURL = ""
        if (file) {
          // Post de imágenes
          const bodyFormData = new FormData();
          bodyFormData.append('file', file);
          console.table(bodyFormData.getAll('file'));
          const { data: { name } } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/file-system/`, bodyFormData);
          fileURL = name
        }

        const payload = {
          name: newName ? newName : null,
          image: fileURL !== "" ? fileURL : null
        }
        await axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/materials/${id}`, payload);
        setDisplayResultModal(true)
        setMessage('El material se editó correctamente.');
        setSuccess(true);
      } catch (error) {
        console.error('El material ya existe.', error);
        setDisplayResultModal(true)
        setMessage('Hubo un error, revisa que no exista un material con el mismo nombre.');
        setSuccess(false);
      }
      setEditModal(false);
      setNameErrors(false);
      return;
    };


  
    {/* // User Story: Frappe 68 */}
    const ConfirmDeleteMaterial = ({ id }: Material) => {
      const confirmDelete = async () => {
        try {
          await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/materials/${id}`);
          setMessage('Material borrado con éxito.');
          setSuccess(true);
        } catch (error) {
          console.error('El material no se pudo borar', error);
          setMessage('Hubo un error, el material no se pudo borar.');
          setSuccess(false);
        }
        setDeleteModal(false);
        setDisplayResultModal(true);
        return;
      };
      return <Button title="Eliminar" onClick={confirmDelete} variant="cta" className={'mt-4'} />;
    };

    const SaveChangesButton = props => {
      const saveChanges = () => {
        updateMaterial(props.id, props.name, props.image);
      };
      return <Button title="Guardar cambios" onClick={saveChanges} variant="cta" className={'mt-4'} />;
    };
  
    const handleNameChange = event => {
      setNewName(event.target.value);
    };

    const activeMaterials = useMemo(()=>(materials.filter(material=> material.isActive===true).length), [materials])
    return (
      <>
      
      {materials.length === 0 || activeMaterials === 0 &&
        <div className="flex flex-col space-y-4 justify-items-center w-full h-full mt-24">
          <EmojiSadIcon className="text-center h-24 text-gray-400"/>
            <p className="text-gray-400 text-center align-middle">Ups, no encontramos ningún material.</p>
            <p className="text-gray-400 text-center align-middle">Intenta agregar uno.</p>
        </div>
      }
      {/* // User Story: Frappe 501 */}
      <div className="grid grid-cols-3 gap-4">
        {materials.map(material => {
          if(material.isActive){
            return (
              <MaterialCard
              id={material.id}
              key={material.id}
              name={material.name}
              image={material.image}
              setDeleteModal={setDeleteModal}
              setNameErrors={setNameErrors}
              setEditModal={setEditModal}
              setCurrentMaterial={setCurrentMaterial}/>
            )
          }
        })}
      </div>
      {/* // User Story: Frappe 67 */}
      {displayEditModal && !ecommerce && (
        <Modal
          title={`Editar material - ${currentMaterial.name}`}
          showModal={displayEditModal}
          toggleModal={setEditModal}
        >
          <form className="flex flex-col w-full px-20 mb-4 py-2">
            <label className="text-base w-full my-1">Nuevo nombre</label>
            <input
              className="mb-2 border-2 border-gray-200 rounded pl-2 w-full h-10"
              placeholder={currentMaterial.name}
              onChange={handleNameChange}
              type="name"
              name="materialName"
            />
            <label className="text-base w-full">Imágen actual</label>
              <div className="flex transform scale-75 items-center mb-2">
                <img src={currentMaterial.image} />
              </div>
            <label className="text-base w-full mb-2">Nueva imágen</label>
              <FileInput setFiles={setFile} multiple={false} required={false}/>

            {nameErrors && <SpanError message="Realiza al menos un cambio" />}
            <SaveChangesButton id={currentMaterial.id} name={newName} image={currentMaterial.image}/>
          </form>
        </Modal>
      )}
      {displayResultModal && !ecommerce && (
        <Modal showModal={displayResultModal} toggleModal={setDisplayResultModal} title="">
          <div className="flex flex-col w-full px-20 mb-4 -mt-10 justify-center items-center">
            {success && <BadgeCheckIcon className="items-center h-32 w-32 text-green-400 mb-6" />}
            {!success && <ExclamationIcon className="items-center h-32 w-32 text-red-500 mb-6" />}
            <p className="text-2xl text-center mb-4">{message}</p>
          </div>
        </Modal>
      )}
      {/* // User Story: Frappe 68 */}
      {displayDeleteModal && (
        <Modal showModal={displayDeleteModal} toggleModal={setDeleteModal} title="Eliminar categoría">
          <div className="flex flex-col w-full px-20 mb-4 py-2 justify-center">
            <p className="text-2xl text-center mb-4">
              ¿Estás seguro de querer borrar el material {currentMaterial.name}?
            </p>
            <p className="text-sm text-red-500 text-center">
              Esta acción es irreversible y afectará las opciones disponibles para los usuarios
            </p>
            <ConfirmDeleteMaterial id={currentMaterial.id} />
          </div>
        </Modal>
      )}
    </>
    )
  }