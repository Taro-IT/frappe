// User Story: Frappe 64, Frappe 508
import { Button, Modal } from '@frappe/common/design-system';
import Select from 'react-select';
import React, { FormEvent, useEffect, useState } from 'react';
import axios from 'axios';
import styles from './EditProductForm.module.scss';
import 'react-toggle/style.css';
import Toggle from 'react-toggle';
import SizeSelector from '../SizeSelector';
import DisableTextInput from '../DisableTextInput';
import { BadgeCheckIcon, ExclamationIcon } from '@heroicons/react/solid';
import { ProductPrimitives } from '@frappe/product/domain';
import { useRouter } from 'next/router';

interface EditProductContentProps {
  readonly product : ProductPrimitives;
}

const EditProductForm = ({ product }: EditProductContentProps) => {
  const [, setCategories] = useState<string[]>();
  const [ canBeSold, setCanBeSold] = useState<boolean>(false);
  const [options, setOptions] = useState();
  const [isLimited, setIsLimited] = useState<boolean>();
  const [isOnSale, setIsOnSale] = useState<boolean>();
  const [isCustom, setIsCustom] = useState<boolean>();
  const [amount, setAmount] = useState<number>()
  const [salePrice, setSalePrice] = useState<number>()
  const [sizes, setSizes] = useState<number[]>([]);
  const [price, setPrice] = useState<number>();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [showRetroModal, setShowRetroModal] = useState<boolean>(false)
  const [success, setSuccess] = useState<boolean>();
  const [message, setMessage] = useState<string>()
  const [loading, setLoading] = useState<boolean>(false)
  const [productName, setProductName] = useState<string>();
  const [customParts, setCustomPart] = useState<string[]>([]);
  const [singlePart, setSinglePart] = useState<string>();
  const [productDescription, setProductDescription] = useState<string>('');
  const [files, setFiles] = useState<File[]>([]);
  const [allSizes, setAllSizes] = useState<boolean>(false);
  const [prevCategories, setPrevCategories] = useState()
  const [prevInfo, setPrevInfo] = useState<ProductPrimitives>()
  const defaultSizes = [22, 22.5, 23, 23.5, 24, 24.5, 25, 25.5, 26, 26.5, 27, 27.5, 28, 28.5, 29, 29.5];


  type Category = {
    id: string;
    name: string;
  };

  const router = useRouter()
  const {id} = router.query

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
        setPrevCategories(data.map((option: Category) => {
          return { value: option.id, label: option.name };
        }))
      }
    };
    getCategories();


  }, []);

  useEffect(() => {
    const getProductInfo = async (): Promise<void> => {
      const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products/${id}`);
      const productInfo: ProductPrimitives = data.product.result;
      console.log(productInfo);

      if(data.length !== 0) {
        setPrevInfo(productInfo);
      }
    }

    getProductInfo();
    console.log("OPTIONS", options);
  }, []);

  useEffect(() => {
    console.log("PREVCAT", prevCategories);

  }, [prevCategories])


  const customStyles = {
    option: (provided: any, state: { isSelected: any }) => ({
      ...provided,
      backgroundColor: state.isSelected ? 'rgb(163, 142, 101)' : undefined,
      color: state.isSelected ? 'rgb(163, 142, 101)' : undefined
    })
  };

  const handleSetToAllSizes = () => {

    if(allSizes){
      setSizes([]);
    } else {
      setSizes(defaultSizes);
    }

    setAllSizes(previous => !previous)

  }

  console.log(sizes);
  const handleStockChange = () => {
    setIsLimited(previous => !previous);
  };

  const handleOnSaleChange = () => {
    setIsOnSale(previous => !previous);
  };

  const handleCanBeSoldChange = () => {
    setCanBeSold(previous => !previous);
    console.log(canBeSold);
  };

  const handleCustomChange = () => {
    setIsCustom(previous => !previous);
  };

  const getImagePromises = () => {
    return files.map( async file => {
        const bodyFormData = new FormData();
        bodyFormData.append('file', file);
        const { data: { name } } = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/file-system/`,
          bodyFormData,
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("authToken")
            }
          }
          );
        return name;
    })
  }

  const updateProduct = async (e: FormEvent<HTMLFormElement>) => {
    e.stopPropagation();
    e.preventDefault();
    if (loading === true) {return}
    setLoading(true)
    try {

      // Post de imágenes
      const promises = getImagePromises();
      const fileNames = await Promise.all(promises);

      const payload = {
        name: (productName !== undefined && productName !== null && productName !== "") ? productName : null,
        price: (price !== undefined  && price !== null) ? price : null,
        categories: (selectedCategories !== selectedCategories  && productName !== null  && selectedCategories !== []) ? selectedCategories : null,
        description: (productDescription !== undefined  && productDescription !== null  && productDescription !== "") ? productDescription : null,
        images: (fileNames !== selectedCategories  && fileNames !== null  && fileNames !== []) ? fileNames : null,
        isCustom: (isCustom !== undefined  && isCustom !== null) ? isCustom : null,
        isInSale: (isOnSale !== undefined  && isOnSale !== null) ? isOnSale : null,
        isLimited: (isLimited !== undefined  && isLimited !== null) ? isLimited : null,
        isOutOfStock: false,
        customizableParts: (customParts !== undefined  && customParts !== null  && customParts !== []) ? customParts : null,
        sizes: (sizes !== undefined  && sizes !== null  && sizes !== []) ? sizes : null,
        amount: (amount !== undefined  && amount !== null) ? amount : null,
        priceInSale: (salePrice !== undefined && salePrice !== null) ?  salePrice : null,
        canBeSold: (canBeSold !== undefined  && canBeSold !== null) ? canBeSold : null,
      }

      // Patch de productos
      
      patchProducts(payload)
      showSuccess()
    } catch (error) {
      showError()
    }
  };

  const  patchProducts = async (payload) => {
    await axios.patch(
      `${process.env.NEXT_PUBLIC_API_URL}/products/${id}`,
      payload,
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("authToken")
        }
      }
    )
  }

  const showSuccess = () => {
    setShowRetroModal(true)
    setSuccess(true)
    setMessage("Producto actualizado correctamente")
    setLoading(false)
    return
  }

  const showError = () => {
    setShowRetroModal(true)
    setSuccess(false)
    setMessage("Este producto ya existe en la base de datos, intenta cambiar el nombre")
    console.error("El producto ya existe");
    setLoading(false)
    return
  }

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

  const handleSinglePart = (e: React.ChangeEvent<HTMLInputElement>) => {
    const part = (e.target.value) ? e.target.value : '';
    setSinglePart(part);
  };

  const handleCustomPart = () => {
    const part = singlePart;
    setCustomPart(customParts => [...customParts, part]);
    setSinglePart('');
    console.log(customParts);
  }

  const handleDeletePart = () => {
    console.log("hola");
  }

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(parseInt(e.target.value, 10));
  };

  const handleSalePricehange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSalePrice(parseInt(e.target.value, 10));
  };

  const onChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    const fileArray = Array.from(files);
    const filesLength = files.length;
    const fileNames : string[] = []
    for(let i = 0; i < filesLength; i++ ){
      const{ name } = files.item(i);
      fileNames.push(name);
    }
    setFiles(fileArray);
  }


  return (
    <>
    <form className="flex flex-col w-full p-8" onSubmit={updateProduct}>
      <div className="flex flex-col">
        <label className='w-1/3 mt-4 mb-2'>Nombre del producto</label>
        <input
          value={productName}
          onChange={handleProductName}
          className="border-2 border-gray-200 rounded pl-2 w-full h-8"

          placeholder={prevInfo ? prevInfo.name : "Cargando..."}
        />
      </div>

      {/* Se comenta esta parte hasta que se defina la personalización
        <TextField label="Materiales disponibles" name="customizableParts" validations={{  : 'Los materiales son requeridos' }} />
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
        placeholder="Selecciona categorías"
        defaultValue={prevCategories}
      />
        <div className="flex flex-row">
          <label className="w-auto mr-4 mt-4 mb-3">Todas las tallas</label>
          <Toggle defaultChecked={allSizes} icons={false} className="mt-4" onChange={handleSetToAllSizes} />
        </div>
      <label className="w-1/3 mt-4 mb-3">Tallas disponibles</label>
      <div className="grid sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-2 mb-4">
        {defaultSizes.map(size => (
          <SizeSelector key={""} setSizesArray={setSizes} sizesArray={sizes} size={size} selectAll={allSizes}/>
        ))}
      </div>

      <div className="flex flex-col">
        <div className="flex flex-row">
        <label className='w-1/3 mb-2'>Precio</label>
        <input
          value={price}
          onChange={changePrice}
          type="number"
          min="0"
          className="border-2 border-gray-200 h-8 rounded pl-2 w-full"
          placeholder={prevInfo ? prevInfo.price.toFixed(2) : "Cargando..."}

        />
      </div>
      <div className="flex flex-row">
          <label className="w-auto mr-4 mt-4 mb-3">¿Este producto será visible para clientes?</label>
          <Toggle defaultChecked={prevInfo ? prevInfo.canBeSold : false } icons={false} className="mt-4" onChange={handleCanBeSoldChange}/>
      </div>
      <div className="flex flex-row">
          <label className="w-auto mr-4 mt-4 mb-3">¿Este producto está en oferta?</label>
          <Toggle defaultChecked={prevInfo ? prevInfo.isInSale : false} icons={false} className="mt-4" onChange={handleOnSaleChange}/>
      </div>
      {isOnSale && (
        <div className="flex flex-row">
        <label className='w-1/3 mb-2'>Precio de rebaja</label>
        <input
          value={salePrice}
          onChange={handleSalePricehange}
          placeholder="2599.99"
          type="number"
          min="1"
          className="border-2 border-gray-200 h-8 rounded pl-2 w-full"
          required={isOnSale}
        />
      </div>
      )}
      </div>
      <div className="flex flex-row">
        <label className="w-auto mr-4 mt-4 mb-3">¿Este producto tiene stock?</label>
        <Toggle defaultChecked={prevInfo ? prevInfo.isLimited : false} icons={false} className="mt-4" onChange={handleStockChange}/>
      </div>
      {isLimited && (
        <div className="flex flex-col">
        <label className='w-1/3 mt-2 mb-2'>Cantidad</label>
        <input
          value={amount}
          onChange={handleAmountChange}
          placeholder={prevInfo.amount.toFixed(0)}
          type="number"
          min="1"
          className="border-2 border-gray-200 h-8 rounded pl-2 w-full"
          required={isLimited}
        />
      </div>
      )}
      <label className="w-1/3 mt-4 mb-3">Descripción</label>
      <textarea
        placeholder={prevInfo ? prevInfo.description : "Cargando..."}
        value={productDescription}
        className="border-2 border-gray-200 rounded w-full pl-2 pt-2"
        onChange={changeProductDescription}
      />
      <label className="w-1/3 mt-4 mb-3">Imágenes</label>
      <input className={styles['input-file']} type="file"  id="files" name="files" multiple onChange={onChangeFile}/>
      <p className="text-xs text-red-500 mt-2">Puedes subir varias imágenes haciendo click en Ctrl (Cmd en Mac) mientras seleccionas.</p>
      <div className="flex flex-row">
        <label className={'w-auto mt-4 mb-3 mr-4'}>¿Este producto es personalizable?</label>
        <Toggle defaultChecked={isCustom} icons={false} onChange={handleCustomChange} className="mt-4" />
      </div>
      {isCustom && (
        <div>
            <div>{customParts.map((part, index) =>
              <div key={index}>
                <DisableTextInput index={index} partName={part} partArr={customParts} setCustomParts={setCustomPart}/>
              </div>
            )}
            </div>
              <div>
            <label className='w-1/3 mt-4 mb-2' onClick={handleDeletePart}>Parte personalizable</label>
            <br/>
            <input
              id="partName"
              onChange={handleSinglePart}
              placeholder="Chinela"
              className="border-2 border-gray-200 rounded pl-2 w-1/2 h-8"
              value={singlePart}
            />
          </div>
          {/*TODO: A veces no funciona el botón a la primera*/}
          <Button title="Agregar parte" type="button" variant="cta" className={'mt-4'} onClick={handleCustomPart} />
        </div>
      )}

      <Button title="Guardar cambio" type="submit" variant="cta" className={'mt-4'} />
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

export default EditProductForm;