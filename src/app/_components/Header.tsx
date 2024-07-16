import Image from "next/image";
import Link from "next/link";
import { LuMenu } from "react-icons/lu";
import { TbDownload } from "react-icons/tb";
import Logo from "../../../public/logo.png";
import { Menu } from "./Menu";
import { Sheet, SheetContent, SheetTrigger } from "./Sheet";

export function Header() {
  return (
    <header className="w-full">
      <div className="w-full">
        <div className="bg-orange-gradient">
          <div className="w-full max-w-[1220px] m-auto h-full">
            <div
                className="flex flex-wrap justify-center items-center w-full max-w-[865px] bg-orange rounded-tl-[40px] ml-auto min-h-[65px] lg:justify-end text-white py-3 lg:py-0 lg:pb-[10px]"
            >
              <span className="font-bold lg:mr-[103px] tracking-[1.6px] text-sm lg:text-base">BAIXE NOSSOS CATÁLOGOS</span>
              <div className="flex">
                  <Link
                      href="#"
                      target="_blank"
                      className="mr-5 font-medium text-sm lg:text-base lg:mr-[52px] flex items-center tracking-[1.6px] gap-1"
                  >
                    AUTOMOTIVO
                    <TbDownload className="w-[20px] h-[20px] lg:w-[27px] lg:h-[27px]" />
                  </Link>
                  <Link
                    href="#"
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
            <Link href="/">
              <Image src={Logo} alt="Logo Soft" />
            </Link>
          </div>

          <div>
            <div className="hidden lg:block">
              <Menu />
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
                  <Link
                    href="/"
                    className="flex items-center gap-2 text-lg font-semibold md:text-base w-[130px]"
                  >
                    <Image src={Logo} alt="Logo Soft" />
                  </Link>

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
