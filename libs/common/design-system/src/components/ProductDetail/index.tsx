import { ProductPrimitives } from '@frappe/product/domain';
import { Disclosure, Tab } from '@headlessui/react'
import { MinusSmIcon, PlusSmIcon } from '@heroicons/react/outline'
import { PropsWithChildren, useEffect, useState } from 'react';
import { ProductSizeSelector } from '..';

type ProductDetailProps = {
  readonly product: ProductPrimitives;
};

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export const  ProductDetail = ({product}: PropsWithChildren<ProductDetailProps>) => {
  
  const [selectedSize, setSelectedSize] = useState<number>(product.sizes[0])
  const [cartItems, setCartItems] = useState([]);
  console.log(selectedSize);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      let aux = localStorage.getItem('items');
      if(aux){
        setCartItems(JSON.parse(aux));
      } 
      if(cartItems === null){
        localStorage.setItem('items',JSON.stringify([]));
        setCartItems([]);
      }
    }
  }, []);

  const addProduct = () => {
    let newProduct = {
      id: product.id,
      name: product.name,
      price: product.price,
      amount: product.amount,
      image: product.images[0],
      size: selectedSize
    }
    console.log(newProduct);
    let aux = localStorage.getItem('items');
    if(aux){
      const auxArray = JSON.parse(aux);
      console.log((auxArray.length));
    }
  }

  return (
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
                  <div className="flex items-center space-x-3  mb-10 mt-5">
                  {product.sizes.map(size => (
                    <ProductSizeSelector size={size} setSelectedSize={setSelectedSize} selectedSize={selectedSize}/>
                    ))}
                  </div>
              </div>
              
              <div className="border-t divide-y divide-gray-200">
                {product.customizableParts == undefined ? <></> : product.customizableParts.map((detail, i) => (
                  <Disclosure as="div" key={i}>
                    {({ open }) => (
                      <>
                        <h3>
                          <Disclosure.Button className="group relative w-full py-6 flex justify-between items-center text-left">
                            <span
                              className={classNames(open ? 'text-yellow-600' : 'text-gray-900', 'text-sm font-medium')}
                            >
                              {product.customizableParts[i]}
                            </span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusSmIcon
                                  className="block h-6 w-6 text-yellow-400 group-hover:text-yellow-500"
                                  aria-hidden="true"
                                />
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
                          <p>
                                Aqui va la parte de los materiales para esta parte
                          </p>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </div>
            </section>

            <form>
            <div className="mt-10 flex sm:flex-col1">
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
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}