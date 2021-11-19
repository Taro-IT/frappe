import { EcommerceLayout, Card, withUserAgent } from '@frappe/common/design-system';
import React from 'react'

const helpItems = [
    {
        name: "Compras",
        links: [
            {
                use_case: "Agregar",
                link: "https://www.facebook.com/TechnovationChallengeQro"
            }
        ]
    },
    {
        name: "Personalización",
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
        <p className="text-center font-medium text-2xl mt-8">¿Necesitas ayuda?<br/>Consulta aquí los tutoriales para manejar el sistema.</p>
        <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 m-12 overflow-y-scroll">
        {
            helpItems.map((item) => {
                return (
                    <Card className="mx-4 my-auto w-11/12 p-4">
                        <h1 className='text-2xl text-center font-medium'>{item.name}</h1>
                        <ul className="list-disc p-4">
                            {item.links.map((link) => {
                                return <li className="hover:text-yellow-500"><a href={link.link}>{link.use_case}</a></li>
                            })}
                        </ul>

                    </Card>
                )
            })
        }
        </div>
    </div>
  )

  HelpPage.Layout = EcommerceLayout;

  export default withUserAgent(HelpPage);