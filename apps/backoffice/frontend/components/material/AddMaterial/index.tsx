// User Story: Frappe 71

import { Button, FileInput, Card, Modal } from '@frappe/common/design-system';
import classes from './AddMaterial.module.scss';
import React, { useState } from 'react';
import axios from 'axios';
import { BadgeCheckIcon, ExclamationIcon } from '@heroicons/react/solid';

const CreateMaterial = () => {
  const [materialName, setMaterialName] = useState<string>('');
  const [file, setFile] = useState<File>();
  const [showRetroModal, setShowRetroModal] = useState<boolean>(false)
  const [success, setSuccess] = useState<boolean>();
  const [message, setMessage] = useState<string>()
  const [loading, setLoading] = useState<boolean>(false)
  const[clear, setClear] = useState<boolean>(false)

  const addMaterialHandler = async event => {
    event.preventDefault();
    setClear(false)
    if (loading === true) {return}
    setLoading(true)
    if (materialName == '') return;

    try {
      // Post de imágenes
      const bodyFormData = new FormData();
      bodyFormData.append('file', file);
      const { data: { name } } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/file-system/`, bodyFormData);
      
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/materials/`, {
        name: materialName,
        image: name
      });
      setShowRetroModal(true)
      setSuccess(true)
      setMessage("Material creado correctamente")
      setLoading(false)
      setClear(true)
      
    } catch (error) {
      setShowRetroModal(true)
      setSuccess(false)
      setMessage("Este material ya existe en la base de datos, intenta crear un nuevo material")
      console.error("El material ya existe");
      setClear(true)
      setLoading(false)
      
    }
    setMaterialName('');
  };

  const nameChangeHandler = event => {
    setMaterialName(event.target.value);
  };

  const reloadPage = () => {
    window.location.reload();
  }

  return (
    <>
    <Card className={classes.input}>
      <form onSubmit={addMaterialHandler}>
        <label htmlFor="materialName">Nombre del material</label>
        <input autoComplete="off" className=" my-2 border-2 border-gray-200 rounded pl-2 w-full h-10" id="materialName" placeholder="Piel roja" type="text" value={materialName} onChange={nameChangeHandler} required/>
        <label htmlFor="materialName">Imágen del material</label>
        <FileInput setFiles={setFile} clear={clear} multiple={false} required={true}/>
        <Button variant="cta" type="submit" title="Agregar" />
      </form>
    </Card>
    {showRetroModal && (
      <Modal showModal={showRetroModal} toggleModal={setShowRetroModal} title="">
        <div className="flex flex-col w-full px-20 mb-4 -mt-10 justify-center items-center">
          {success && <BadgeCheckIcon className="items-center h-32 w-32 text-green-400 mb-6" />}
          {!success && <ExclamationIcon className="items-center h-32 w-32 text-red-500 mb-6" />}
          <p className="text-2xl text-center mb-4">{message}</p>
          <Button title="Aceptar" onClick={reloadPage} variant="cta" className={'mt-4'} />
        </div>
      </Modal>
    )}
    </>
  );
};

export default CreateMaterial;
