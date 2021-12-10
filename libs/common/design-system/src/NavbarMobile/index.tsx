import { CogIcon, LogoutIcon, ShoppingCartIcon, UserIcon, MenuIcon } from '@heroicons/react/solid'
import React, { useState } from 'react'
import { Link } from '..'

const navItems = [
  {href: "/shop", text: "Tienda"},
  {href: "/about", text: "Nosotros"},
  {href: "/outlet", text: "Outlet"},
  {href: "/contact", text: "Contacto"}
]

export const NavbarMobile = () => {
  const [open, setOpen] = useState(false)
  const [hamburgerOpen, setHamburgerOpen] = useState(false)

  const handleOpenUser = () => {
    setOpen(previous => !previous)
  }

  const handleHamburger = () => {
    setHamburgerOpen(previous => !previous)
  }

  return (
    <div className="z-10 flex flex-col w-screen p-4 bg-primary h-20 sticky">
      <div className="flex flex-row items-center">
        <MenuIcon onClick={handleHamburger} className="text-white h-9 w-9 flex flex-col justify-center mr-auto"/>
        <img src="/img/cinica-logo.png" alt="Cínica Logo" className="w-24 flex flex-col"/>
      </div>
      {hamburgerOpen &&
        
        <div className="absolute top-24 left-0">
          <nav className=" w-screen flex flex-col bg-primary  left-0" aria-label="Navbar">
            {navItems.map((item, index) => <Link key={ index } variant="nav-item" href={item.href} text={item.text} />)}
          </nav>

          <div className="bg-primary flex-row flex left-0 w-full py-2">
            <a className="flex items-center mr-4" href="cart">
              <ShoppingCartIcon className="text-yellow-400 h-9 pr-2" />
              <p className="text-white text-2xl">3</p>
            </a>

            <div className="flex items-center cursor-pointer" onClick={handleOpenUser}>
              <UserIcon className="text-white h-9 pr-2 " />
            </div>

          </div>

          {open &&
            <div className="bg-primary ml-auto mt-auto absolute top-62 left-0">

              <a href="settings" className="flex items-center flex-row p-2">
                <p className="text-white text-2xl px-2 text-right">Ajustes</p>
                <CogIcon className="text-white h-6 text-right"/>
              </a>
              <hr className="opacity-25" />
              <a href="logout" className="flex items-center flex-row p-2">
                <p className="text-white text-2xl px-2">Cerrar Sesión</p>
                <LogoutIcon className="text-white h-6"/>
              </a>
              
          </div>
          }

        </div>

        
      }
    </div>
  )
}
