import { menu } from "@/config/menu";
import Link from "next/link";
import { LuMenu } from "react-icons/lu";
import { TbDownload } from "react-icons/tb";
import { Sheet, SheetContent, SheetTrigger } from "../Sheet";
import { Logo } from "./Logo";
import { Menu } from "./Menu";
import MenuItems from "./MenuItems";

export function Header() {
  const depthLevel = 0;

  return (
    <header className="w-full sticky top-[-56px] lg:top-[-48px] z-[40]">
      <div className="w-full">
        <div className="bg-orange-gradient">
          <div className="w-full max-w-[1220px] m-auto h-full">
            <div
              className="flex flex-wrap justify-center items-center w-[94%] lg:w-full max-w-[865px] bg-orange rounded-tl-[40px] ml-auto min-h-[60px] lg:min-h-[65px] lg:justify-end text-white py-2 lg:py-0 lg:pb-[10px]"
            >
              <span className="font-bold lg:mr-[103px] tracking-[1.6px] text-sm lg:text-base">BAIXE NOSSOS CATÁLOGOS</span>
              <div className="flex">
                  <Link
                      href="https://drive.google.com/file/d/1xym6W-fwsOvyT4pwUsI53HS_o4k8qXd8/view"
                      target="_blank"
                      className="mr-5 font-medium text-sm lg:text-base lg:mr-[52px] flex items-center tracking-[1.6px] gap-1"
                  >
                    AUTOMOTIVO
                    <TbDownload className="w-[20px] h-[20px] lg:w-[27px] lg:h-[27px]" />
                  </Link>
                  <Link
                    href="https://drive.google.com/file/d/1YPExzbjTt5CjOba1mvEWdHqv2FjOs3ER/view"
                    target="_blank"
                    className="font-medium text-sm lg:text-base lg:mr-[52px] flex items-center tracking-[1.6px] gap-1"
                  >
                    MONTAGEM
                    <TbDownload className="w-[20px] h-[20px] lg:w-[27px] lg:h-[27px]" />
                  </Link>
              </div>
            </div>
          </div>
        </div>

        <nav
          className="bg-white shadow-[0_3px_6px_#00000029] w-full max-w-[1220px] m-auto px-7 flex justify-between
          lg:mt-[-13px] items-center relative z-[1] flex-wrap py-5 lg:py-0"
        >
          <div>
            <Logo className="w-[169px]" />
          </div>

          <div>
            <div className="hidden lg:block">
              <nav className="desktop-nav">
                <ul className="menus">
                  {menu.map((menu, index) => {
                    return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
                  })}
                </ul>
              </nav>
            </div>

            <Sheet>
              <SheetTrigger asChild>
                <button
                  className="shrink-0 lg:hidden"
                >
                  <LuMenu className="h-8 w-8" />
                  <span className="sr-only">Toggle navigation menu</span>
                </button>
              </SheetTrigger>
              <SheetContent side="left" className="bg-white">
                <nav className="grid gap-6 text-base font-medium">
                  <Logo className="w-[169px]" />

                  <Menu />
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  )
}
