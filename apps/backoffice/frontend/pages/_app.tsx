import React from "react";
import { AppProps } from 'next/app';
import {AuthUserProvider} from "../context/AuthUserContext";
import { ShoppingCartIcon, ColorSwatchIcon, UsersIcon, UserCircleIcon } from '@heroicons/react/solid'

import './styles.scss';

const navigation = [
  { name: 'Órdenes', icon: ShoppingCartIcon, href: '#'},
  { name: 'Catalogo', icon: ColorSwatchIcon, href: '#' },
  { name: 'Usuarios', icon: UsersIcon, href: '#'},
]

const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ')
}

const CinicaApp = () => (
  <div className="h-screen">
<div className="flex flex-col flex-grow pt-5 pb-4 bg-primary max-w-min overflow-y-auto">

{/* Logo */}
  <div className="flex items-center flex-shrink-0 px-4 space-y-5">
    <img
      className="m-auto"
      src="/img/cinica-logo.png"
      alt="Cínica Logo"
    />
  </div>

  {/* Content */}
  <div className="mt-5 flex-grow flex flex-col">

    <nav className="flex-1 bg-primary space-y-1" aria-label="Sidebar">
    {/* Item */}
      {navigation.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className={classNames('hover:text-yellow-400 text-white','border-transparent text-white hover:text-yellow-400', 'group flex items-center px-3 py-2 text-sm font-medium border-l-4'
          )}
        >
          <item.icon
            className={classNames(
              'group-hover:text-white',
              'mr-3 flex-shrink-0 h-6 w-6'
            )}
            aria-hidden="true"
          />
          {item.name}
        </a>
      ))}
      
    </nav>
    <div className="flex-shrink-0 flex p-4">
    <a href="#" className="flex-shrink-0 w-full group block">
      <div className="flex items-center flex-col">
        <p className="text-lg font-large text-white text-center mb-6">¡Bienvenida, Doris!</p>
        <UserCircleIcon className="block h-9 w-9 rounded-full bg-white"/>
      </div>
    </a>
  </div>
  </div>
</div>
  </div>
  
);

export default CinicaApp;
