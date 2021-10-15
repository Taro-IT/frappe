import SidebarContentNav from "./SidebarContentNav";
import SidebarContentUser from "./SidebarContentUser";

const SidebarContent = () => {
  return (
    <div className="flex flex-col flex-grow mt-5">
      <SidebarContentNav/>
      <SidebarContentUser />
    </div>
  );
}

export default SidebarContent