import {Button, Form, TextField} from "@frappe/common/design-system";
import Select from 'react-select'
import { useEffect, useState } from "react";
import axios from 'axios';
import styles from './AddProductForm.module.scss'
import "react-toggle/style.css"
import Toggle from 'react-toggle'
import SizeSelector from '../SizeSelector'

const AddProductForm = () => {
  const [, setCategories] = useState();
  const [options, setOptions] = useState();
  const [isLimited, setIsLimited] = useState<boolean>(false);
  const [isCustom, setIsCustom] = useState<boolean>(false);

  const sizes = ["22.5", "23", "23.5","24","24.5", "25", "25.5", "26", "26.5"]

  type Category = {
    id: string,
    name : string,
  }

  
  useEffect(() => {
    const getCategories = async (): Promise<void> => {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/categories`);
      const data = response.data.result;
      if (data.length !== 0) {
        setCategories(data);
        setOptions(data.map((option: Category) =>
          {return {value: option.id, label: option.name}}
          ));
      }
    };
    getCategories();
  }, []);

  const customStyles = {
    option: (provided: any, state: { isSelected: any; }) => ({
      ...provided,
      backgroundColor: 
        state.isSelected
        ? "rgb(163, 142, 101)"
        : undefined,
      color: 
        state.isSelected
        ? "rgb(163, 142, 101)"
        : undefined
    })
  }

  const handleProductToggle = () => {
    setIsLimited(previous => !previous)
  }



  const submitProduct = async data => {
    console.log(data);
    
    
    await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/products/`, {
      ...data,
      isOutOfStock: false,
      /* isCustom: //custom, // TODO: add `custom` state
      isLimited: */
    })
    
  }

  return (
    <Form className="flex flex-col w-full p-8" onSubmit={submitProduct}>
      <TextField label="Nombre del producto" type="name" name="name" validations={{ required: 'El nombre del producto es requerido' }} />
      <TextField label="Materiales disponibles" name="materials" validations={{ required: 'Los materiales son requeridos' }} />
      <label className={'w-1/3 mt-4 mb-3'}>
          Categoría(s)
      </label>
      <Select
        isMulti
        name="categories"
        options={options}
        className="basic-multi-select"
        classNamePrefix="Selecciona algunas categorías"
        styles={customStyles}
      />
      <label className='w-1/3 mt-4 mb-3'>
          Tallas disponibles
      </label>
      <div className="flex flex-row space-x-4 mb-4">
        {sizes.map(size => 
          <SizeSelector size={size} />
        )}
      </div>
      
      <TextField label="Precio" type="number" name="price" validations={{ required: 'El precio es requerido'}}/>
      <div className="flex flex-row">
        <label className='w-auto mr-4 mt-4 mb-3'>
            ¿Este producto tiene stock?
        </label>
        <Toggle
              defaultChecked={isLimited}
              icons={false}
              className='mt-4'
              onChange={handleProductToggle} 
        />
      </div>
      {isLimited && 
          <TextField label="Cantidad" type="number" name="amount" validations={{ required: 'La cantidad es requerida'}}/>
      }
      
      <label className='w-1/3 mt-4 mb-3'>
          Descripción
      </label>
      <textarea className='border-2 border-gray-200 rounded w-full' />
      
      <label className='w-1/3 mt-4 mb-3'>
          Imágenes
      </label>
      <input className={styles['input-file']} type="file" id="files" name="files" multiple/>
      <div className="flex flex-row">
        <label className={'w-auto mt-4 mb-3 mr-4'}>
            ¿Este producto es personalizable?
        </label>
        <Toggle
            defaultChecked={false}
            icons={false}
            className='mt-4'
            onChange={()=> {}} 
          />

      </div>


      <Button title="Agregar producto" type="submit" variant="cta" className={"mt-4"} />
    </Form>
  )
}

export default AddProductForm