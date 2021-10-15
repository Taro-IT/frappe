import SidebarContent from "./SidebarContent";
import SidebarLogo from "./SidebarLogo";

export const Sidebar = () => (
  <div className="flex flex-col py-4 bg-primary max-w-min h-screen absolute">
    <SidebarLogo />
    <SidebarContent />
  </div>
);
