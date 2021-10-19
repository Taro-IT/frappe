import { ColorSwatchIcon, FolderIcon, ShoppingCartIcon, UsersIcon } from "@heroicons/react/solid";
import SidebarContentUser from "../SidebarContentUser";

const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ')
}

const navigation = [
  { name: 'Órdenes', icon: ShoppingCartIcon, href: 'orders' },
  { name: 'Catálogo', icon: ColorSwatchIcon, href: 'products' },
  { name: 'Categorías', icon: FolderIcon, href: 'categories' },
  { name: 'Usuarios', icon: UsersIcon, href: 'users' },
]

const SidebarContentNav = () => {
  return (
    <>
    <nav className="flex-1 bg-primary flex-row" aria-label="Sidebar">
      {
        navigation.map(item => <a key={item.name} href={item.href} className={classNames('my-2 hover:text-yellow-400 text-white', 'border-transparent text-white hover:text-yellow-400', 'group px-3 py-2 text-sm font-medium border-l-4 flex flex-row')}>
          <item.icon className={classNames('group-hover:text-white', 'mr-3 flex-shrink-0 h-6 w-6')} aria-hidden="true" />
          <p className="text-2xl font-light">{item.name}</p>
        </a>)
      }
    <SidebarContentUser/>
    </nav>
    </>
  );
}

export default SidebarContentNav