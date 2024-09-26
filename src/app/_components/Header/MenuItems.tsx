'use client'
import { MenuItem } from "@/config/menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { GoChevronDown, GoChevronRight } from "react-icons/go";
import Dropdown from "./Dropdown";

interface MenuItemsProps {
  items: MenuItem;
  depthLevel: number;
}

const MenuItems = ({ items, depthLevel }: MenuItemsProps) => {
  const [dropdown, setDropdown] = useState(false);
  let ref = useRef<HTMLLIElement | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handler = (event: MouseEvent | TouchEvent) => {
      if (dropdown && ref.current && !ref.current.contains(event.target as Node)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  const onMouseEnter = () => {
    setDropdown(true);
  };

  const onMouseLeave = () => {
    setDropdown(false);
  };

  const toggleDropdown = () => {
    setDropdown((prev) => !prev);
  };

  const closeDropdown = () => {
    dropdown && setDropdown(false);
  };

  return (
    <li
      className={
        cn(
          'menu-items',
          pathname === items.href && 'menuActive'
        )
      }
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={closeDropdown}>
      {items.href && items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => toggleDropdown()}>
            <Link href={items.href}>{items.label}</Link>
            {depthLevel > 0 ? <GoChevronRight size={17} /> : <GoChevronDown size={19} />}
          </button>
          <Dropdown depthLevel={depthLevel} submenus={items.submenu} dropdown={dropdown} />
        </>
      ) : !items.href && items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}>
            {items.label}
              {depthLevel > 0 ? <GoChevronRight size={17} /> : <GoChevronDown size={19} />}
          </button>
          <Dropdown depthLevel={depthLevel} submenus={items.submenu} dropdown={dropdown} />
        </>
      ) : (
        <Link href={items.href}>{items.label}</Link>
      )}
    </li>
  );
};

export default MenuItems;
