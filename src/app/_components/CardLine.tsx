import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

interface CardLineProps {
  title: string;
  icon: React.ReactNode;
  link: string;
  className?: string;
  classNameText?: string;
}

export function CardLine({ title, icon, link, className, classNameText }: CardLineProps) {
  return (
    <Link href={link} className="bg-white group shadow-[0px_3px_6px_#00000029] rounded-[0_40px] w-full block min-h-[250px]">
      <div
        className={cn(
          'rounded-[0_40px] h-[175px] flex items-center justify-center bg-lightGray transition-all',
          className
        )}
      >
        {icon}
      </div>

      <h2
        className={cn(
          'uppercase transition-all text-center text-[18px] font-medium leading-[22px] my-[12px] text-gray group-hover:font-bold px-[11px]',
          classNameText
        )}
      >
        {title}
      </h2>
    </Link>
  )
}
