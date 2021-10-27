import React, { useState } from 'react'
import { CogIcon, LogoutIcon, ShoppingCartIcon, UserIcon } from "@heroicons/react/solid";

export const Navbar = () => {
  const [open, setOpen] = useState(false)

  const handleOpenUser = () => {
    setOpen(previous => !previous)
  }
  return (
    <div className="flex w-screen p-4 bg-primary h-32">
      <img src="/img/cinica-logo.png" alt="Cínica Logo" />
      
      <nav className="flex w-screen self-center justify-center" aria-label="Navbar">
        <a className="text-white hover:text-yellow-400 text-3xl font-light px-10" href="shop">Tienda</a>
        <a className="text-white hover:text-yellow-400 text-3xl font-light px-10" href="about">Nosotros</a>
        <a className="text-white hover:text-yellow-400 text-3xl font-light px-10" href="outlet">Outlet</a>
        <a className="text-white hover:text-yellow-400 text-3xl font-light px-10" href="contact">Contacto</a>
      </nav>

      <div className="ml-auto self-center flex">
        <a className="flex items-center mr-4" href="cart">
          <ShoppingCartIcon className="text-yellow-400 h-9 pr-2" />
          <p className="text-white text-2xl">3</p>
        </a>

        <div className="flex items-center cursor-pointer" onClick={handleOpenUser}>
          <UserIcon className="text-white h-9 pr-2 " />
        </div>

        {open &&
          <div className="bg-primary ml-auto mt-auto absolute top-32 right-0">

            <a href="settings" className="flex items-center flex-row-reverse p-2">
              <CogIcon className="text-white h-6 text-right"/>
              <p className="text-white text-2xl px-2 text-right">Ajustes</p>
            </a>
            <hr className="opacity-25" />
            <a href="logout" className="flex items-center flex-row-reverse p-2">
              <LogoutIcon className="text-white h-6"/>
              <p className="text-white text-2xl px-2">Cerrar Sesión</p>
            </a>
            
        </div>
        }

      </div>
    </div>
  )
}
