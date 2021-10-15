import { ColorSwatchIcon, ShoppingCartIcon, UsersIcon } from "@heroicons/react/solid";

const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ')
}

const navigation = [
  { name: 'Órdenes', icon: ShoppingCartIcon, href: 'orders' },
  { name: 'Catalogo', icon: ColorSwatchIcon, href: '#' },
  { name: 'Usuarios', icon: UsersIcon, href: '#' },
]

const SidebarContentNav = () => {
  return (
    <nav className="flex-1 bg-primary" aria-label="Sidebar">
      {
        navigation.map(item => <a key={item.name} href={item.href} className={classNames('hover:text-yellow-400 text-white', 'border-transparent text-white hover:text-yellow-400', 'group flex items-center px-3 py-2 text-sm font-medium border-l-4')}>
          <item.icon className={classNames('group-hover:text-white', 'mr-3 flex-shrink-0 h-6 w-6')} aria-hidden="true" />
          {item.name}
        </a>)
      }
    </nav>
  );
}

export default SidebarContentNav