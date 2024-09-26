import { getCatalogsCachedData } from "@/app/_actions/getActionHome";
import { menu } from "@/config/menu";
import { LuMenu } from "react-icons/lu";
import { Sheet, SheetContent, SheetTrigger } from "../Sheet";
import { Catalogs } from "./Catalogs";
import { Logo } from "./Logo";
import { Menu } from "./Menu";
import MenuItems from "./MenuItems";

export async function Header() {
  const homeCatalogsData = getCatalogsCachedData();

  const [
    catalogs
  ] = await Promise.all([
    homeCatalogsData
  ]);

  const depthLevel = 0;

  return (
    <header className="w-full sticky top-[-86px] lg:top-[-48px] z-[40]">
      <div className="w-full">
        <Catalogs catalogs={catalogs.content} />

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
