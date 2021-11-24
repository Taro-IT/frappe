import { Card, withUserAgent } from '@frappe/common/design-system';
import React from 'react'
import { AdminLayout } from '../layouts/AdminLayout';

const helpItems = [
    {
        name: "Productos",
        links: [
            {
                use_case: "Agregar",
                link: "https://www.facebook.com/TechnovationChallengeQro"
            }
        ]
    },
    {
        name: "Categorías",
        links: [
            {
                use_case: "Agregar",
                link: "https://www.facebook.com/TechnovationChallengeQro"
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