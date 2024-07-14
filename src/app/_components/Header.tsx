import Image from "next/image";
import Link from "next/link";
import { TbDownload } from "react-icons/tb";
import Logo from "../../../public/logo.png";
import { Menu } from "./Menu";

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
                    mt-[-13px] items-center relative z-[1]"
                >
                    <div>
                        <Link href="/">
                            <Image src={Logo} alt="Logo Soft" />
                        </Link>
                    </div>

                    <div>
                        <Menu />
                    </div>
                </nav>
            </div>
        </header>
    )
}