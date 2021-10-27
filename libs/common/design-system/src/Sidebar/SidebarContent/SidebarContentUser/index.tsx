import { CogIcon, LogoutIcon, UserCircleIcon } from "@heroicons/react/solid";
import { useState } from "react";


const navigation = [
  { name: 'Ajustes', icon: CogIcon, href: 'settings' },
  { name: 'Cerrar Sesión', icon: LogoutIcon, href: 'logout' },
]

const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ')
}

const SidebarContentUser = () => {

  const [open, setOpen] = useState(false)

  const handleOpenSettings = () => {
    setOpen(previous => !previous)
  }

  return (
    <>
    <div className="p-2 flex">
      <div className="flex-shrink-0 w-full group block cursor-pointer" onClick={handleOpenSettings}>
        <div className="flex items-center flex-row px-2">
          <UserCircleIcon className="text-white w-12 h-12 rounded-full" />
          <div className="align-content-between">
            <p className=" text-xl text-white text-center mb-4 mt-3 ml-2">¡Hola, Doris!</p>
          </div>
        </div>
      </div>
      
    </div>
    {
      open &&
      <div className="flex flex-row bg-primary absolute left-56 bottom-0">
        <nav aria-label="Sidebar">
          {
            navigation.map(item => <a key={item.name} href={item.href} className={classNames('my-2 hover:text-yellow-400 text-white', 'border-transparent text-white hover:text-yellow-400', 'group flex items-center px-3 py-2 text-sm font-medium border-l-4')}>
              <item.icon className={classNames('group-hover:text-white', 'mr-3 flex-shrink-0 h-6 w-6')} aria-hidden="true" />
              <p className="text-2xl font-light">{item.name}</p>
            </a>)
          }
        </nav>
      </div>
    }
    </>
  );
}

export default SidebarContentUser