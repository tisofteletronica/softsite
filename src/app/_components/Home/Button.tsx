import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";


interface ButtonProps {
  children: React.ReactNode;
  link: string;
  className?: string;
}

export function Button({ children, link, className }: ButtonProps) {
  return (
    <Link
      href={link}
      className={cn(
        "h-[63px] bg-orange shadow-[1px_4px_8px_#0000006E] border-[4px] border-white rounded-tl-[10px] rounded-br-[10px] inline-flex items-center justify-center text-white text-xl lg:text-[29px] font-semibold px-5 lg:px-7",
        className
      )}
    >
      {children}
    </Link>
  )
}
