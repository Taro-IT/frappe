import { UserCircleIcon } from "@heroicons/react/solid";

const SidebarContentUser = () => {
  return (
    <div className="p-4">
      <a href="#" className="flex-shrink-0 w-full group block">
        <div className="flex items-center flex-col">
          <p className="text-lg font-large text-white text-center mb-4">¡Bienvenida, Doris!</p>
          <UserCircleIcon className="block h-9 w-9 rounded-full bg-white" />
        </div>
      </a>
    </div>
  );
}

export default SidebarContentUser