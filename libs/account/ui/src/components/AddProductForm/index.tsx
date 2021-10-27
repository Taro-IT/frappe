import {Button, Form, TextField} from "@frappe/common/design-system";
import {useRegisterForm} from "../../hooks";
import Select from 'react-select'
import { useEffect, useState } from "react";
import axios from 'axios';


export const AddProductForm = () => {
  const { onSubmit } = useRegisterForm();
  const [, setCategories] = useState();
  const [options, setOptions] = useState();

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
      <label className={'w-1/3'}>
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
      <label className={'w-1/3'}>
          Tallas disponibles
      </label>
      <div className="border border- border-gray-300 w-20 h-10 cursor-pointer rounded-md content-center">
        <div>22</div>
      </div>
      <TextField label="Precio" type="name" name="price" validations={{ required: 'El precio es requerido'}}/>
      <TextField label="¿Este producto tiene stock?" type="name" name="stock" />
      <TextField label="Descripción" type="text-area" name="description"/>
      <TextField label="Imágenes" type="name" name="images"/>
      <TextField label="¿Es customizable?" type="name" name="isCustomizable" />


      <Button title="Crear cuenta" type="submit" variant="cta" className={"mt-4"} />
    </Form>
  )
}
