import { Button,  Modal } from '@frappe/common/design-system';
import Select from 'react-select';
import React, { FormEvent, useEffect, useState } from 'react';
import axios from 'axios';
import styles from './AddProductForm.module.scss';
import 'react-toggle/style.css';
import Toggle from 'react-toggle';
import SizeSelector from '../SizeSelector';
import { BadgeCheckIcon, ExclamationIcon } from '@heroicons/react/solid';

// User Story: Frappe 64

const AddProductForm = () => {
  const [, setCategories] = useState();
  const [options, setOptions] = useState();
  const [isLimited, setIsLimited] = useState<boolean>(false);
  const [isCustom, setIsCustom] = useState<boolean>(false);
  const [amount, setAmount] = useState<number>()
  const [sizes, setSizes] = useState<number[]>([]);
  const [price, setPrice] = useState<number>();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [showRetroModal, setShowRetroModal] = useState<boolean>(false)
  const [success, setSuccess] = useState<boolean>();
  const [message, setMessage] = useState<string>()
  const [loading, setLoading] = useState<boolean>(false)
  const [productName, setProductName] = useState<string>();
  const [productDescription, setProductDescription] = useState<string>('');
  const [files, setFiles] = useState<File[]>([]);

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

  const submitProduct = async (e: FormEvent<HTMLFormElement>) => {
    e.stopPropagation();
    e.preventDefault();
    if (loading === true) {return}
    setLoading(true)
    try {

      const promises = files.map( async file => {
        const bodyFormData = new FormData();
        bodyFormData.append('file', file);
        console.log(bodyFormData.getAll('file'));
        const { data: { name } } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/file-system/`, bodyFormData);
        return name;
      })
      
      const fileNames = await Promise.all(promises);
      // Post de imágenes
        // files.forEach(async (file) => {
        //   var bodyFormData = new FormData();
        //   bodyFormData.append('file', file);
        //   console.log(bodyFormData.getAll('file'));
        //   const { data: { name } } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/file-system/`, bodyFormData)
        //   fileNames.push(name);

        // })
        // console.log(fileNames);
        // setSelectedImages(fileNames)
      
      //Post de productos
          await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/products/`, {
        name: productName,
        price: price,
        categories: selectedCategories,
        description: productDescription,
        images: fileNames,
        isCustom: isCustom,
        isInSale: false, //se va a usar? si
        isLimited: false, //se va a usar? si
        isOutOfStock: false, //se va a usar? si
        materials: ["piel", "gamuza"],
        sizes: sizes,
        amount: isLimited ? amount : null
      })
      setShowRetroModal(true)
      setSuccess(true)
      setMessage("Producto creado correctamente")
      setLoading(false)
      return
    } catch (error) {
      setShowRetroModal(true)
      setSuccess(false)
      setMessage("Este producto ya existe en la base de datos, intenta crear un nuevo producto")
      console.error("El producto ya existe");
      setLoading(false)
      return
    }
  };

  const changePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(parseInt(event.target.value, 10));
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
    setAmount(parseInt(e.target.value, 10));
  };

  const onChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
   // console.log(e.target.files);
    const files = e.target.files;
    const fileArray = Array.from(files);
    const filesLength = files.length;
    const fileNames : string[] = []
    for(let i = 0; i < filesLength; i++ ){
      const{ name } = files.item(i);
      fileNames.push(name);
    }
   
    //setSelectedImages(fileNames);

    setFiles(fileArray);
  }
  
  return (
    <>
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
          <SizeSelector key={""} setSizesArray={setSizes} sizesArray={sizes} size={parseFloat(size)}/>
        ))}
      </div>

      <div className="flex flex-col">
        <label className='w-1/3 mt-4 mb-2'>Precio</label>
        <input
          value={price}
          onChange={changePrice}
          placeholder="3999.00"
          type="number"
          min="0"
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
          min="1"
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
      {showRetroModal && (
        <Modal showModal={showRetroModal} toggleModal={setShowRetroModal} title="">
          <div className="flex flex-col w-full px-20 mb-4 -mt-10 justify-center items-center">
            {success && <BadgeCheckIcon className="items-center h-32 w-32 text-green-400 mb-6" />}
            {!success && <ExclamationIcon className="items-center h-32 w-32 text-red-500 mb-6" />}
            <p className="text-2xl text-center mb-4">{message}</p>
          </div>
        </Modal>
      )}
    </>
  );
};

export default AddProductForm;
