import SidebarContentNav from "./SidebarContentNav";
import SidebarContentUser from "./SidebarContentUser";
import { MenuIcon } from "@heroicons/react/solid";


const SidebarContent = () => {
  return (
    <div className="flex flex-row w-screen flex-grow mt-5">
      <div className="">
        <MenuIcon className="align-middle" />

      </div>
     {/*  <SidebarContentNav/>
      <SidebarContentUser /> */}
    </div>
  );
}

export default SidebarContent