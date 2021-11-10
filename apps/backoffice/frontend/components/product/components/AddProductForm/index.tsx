import { Button, Form, TextField } from '@frappe/common/design-system';
import Select from 'react-select';
import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './AddProductForm.module.scss';
import 'react-toggle/style.css';
import Toggle from 'react-toggle';
import SizeSelector from '../SizeSelector';

const AddProductForm = () => {
  const [, setCategories] = useState();
  const [options, setOptions] = useState();
  const [isLimited, setIsLimited] = useState<boolean>(false);
  const [isCustom, setIsCustom] = useState<boolean>(false);
  const [amount, setAmount] = useState<number>()
  const [sizes, setSizes] = useState<number[]>([]);
  const [price, setPrice] = useState<number>();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedImages, setSelectedImages] = useState<string[]>();

  const [productName, setProductName] = useState<string>();

  const [productDescription, setProductDescription] = useState<string>('');

  const defaultSizes = ['22.5', '23', '23.5', '24', '24.5', '25', '25.5', '26', '26.5'];

  type Category = {
    id: string;
    name: string;
  };

  useEffect(() => {
    const getCategories = async (): Promise<void> => {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/categories`);
      const data = response.data.result;
      if (data.length !== 0) {
        setCategories(data);
        setOptions(
          data.map((option: Category) => {
            return { value: option.id, label: option.name };
          })
        );
      }
    };
    getCategories();
  }, []);

  const customStyles = {
    option: (provided: any, state: { isSelected: any }) => ({
      ...provided,
      backgroundColor: state.isSelected ? 'rgb(163, 142, 101)' : undefined,
      color: state.isSelected ? 'rgb(163, 142, 101)' : undefined
    })
  };

  const handleStockChange = () => {
    setIsLimited(previous => !previous);
  };
  const handleCustomChange = () => {
    setIsCustom(previous => !previous);
  };

  const submitProduct = async data => {
    console.log(data, "submit");

    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/products/`, {
        ...data,
        name: productName,
        price: price,
        categories: selectedCategories,
        description: productDescription,
        images: selectedImages,
        isCustom: isCustom,
        isInSale: false, //se va a usar?
        isLimited: false, //se va a usar?
        isOutOfStock: false, //se va a usar?
        materials: ["piel", "gamuza"],
        sizes: sizes,
        amount: amount
      }).catch()
    } catch (error) {

      console.error("El producto ya existe"); 
    }
  };

  const changePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(parseInt(event.target.value));
  };

  const changeProductDescription = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setProductDescription(event.target.value);
  };

  const handleSelectCategories = selectedOptions => {
    const selected = selectedOptions.map(opt => opt.value);
    setSelectedCategories(selected);
  };

  const handleProductName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductName(e.target.value);
  };
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(parseInt(e.target.value));
  };

  const onChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    //console.log("asdasd", Array.from(e.target.files));
    console.log(e.target.files);
    const files = e.target.files;
    const filesLength = files.length;
    const fileNames : string[] = []
    for(let i = 0; i < filesLength; i++ ){
      const{ name } = files.item(i);
      fileNames.push(name);
    } 
   
    setSelectedImages(fileNames);
  }
  
  return (
    <form className="flex flex-col w-full p-8" onSubmit={submitProduct}>
      <div className="flex flex-col">
        <label className='w-1/3 mt-4 mb-2'>Nombre del producto</label>
        <input
          value={productName}
          onChange={handleProductName}
          placeholder="Bandolera"
          className="border-2 border-gray-200 rounded pl-2 w-full h-8"
          required
        />
      </div>

      {/* Se comenta esta parte hasta que se defina la personalización
        <TextField label="Materiales disponibles" name="materials" validations={{ required: 'Los materiales son requeridos' }} /> 
      */}

      <label className={'w-1/3 mt-4 mb-3'}>Categoría(s)</label>
      <Select
        isMulti
        name="categories"
        options={options}
        className="basic-multi-select"
        classNamePrefix="Selecciona algunas categorías"
        styles={customStyles}
        onChange={handleSelectCategories}
      />
      <label className="w-1/3 mt-4 mb-3">Tallas disponibles</label>
      <div className="flex flex-row space-x-4 mb-4">
        {defaultSizes.map(size => (
          <SizeSelector setSizesArray={setSizes} sizesArray={sizes} size={parseFloat(size)}/>
        ))}
      </div>

      <div className="flex flex-col">
        <label className='w-1/3 mt-4 mb-2'>Precio</label>
        <input
          value={price}
          onChange={changePrice}
          placeholder="3999.00"
          type="number"
          className="border-2 border-gray-200 h-8 rounded pl-2 w-full"
          required
        />
      </div>
      <div className="flex flex-row">
        <label className="w-auto mr-4 mt-4 mb-3">¿Este producto tiene stock?</label>
        <Toggle defaultChecked={isLimited} icons={false} className="mt-4" onChange={handleStockChange}/>
      </div>
      {isLimited && (
        <div className="flex flex-col">
        <label className='w-1/3 mt-2 mb-2'>Cantidad</label>
        <input
          value={amount}
          onChange={handleAmountChange}
          placeholder="5"
          type="number"
          className="border-2 border-gray-200 h-8 rounded pl-2 w-full"
          required={isLimited}
        />
      </div>
      )}
      <label className="w-1/3 mt-4 mb-3">Descripción</label>
      <textarea
        value={productDescription}
        className="border-2 border-gray-200 rounded w-full"
        onChange={changeProductDescription}
        required
      />
      <label className="w-1/3 mt-4 mb-3">Imágenes</label>
      <input className={styles['input-file']} type="file"  id="files" name="files" multiple onChange={onChangeFile} required/>
      <p className="text-xs text-red-500 mt-2">Puedes subir varias imágenes haciendo click en Ctrl (Cmd en Mac) mientras seleccionas.</p>
      <div className="flex flex-row">
        <label className={'w-auto mt-4 mb-3 mr-4'}>¿Este producto es personalizable?</label>
        <Toggle defaultChecked={isCustom} icons={false} onChange={handleCustomChange} className="mt-4" />
      </div>
      {isCustom && (
        <p className='text-center text-gray-400 w-1/3 mt-4 mb-2'>AQUI VAN A IR LOS CAMPOS DE CUSTOMIZACIÓN</p>
      )}

      <Button title="Agregar producto" type="submit" variant="cta" className={'mt-4'} />
    </form>
  );
};

export default AddProductForm;
