import { MenuItem } from "@/config/menu";
import Link from "next/link";
import { MouseEvent, useState } from "react";
import MobileDropdown from "./MobileDropdown";

interface MobileMenuItemsProps {
  items: MenuItem;
  depthLevel: number;
  showMenu: boolean;
  setShowMenu: (value: boolean) => void;
}

const MobileMenuItems = ({ items, depthLevel, showMenu, setShowMenu }: MobileMenuItemsProps) => {
  const [dropdown, setDropdown] = useState(false);

  const closeDropdown = () => {
    if (dropdown) setDropdown(false);
    if (showMenu) setShowMenu(false);
  };

  const toggleDropdown = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setDropdown((prev) => !prev);
  };

  return (
    <li className="menu-items" onClick={closeDropdown}>
      {items.href && items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}>
            <Link href={items.href} onClick={closeDropdown}>
              {items.label}
            </Link>
            <div onClick={(e) => toggleDropdown(e)}>
              {dropdown ? (
                <span className="arrow-close" />
              ) : (
                <span className="arrow" />
              )}
            </div>
          </button>
          <MobileDropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
            showMenu={showMenu} // <--- Aqui estamos passando showMenu
            setShowMenu={setShowMenu} // <--- Aqui estamos passando setShowMenu
          />
        </>
      ) : !items.href && items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}>
            {items.label}
            <div onClick={(e) => toggleDropdown(e)}>
              {dropdown ? (
                <span className="arrow-close" />
              ) : (
                <span className="arrow" />
              )}
            </div>
          </button>
          <MobileDropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
            showMenu={showMenu}
            setShowMenu={setShowMenu}
          />
        </>
      ) : (
        <Link href={items.href}>{items.label}</Link>
      )}
    </li>
  );
};

export default MobileMenuItems;
