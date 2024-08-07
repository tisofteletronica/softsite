import Link from "next/link";
import React from "react";
import { Car } from "./Icons/Car";

interface CardLineSearchProps {
  category: string;
  title: string;
  icon: React.ReactNode;
  link: string;
}

export function CardLineSearch({ category, title, icon, link}: CardLineSearchProps) {
  return (
    <article className="bg-white group shadow-[0px_3px_6px_#00000029] rounded-[0_40px] w-full block">
      <div className="rounded-[0_40px] h-[90px] flex items-center justify-center bg-lightGray group-hover:bg-blue transition-all">
        <div className="flex items-center gap-1">
          <div className="w-[55px] relative h-full">
            {icon}
          </div>

          <div className="w-full max-w-[180px]">
            <h2 className="uppercase transition-all text-left text-[16px] font-bold leading-[17px] my-[12px] text-gray group-hover:text-white group-hover:font-bold px-[11px]">
              {category}
            </h2>
          </div>
        </div>
      </div>

      <div className="my-[12px] px-[11px] flex items-center justify-center gap-3">
        <div><Car className="w-[60px] text-gray group-hover:text-blue" /></div>
        <h2 className="uppercase transition-all text-left text-[15px] font-bold leading-[18px] text-gray group-hover:text-blue">
          {title}
        </h2>
      </div>

      <div className="mb-7
      ">
        <Link
          href={link}
          className="m-auto py-[7px] px-[20px] bg-blue rounded-[10px_0] text-white font-medium tracking-[1.6px] max-w-[130px] flex items-center justify-center text-[14px] hover:bg-blue/70 transition-all"
        >
          VER MAIS
        </Link>
      </div>
    </article>
  )
}
