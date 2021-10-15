import SidebarContent from "./SidebarContent";
import SidebarLogo from "./SidebarLogo";


export const Sidebar = () => (
  <div className="flex flex-col py-4 bg-primary h-full overflow-y-auto w-56">
    <SidebarLogo />
    <SidebarContent />
  </div>
);
