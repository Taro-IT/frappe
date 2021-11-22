  // User Story: Frappe 62 / Frappe 80 / Frappe 71
import { ProductIsCustom, ProductPrimitives } from '@frappe/product/domain';
import { Disclosure, Tab } from '@headlessui/react'
import { PlusSmIcon } from '@heroicons/react/outline'
import { PropsWithChildren, useEffect, useState } from 'react';
import { ProductSizeSelector } from '..';
import {Toastr} from '../../Toastr';
import axios from 'axios';
import { MaterialSelector } from '../MaterialSelector';

type ProductDetailProps = {
  readonly product: ProductPrimitives;
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}


export const  ProductDetail = ({product}: PropsWithChildren<ProductDetailProps>) => {

  const [selectedSize, setSelectedSize] = useState<number>(product.sizes[0])
  const [,setCartItems] = useState([]);
  const [cartSuccess, setCartSuccess] = useState<boolean>(false);
  const [options, setOptions] = useState();
  const [materials, setMaterials] = useState([]);
  const [productMaterials, setProductMaterials] = useState<CustomPart[]>([]);
  const [productAmount, setProductAmount] = useState<number>(1);

  type Material = {
    id: string;
    name: string;
    image: string;
  };

  type CustomPart = {
    name: string,
    material: string
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const aux = localStorage.getItem('items');
      if(aux){
        setCartItems(JSON.parse(aux));
      }
      if(aux === null){
        localStorage.setItem('items',JSON.stringify([]));
        setCartItems([]);
      }
    }

    const getMaterials = async (): Promise<void> => {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/materials`);
      const data = response.data.result;
      if (data.length !== 0) {
        setMaterials(data.map((material: Material) => {
          return {id: material.id, name: material.name, image: material.image};
          })
        );
        setOptions(
          data.map((option: Material) => {
            return { value: option.id, label: option.name };
          })
        );
      }
    };
    setProductMaterials(product.customizableParts?.map( (part, i) => {
        return { name: part, material: ''};
      })
    )
    getMaterials();
  }, []);

  const producrAmountChangeHandler = (event : any) => {
    setProductAmount(event.target.value)
  }

  const addProduct = () => {
    
      setCartSuccess(false)
      const newProduct = {
        id: product.id,
        name: product.name,
        price: product.price,
        amount: productAmount,
        image: product.images[0],
        size: selectedSize,
        customizableParts: productMaterials
  
      }
      const aux = localStorage.getItem('items');
      if(aux !== null && aux !== undefined){
        const auxArray = JSON.parse(aux);
        auxArray[auxArray.length] = newProduct;
        console.log(auxArray.length);
        localStorage.setItem('items',JSON.stringify(auxArray));
      }
  
      setCartSuccess(true)
  }
 

  return (
    <>
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
          {/* Image gallery */}
          <Tab.Group as="div" className="flex flex-col-reverse">
            {/* Image selector */}
            <div className="hidden mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
              <Tab.List className="grid grid-cols-4 gap-6">
                {product.images.map((image, i) => (
                  <Tab
                    key={i}
                    className="relative h-24 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                  >
                    {({ selected }) => (
                      <>
                        <span className="sr-only">{image}</span>
                        <span className="absolute inset-0 rounded-md overflow-hidden">
                          <img src={image} alt="" className="w-full h-full object-center object-cover" />
                        </span>
                        <span
                          className={classNames(
                            selected ? 'ring-yellow-500' : 'ring-transparent',
                            'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                          )}
                          aria-hidden="true"
                        />
                      </>
                    )}
                  </Tab>
                ))}
              </Tab.List>
            </div>

            <Tab.Panels className="w-full aspect-w-1 aspect-h-1">
              {product.images.map((image, i) => (
                <Tab.Panel key={i}>
                  <img
                    src={image}
                    alt={image}
                    className="w-full h-full object-center object-cover sm:rounded-lg"
                  />
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>

          {/* Product info */}
          <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">{product.name}</h1>

            <div className="mt-3">
              <h2 className="sr-only">Información del producto</h2>
              {product.priceInSale != undefined ? <p className="text-2xl text-gray-600 line-through">${product.price}</p> : <p className="text-3xl text-gray-900">${product.price}</p>}
              {product.priceInSale != undefined ? <p className="text-3xl text-gray-900">${product.priceInSale}</p> : <></>}
            </div>

            <div className="mt-6">
              <h3 className="sr-only">Descripción</h3>

              <div
                className="text-base text-gray-700 space-y-6"
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
            </div>

            <section aria-labelledby="details-heading" className="mt-12">
              <h2 id="details-heading" className="sr-only">
                Additional details
              </h2>
              <div>
                <h3 className="text-sm text-gray-600">Talla</h3>
                  <div className="grid sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-2  mb-10 mt-5">
                  {product.sizes.map(size => (
                    <ProductSizeSelector size={size} setSelectedSize={setSelectedSize} selectedSize={selectedSize}/>
                    ))}
                  </div>
              </div>

              <div className="border-t divide-y divide-gray-200">
                {product.customizableParts == undefined ? <></> : product.customizableParts.map((part, i) => (
                  <Disclosure as="div" key={i}>
                    {({ open }) => (
                      <>
                        <h3>
                          <Disclosure.Button className="group relative w-full py-6 flex justify-between items-center text-left">
                            <span
                              className={classNames(open ? 'text-yellow-600' : 'text-gray-900', 'text-sm font-medium')}
                            >
                              {part}
                            </span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <></>
                              ) : (
                                <PlusSmIcon
                                  className="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel as="div" className="pb-6 prose prose-sm">
                              <MaterialSelector bootPart={part} options={options} index={i} images={materials} productMaterial={productMaterials} setProductMaterial={setProductMaterials}/>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </div>
            </section>


            <div className="mt-10 flex sm:flex-col1">
              <input 
                id="cantidad" 
                type="number" 
                className="w-14 rounded-lg border-4 border-yellow-300 mr-5 text-center"
                placeholder="1"
                onChange={producrAmountChangeHandler}
                value={productAmount}
                min="1"
                >
              </input>
                <button
                  type="submit"
                  className="max-w-xs flex-1 bg-yellow-500 border border-transparent
                  rounded-md py-3 px-8 flex items-center justify-center text-base font-medium
                  text-white hover:bg-yellow-600 focus:outline-none focus:ring-2
                  focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-yellow-500 sm:w-full"
                  onClick={addProduct}
                >
                  Agregar al carrito
                </button>
              </div>
          </div>
        </div>
      </div>
    </div>
    {cartSuccess &&
        <Toastr.Success
          className="vanilla-fade"
          bottom="auto"
          top="1rem"
          left="auto"
          right="2rem"
          content="Producto añadido al carrito con éxito"
          toggleToastr={setCartSuccess}
        />
    }
    </>
  )
}