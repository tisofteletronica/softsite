import { MenuItem } from "@/config/menu";
import MobileMenuItems from "./MobileMenuItems";

interface MobileDropdownProps {
  submenus: MenuItem[];
  dropdown: boolean;
  depthLevel: number;
  showMenu: boolean;
  setShowMenu: (value: boolean) => void;
}

const MobileDropdown = ({ submenus, dropdown, depthLevel, showMenu, setShowMenu }: MobileDropdownProps) => {
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";

  return (
    <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
      {submenus.map((submenu, index) => (
        <MobileMenuItems
          items={submenu}
          key={index}
          depthLevel={depthLevel}
          showMenu={showMenu}
          setShowMenu={setShowMenu}
        />
      ))}
    </ul>
  );
};

export default MobileDropdown;
