import React from "react";

interface IconProps {
  children: React.ReactNode;
  label?: string;
  color?: string;
}

export function Icon({ children, label, color }: IconProps) {
  return (
    <div className="flex gap-[22px] w-full max-w-[376px] items-center">
      <div
        style={{ borderColor: color }}
        className="w-[100px] h-[100px] flex-[0_0_100px] lg:w-[115px] lg:h-[115px] lg:flex-[0_0_115px] rounded-tr-[20px] rounded-bl-[20px] border-[3px] lg:rounded-tr-[40px] lg:rounded-bl-[40px] lg:border-[4px] border-orange flex items-center justify-center p-2 lg:p-0"
      >
        {children}
      </div>

      <div className="text-[20px] lg:text-[21px] font-semibold text-black leading-[25px] lg:leading-[27px] tracking-[1.5px] lg:tracking-[2.2px]">
        {label}
      </div>
    </div>
  )
}
