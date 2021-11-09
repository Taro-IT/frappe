import React, { useState } from 'react'
import { CogIcon, LogoutIcon, ShoppingCartIcon, UserIcon } from "@heroicons/react/solid";
import { Link } from '..';
import { Router, useRouter } from 'next/router';
const navItems = [
  {href: "store", text: "Tienda"},
  {href: "about", text: "Nosotros"},
  {href: "outlet", text: "Outlet"},
  {href: "contact", text: "Contacto"}
]

export const Navbar = () => {
  const [open, setOpen] = useState(false)
  const router = useRouter();
  const handleOpenUser = () => {
    setOpen(previous => !previous)
  }
  const redirectToHome = () => router.push("/");
  return (
    <div className="z-10 flex w-full p-4 bg-black h-20 fixed mb-auto ">
      <img src="/img/cinica-logo.png" className="cursor-pointer w-24" alt="Cínica Logo" onClick={redirectToHome}/>
      
      <nav className="flex w-full self-center justify-center" aria-label="Navbar">
        {navItems.map((item, index) => <Link key={ index } variant="nav-item" href={item.href} text={item.text} />)}
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
