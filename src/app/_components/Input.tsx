import { cn } from "@/lib/utils";
import { ComponentProps, forwardRef } from "react";
import { RxCrossCircled } from "react-icons/rx";

interface InputProps extends ComponentProps<'input'> {
  name: string
  error?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, name, id, error, className, ...props }, ref) => {
    const inputId = id ?? name

    return (
      <div className="relative">
        <input
          {...props}
          ref={ref}
          name={name}
          id={inputId}
          placeholder=" "
          className={cn(
            'bg-white w-full rounded-b-[10px] border border-lightGray px-[15px] h-[39px] text-gray peer placeholder-shown:pt-0 focus:border-orange transition-all outline-none tracking-[1px]',
            error && '!border-red-700',
            className,
          )}
        />

        <label
          htmlFor={inputId}
          className="absolute text-[11px] left-[11px] top-[-8px] pointer-events-none px-[7px] bg-white text-gray/60 tracking-[1.5px] peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-[15px] peer-placeholder-shown:top-2 transition-all"
        >
          {placeholder}
        </label>

        {error && (
          <div className="flex gap-2 items-center mt-2 text-red-700">
            <RxCrossCircled />
            <span className="text-xs">{error}</span>
          </div>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'
