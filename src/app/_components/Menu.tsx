import * as Menubar from '@radix-ui/react-menubar';
import Link from 'next/link';
import { GoChevronDown, GoChevronRight } from 'react-icons/go';

export function Menu() {
    return (
        <Menubar.Root className='flex gap-[50px]'>
            <Menubar.Menu>
                <Menubar.Trigger className="MenubarItem MenuItem" asChild>
                    <Link href="#">
                        HOME
                    </Link>
                </Menubar.Trigger>
            </Menubar.Menu>

            <Menubar.Menu>
                <Menubar.Trigger className="MenubarItem MenuItem" asChild>
                    <Link href="#" className='flex items-center'>
                        DIVISÕES
                        <div>
                            <GoChevronDown size={19} />
                        </div>
                    </Link>
                </Menubar.Trigger>

                <Menubar.Portal>
                    <Menubar.Content className="MenubarContent bg-white shadow-[0px_3px_6px_#00000029] flex flex-col pt-8 pb-4 mt-[-3px]" align="start" sideOffset={5} alignOffset={-3}>
                        <Menubar.Item className="MenubarItem MenubarItemSub" asChild>
                            <Link href="#">
                                AUTOMOTIVO
                            </Link>
                        </Menubar.Item>
                        <Menubar.Item className="MenubarItem MenubarItemSub" asChild>
                            <Link href="#">
                                MONTAGEM
                            </Link>
                        </Menubar.Item>
                        <Menubar.Item className="MenubarItem MenubarItemSub" asChild>
                            <Link href="#">
                                LEDS
                            </Link>
                        </Menubar.Item>
                        
                        <Menubar.Sub>
                            <Menubar.SubTrigger className="MenubarItem MenubarItemSub MenubarSubTrigger">
                                <Link href="#" className='flex items-center'>
                                    CONECTIVIDADE
                                    <div>
                                        <GoChevronRight size={17} />
                                    </div>
                                </Link>
                            </Menubar.SubTrigger>
                            <Menubar.Portal>
                                <Menubar.SubContent className="MenubarSubContent bg-white shadow-[0px_3px_6px_#00000029] pt-4 pb-3" alignOffset={-5}>
                                    <Menubar.Item className="MenubarItem MenubarItemSub">
                                        <Link href="http://www.google.com">
                                            SISTEMAS DE CONEXÃO BLE
                                        </Link>
                                    </Menubar.Item>
                                    <Menubar.Item className="MenubarItem MenubarItemSub">
                                        <Link href="http://www.google.com">
                                            CONHEÇA NOSSOS PRODUTOS
                                        </Link>
                                    </Menubar.Item>
                                </Menubar.SubContent>
                            </Menubar.Portal>
                        </Menubar.Sub>
                    </Menubar.Content>
                </Menubar.Portal>
            </Menubar.Menu>

            <Menubar.Menu>
                <Menubar.Trigger className="MenubarItem MenuItem" asChild>
                    <Link href="#">
                        CONTATO
                    </Link>
                </Menubar.Trigger>
            </Menubar.Menu>

            <Menubar.Menu>
                <Menubar.Trigger className="MenubarItem MenuItem" asChild>
                    <Link href="#">
                        UNIDADES
                    </Link>
                </Menubar.Trigger>
            </Menubar.Menu>

            <Menubar.Menu>
                <Menubar.Trigger className="MenubarItem MenuItem" asChild>
                    <Link href="#">
                        SOBRE NÓS
                    </Link>
                </Menubar.Trigger>
            </Menubar.Menu>
        </Menubar.Root>
    )
}