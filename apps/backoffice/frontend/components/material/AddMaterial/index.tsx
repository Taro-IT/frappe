import { Button, FileInput, Card } from '@frappe/common/design-system';
import classes from './AddMaterial.module.scss';
import { useState } from 'react';
import axios from 'axios';

const CreateMaterial = () => {
  const [materialName, setMaterialName] = useState<string>('');
  const [file, setFile] = useState<File>();
  const [fileURL, setFileURL] = useState<string>('');

  const addMaterialHandler = async event => {
    event.preventDefault();
    if (materialName == '') return;


    try {
      
      // Post de imágenes
      const bodyFormData = new FormData();
      bodyFormData.append('file', file);
      const { data: { name } } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/file-system/`, bodyFormData);
      setFileURL(name)

      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/materials/`, {
        name: materialName,
        image: fileURL
      });
    } catch (error) {
      console.error('El material ya existe.');
    }

    setMaterialName('');
  };

  const nameChangeHandler = event => {
    setMaterialName(event.target.value);
  };

  return (
    <Card className={classes.input}>
      <form>
        <label htmlFor="materialName">Nombre del material</label>
        <input className=" my-2 border-2 border-gray-200 rounded pl-2 w-full h-10" id="materialName" placeholder="Piel roja" type="text" value={materialName} onChange={nameChangeHandler} />
        <label htmlFor="materialName">Imágen del material</label>
        <FileInput multiple={false} required={true}/>
        <Button variant="cta" type="submit" onClick={addMaterialHandler} title="Agregar" />
      </form>
    </Card>
  );
};

export default CreateMaterial;
