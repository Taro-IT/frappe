import { ProductPrimitives } from '@frappe/product/domain';
import { Disclosure, RadioGroup, Tab } from '@headlessui/react'
import { HeartIcon, MinusSmIcon, PlusSmIcon } from '@heroicons/react/outline'
import { PropsWithChildren, useState } from 'react';
import SizeSelector from '../../../../../../apps/backoffice/frontend/components/product/components/SizeSelector';

type ProductDetailProps = {
  readonly product: ProductPrimitives;
};

// const product = {
//   id: "0c37ab50-efd4-4181-a4ef-e5fd45417eed",
//   name: 'Nike Air Force 1',
//   price: 1,
//   categories : ["8480de3f-5c80-441a-bb13-c2d109940773"],
//   images: [
//     {
//       id: 1,
//       name: 'Angled view',
//       src: 'https://cinicastaticfiles.blob.core.windows.net/uploads/c93b52d0-eabf-4c7d-9f94-e28a16fc62fb.jpeg',
//       alt: 'Angled front view with bag zipped and handles upright.',
//     },
//     {
//         id: 2,
//         name: 'Angled view',
//         src: 'https://cinicastaticfiles.blob.core.windows.net/uploads/e74d446a-db26-4092-b099-a415acf198be.jpeg',
//         alt: 'Angled front view with bag zipped and handles upright.',
//       }
//     // More images...
//   ],
//   description: "Los botines Osadía son elaboradas completamente a mano por artesanos zapateros del Estado de México. Las piezas son hechas sobre pedido, por lo que solicitamos consideres que el proceso de producción es de 6 a 8 semanas aproximadamente, adicional al tiempo de envío.",
//   details: [
//     {
//       name: 'Features',
//       items: [
//         'Multiple strap configurations',
//         'Spacious interior with top zip',
//         'Leather handle and tabs',
//         'Interior dividers',
//         'Stainless strap loops',
//         'Double stitched construction',
//         'Water-resistant',
//       ],
//     },
//     // More sections...
//   ],
// }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const  ProductDetail = ({product}: PropsWithChildren<ProductDetailProps>) => {

  const [selectedSize, setSelectedSize] = useState(product.sizes[0])

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
                        <span className="sr-only">{product.images[i]}</span>
                        <span className="absolute inset-0 rounded-md overflow-hidden">
                          <img src={product.images[i]} alt="" className="w-full h-full object-center object-cover" />
                        </span>
                        <span
                          className={classNames(
                            selected ? 'ring-indigo-500' : 'ring-transparent',
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
                    src={product.images[i]}
                    alt={product.images[i]}
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
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl text-gray-900">{product.price}</p>
            </div>

            <div className="mt-6">
              <h3 className="sr-only">Descrición</h3>

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
                    <div key={size} className={`w-20 h-10 cursor-pointer rounded-md justify-content-center border-2`}>
                    <div className="mt-1 text-center w-full">{size}</div>
                    </div>
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
                              className={classNames(open ? 'text-indigo-600' : 'text-gray-900', 'text-sm font-medium')}
                            >
                              {product.customizableParts[i]}
                            </span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusSmIcon
                                  className="block h-6 w-6 text-indigo-400 group-hover:text-indigo-500"
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
                  className="max-w-xs flex-1 bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500 sm:w-full"
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