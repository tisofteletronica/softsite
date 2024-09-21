'use client'
import { MENU } from '@/config/constants';
import { cn } from '@/lib/utils';
import * as Menubar from '@radix-ui/react-menubar';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { GoChevronDown, GoChevronRight } from 'react-icons/go';

export function Menu() {
  const pathname = usePathname();

  return (
    <Menubar.Root className='flex flex-wrap flex-col lg:flex-row lg:gap-[50px] lg:mr-5'>
      {MENU.map((menu) => (
        <Menubar.Menu key={menu.label}>
          <Menubar.Trigger
            className={
              cn(
                'MenubarItem MenuItem',
                pathname === menu.href && 'menuActive'
              )
            }
            asChild
          >
            {menu.sub ? (
              <div className='flex items-center cursor-pointer'>
                {menu.label}
                <div>
                  <GoChevronDown size={19} />
                </div>
              </div>
            ) : (
              <Link href={menu.href}>
                {menu.label}
              </Link>
            )}
          </Menubar.Trigger>

            {menu.sub && (
              <Menubar.Portal>
                <Menubar.Content className="MenubarContent bg-white shadow-[0px_3px_6px_#00000029] flex flex-col py-4 lg:pt-8 lg:pb-4 mt-[-5px] z-[51] lg:z-[30]" align="center" sideOffset={5} alignOffset={-3}>
                  {menu.sub?.map((submenu) => (
                    <React.Fragment key={submenu.label}>
                      {submenu.sub ? (
                        <Menubar.Sub key={submenu.label}>
                          <Menubar.SubTrigger className="MenubarItem MenubarItemSub MenubarSubTrigger">
                            <div className='flex items-center cursor-pointer'>
                              <Link href={submenu.href} >
                                {submenu.label}
                              </Link>
                              <div>
                                <GoChevronRight size={17} />
                              </div>
                            </div>
                          </Menubar.SubTrigger>

                          <Menubar.Portal>
                            <Menubar.SubContent className="MenubarSubContent bg-orange lg:bg-white shadow-[0px_3px_6px_#00000029] pt-4 pb-3 z-[51] lg:z-[30]">
                              {submenu.sub?.map((subsub) => (
                                <Menubar.Item key={subsub.label} className="MenubarItem MenubarItemSub MenubarItemSubSub" asChild>
                                  <Link href={subsub.href}>
                                    {subsub.label}
                                  </Link>
                                </Menubar.Item>
                              ))}
                            </Menubar.SubContent>
                          </Menubar.Portal>
                        </Menubar.Sub>
                      ) : (
                          <Menubar.Item key={submenu.label} className="MenubarItem MenubarItemSub" asChild>
                            <Link href={submenu.href}>
                              {submenu.label}
                            </Link>
                          </Menubar.Item>
                      )}
                    </React.Fragment>
                  ))}
                </Menubar.Content>
              </Menubar.Portal>
            )}

        </Menubar.Menu>
      ))}
    </Menubar.Root>
  )
}
