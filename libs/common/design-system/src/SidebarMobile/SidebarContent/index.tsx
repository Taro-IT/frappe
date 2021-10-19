import SidebarContentNav from "./SidebarContentNav";
import SidebarLogo from '../SidebarLogo'
import { MenuIcon } from "@heroicons/react/solid";
import { useState } from "react";

const SidebarContent = () => {
  const [open, setOpen] = useState(Boolean)

  const handleOpenSidebar = () => {
    setOpen(previous => !previous)
  }
  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
          <MenuIcon className="text-white h-10 pl-2" onClick={handleOpenSidebar}/>
          <SidebarLogo />
      </div>
      {open && <div className="flex flex-row">
        <SidebarContentNav/>
        
      </div>}
    </div>
  );
}

export default SidebarContent