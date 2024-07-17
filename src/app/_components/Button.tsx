import { cn } from "@/lib/utils";
import { ComponentProps } from "react";
import { Spinner } from "./Spinner";


interface ButtonProps extends ComponentProps<'button'> {
  isLoading?: boolean;
  variant?: 'danger' | 'ghost';
}

export function Button({ className, isLoading, disabled, children, variant, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      disabled={disabled || isLoading}
      className={cn(
        'bg-orange hover:bg-orange/70 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed px-[18px] h-10 rounded-tl-[10px] rounded-br-[10px] font-medium text-white transition-all tracking-[1.6px] flex items-center justify-center',
        variant === 'danger' && 'bg-red-900 hover:bg-red-800',
        variant === 'ghost' && 'bg-transparent border border-gray-800 text-gray-800 hover:bg-gray-800/5',
        className
      )}
    >
      {!isLoading && children}
      {isLoading && <Spinner className="w-5 h-5" />}
    </button>
  )
}
