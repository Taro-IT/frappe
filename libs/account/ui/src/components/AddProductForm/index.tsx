import {Button, Form, TextField} from "@frappe/common/design-system";
import {useRegisterForm} from "../../hooks";
import Select from 'react-select'
import { useEffect, useState } from "react";
import axios from 'axios';


export const AddProductForm = () => {
  const { onSubmit } = useRegisterForm();
  const [, setCategories] = useState();
  const [options, setOptions] = useState();

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

  return (
    <Form className="flex flex-col w-full p-8" onSubmit={onSubmit}>
      <TextField label="Nombre del producto" type="name" name="productName" validations={{ required: 'El nombre del producto es requerido' }} />
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
      <label className={'w-1/3 mt-4 mb-3'}>
          Tallas disponibles
      </label>
      <div className="flex flex-row space-x-4 mb-4">
        {sizes.map(size => 
          <div className={`border border- border-gray-300 w-20 h-10 cursor-pointer rounded-md p-2`}>
            <div>{size}</div>
          </div>
        )}
      </div>
      
      <TextField label="Precio" type="name" name="price" validations={{ required: 'El precio es requerido'}}/>
      <label className={'w-1/3 mt-4 mb-3'}>
          ¿Este producto tiene stock?
      </label>
      
      <label className={'w-1/3 mt-4 mb-3'}>
          Descripción
      </label>
      <input type="textarea" />
      
      <TextField label="Imágenes" type="name" name="images"/>
      <label className={'w-1/3 mt-4 mb-3'}>
          ¿Este producto es personalizable?
      </label>


      <Button title="Crear cuenta" type="submit" variant="cta" className={"mt-4"} />
    </Form>
  )
}
