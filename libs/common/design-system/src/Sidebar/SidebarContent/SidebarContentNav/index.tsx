import { ColorSwatchIcon, FolderIcon, ShoppingCartIcon, UsersIcon, ClipboardListIcon } from "@heroicons/react/solid";
import SidebarContentUser from "../SidebarContentUser";

const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ')
}

const navigation = [
  { name: 'Órdenes', icon: ShoppingCartIcon, href: 'orders' },
  { name: 'Productos', icon: ColorSwatchIcon, href: 'products' },
  { name: 'Categorías', icon: FolderIcon, href: 'categories' },
  { name: 'Materiales', icon: ClipboardListIcon, href: 'materials'},
  { name: 'Usuarios', icon: UsersIcon, href: '#' },
]

const SidebarContentNav = () => {
  return (
    <>
    <nav className="flex-1 bg-primary" aria-label="Sidebar">
      {
        navigation.map(item => <a key={item.name} href={item.href} className={classNames('my-2 hover:text-yellow-400 text-white', 'border-transparent text-white hover:text-yellow-400', 'group flex items-center px-3 py-2 text-sm font-medium border-l-4')}>
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