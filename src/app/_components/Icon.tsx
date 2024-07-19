import React from "react";

interface IconProps {
  children: React.ReactNode;
  label: string;
}

export function Icon({ children, label }: IconProps) {
  return (
    <div className="flex gap-[22px] w-full max-w-[376px] items-center">
      <div className="w-[100px] h-[100px] flex-[0_0_100px] lg:w-[133px] lg:h-[133px] lg:flex-[0_0_133px] rounded-tr-[20px] rounded-bl-[20px] border-[3px] lg:rounded-tr-[40px] lg:rounded-bl-[40px] lg:border-[4px] border-orange flex items-center justify-center p-5 lg:p-0">
        {children}
      </div>

      <div className="text-[22px] lg:text-[25px] font-semibold text-black leading-[29px] lg:leading-[33px] tracking-[1.5px] lg:tracking-[2.2px]">
        {label}
      </div>
    </div>
  )
}
