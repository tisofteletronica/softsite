import React from "react";

interface MeasureProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

export function Measure({ icon, label, value }: MeasureProps) {
  return (
    <div className="flex gap-4 items-center w-fit">
      <div className="w-7 flex justify-center items-center">
        {icon}
      </div>
      <p className="text-[17px] font-light leading-[24px] tracking-[1.7px]">
        <strong className="text-blue font-medium">{label}</strong>
        <span> {value}</span>
      </p>
    </div>
  )
}
