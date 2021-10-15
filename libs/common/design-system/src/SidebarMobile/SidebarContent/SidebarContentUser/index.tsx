import { UserCircleIcon } from "@heroicons/react/solid";

const SidebarContentUser = () => {
  return (
    <div className="p-2">
      
      <a href="#" className="flex-shrink-0 w-full group block">
        <div className="flex items-center flex-row px-2">
          <UserCircleIcon className="text-white w-12 h-12 rounded-full" />
          <div className="align-content-between">
            <p className=" text-xl text-white text-center mb-4 mt-3 ml-2">¡Hola, Doris!</p>
          </div>
        </div>
      </a>
    </div>
  );
}

export default SidebarContentUser