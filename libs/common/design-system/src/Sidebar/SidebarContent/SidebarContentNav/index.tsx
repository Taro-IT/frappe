import { ColorSwatchIcon, FolderIcon, ShoppingCartIcon, UsersIcon, ClipboardListIcon } from "@heroicons/react/solid";
import SidebarContentUser from "../SidebarContentUser";
import { useState, useEffect } from "react";

const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ')
}

const adminNavigation = [
  { name: 'Órdenes', icon: ShoppingCartIcon, href: '/orders' },
  { name: 'Productos', icon: ColorSwatchIcon, href: '/products' },
  { name: 'Categorías', icon: FolderIcon, href: '/categories' },
  { name: 'Materiales', icon: ClipboardListIcon, href: '/materials'},
  { name: 'Usuarios', icon: UsersIcon, href: '/users' },
]

const warestoreNavigation = [
  { name: 'Órdenes', icon: ShoppingCartIcon, href: '/orders' },
]

const SidebarContentNav = () => {

  const [role, setRole] = useState(typeof window !== 'undefined' ? localStorage.getItem("accountRole") : "")

  useEffect(() => {
    function userEventHandler(event : any) {
      setRole(event.detail.role);
    }
    window.addEventListener("updateUser", userEventHandler);
    return () => {
      window.removeEventListener("updateUser", userEventHandler)
    }
  }, [])

  return (
    <>
    <nav className="flex-1 bg-primary" aria-label="Sidebar">
      {
        role === "ADMIN" ?
        adminNavigation.map(item => <a key={item.name} href={item.href} className={classNames('my-2 hover:text-yellow-400 text-white', 'border-transparent text-white hover:text-yellow-400', 'group flex items-center px-3 py-2 text-sm font-medium border-l-4')}>
          <item.icon className={classNames('group-hover:text-white', 'mr-3 flex-shrink-0 h-6 w-6')} aria-hidden="true" />
          <p className="text-2xl font-light">{item.name}</p>
        </a>)
        :
        warestoreNavigation.map(item => <a key={item.name} href={item.href} className={classNames('my-2 hover:text-yellow-400 text-white', 'border-transparent text-white hover:text-yellow-400', 'group flex items-center px-3 py-2 text-sm font-medium border-l-4')}>
          <item.icon className={classNames('group-hover:text-white', 'mr-3 flex-shrink-0 h-6 w-6')} aria-hidden="true" />
          <p className="text-2xl font-light">{item.name}</p>
        </a>)
      }
    </nav>
    <SidebarContentUser />
    </>
  );
}

export default SidebarContentNav