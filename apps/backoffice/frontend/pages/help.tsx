import { Card, withUserAgent } from '@frappe/common/design-system';
import React from 'react'
import { AdminLayout } from '../layouts/AdminLayout';

const helpItems = [
    {
        name: "Productos",
        links: [
            {
                use_case: "Agregar un producto personalizable",
                link: "https://ior.ad/7ULR"
            },
            {
                use_case: "Eliminar un producto",
                link: "https://www.iorad.com/player/1886409/Cinica-mx---C-mo-eliminar-un-producto-como-administrador-"
            }
        ]
    },
    {
        name: "Materiales",
        links: [
            {
                use_case: "Agregar",
                link: "https://ior.ad/7UkT"
            },
            {
                use_case: "Modificar",
                link: "https://www.iorad.com/player/1884858/Editar-material"
            },
            {
                use_case: "Eliminar",
                link: "https://ior.ad/7Ul6"
            }
        ]
    },
    {
        name: "Ordenes",
        links: [
            {
                use_case: "Ver PDF de orden",
                link: "https://ior.ad/7UlE"
            },
            {
                use_case: "Cambiar el estatus de una orden",
                link: "https://ior.ad/7UMz"
            },
            {
                use_case: "Descargar una guía de envío",
                link: "https://ior.ad/7UOt"
            }
        ]
    },{
        name: "Tienda",
        links: [
            {
                use_case: "Realizar un pedido",
                link: "https://ior.ad/7V1q?iframeHash=trysteps-1"
            },
            {
                use_case: "Personalizar un producto",
                link: "https://ior.ad/7UOh"
            },
            {
                use_case: "Filtrar productos",
                link: "https://www.iorad.com/player/1880218/C-nica-mx---C-mo-filtrar-productos-"
            }
        ]
    }
]

const HelpPage = () => (
    <div className="bg-gray-100 w-full position-absolute flex flex-col h-screen overflow-auto -mt-4">
        <p className="text-center font-medium text-2xl">¿Necesitas ayuda?<br/>Consulta aquí los tutoriales para manejar el sistema.</p>
        <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 m-12 overflow-y-scroll">
        {
            helpItems.map((item, index) => {
                return (
                    <Card key={index} className="mx-4 my-auto w-11/12 p-4">
                        <h1 className='text-2xl text-center font-medium'>{item.name}</h1>
                        <ul className="list-disc p-4">
                            {item.links.map((link, index) => {
                                return <li key={index} className="hover:text-yellow-500"><a href={link.link}>{link.use_case}</a></li>
                            })}
                        </ul>

                    </Card>
                )
            })
        }
        </div>
    </div>
  )

  HelpPage.Layout = AdminLayout;

  export default withUserAgent(HelpPage);