'use client'
import { cn } from '@/lib/utils';
import * as RdxSelect from '@radix-ui/react-select';
import { useState } from 'react';
import { LuChevronDown, LuChevronUp } from 'react-icons/lu';
import { RxCrossCircled } from 'react-icons/rx';

interface SelectProps {
  className?: string;
  error?: string;
  placeholder?: string;
  options: {
    value: string;
    label: string;
  }[];
  value?: string;
  onChange?(value: string): void;
}

export function Select({ className, error, options, placeholder, onChange, value }: SelectProps) {
  const [selectedValue, setSelectedValue] = useState(value ?? '');

  function handleSelect(value: string) {
    setSelectedValue(value);
    onChange?.(value);
  }

  return (
    <div>
      <div className="relative">
        <label className={cn(
          "absolute z-10 top-1/2 -translate-y-1/2 left-3 text-lightGray pointer-events-none mt-[-3px] text-[15px] tracking-[1.5px]",
          selectedValue && "text-[10px] left-[13px] top-2 transition-all translate-y-0 text-lightGray"
        )}>
          {placeholder}
        </label>

        <RdxSelect.Root value={value} onValueChange={handleSelect}>
          <RdxSelect.Trigger
            className={cn(
              'bg-white w-full rounded-bl-[10px] rounded-br-[10px] px-3 h-[40px] text-gray transition-all outline-none text-left relative pt-[12px] tracking-[1px] text-[14px]',
              error && '!border-red-900',
              className,
            )}
          >
            <RdxSelect.Value />

            <RdxSelect.Icon className="absolute right-3 top-1/2 -translate-y-1/2">
              <LuChevronDown className='w-5 h-5 text-gray' />
            </RdxSelect.Icon>
          </RdxSelect.Trigger>

          <RdxSelect.Portal>
            <RdxSelect.Content className="z-[99] overflow-hidden bg-white rounded-2xl shadow-[0px_11px_20px_0px_rgba(0,0,0,0.10)]">
              <RdxSelect.ScrollUpButton
                className="flex items-center justify-center h-[25px] bg-white text-gray cursor-default"
              >
                <LuChevronUp />
              </RdxSelect.ScrollUpButton>

              <RdxSelect.Viewport className="p-2">
                {options.map(option => (
                  <RdxSelect.Item
                    key={option.value}
                    className="p-2 text-gray-800 text-[15px] data-[state=checked]:font-bold outline-none data-[highlighted]:bg-lighterGray rounded-lg transition-colors cursor-pointer "
                    value={option.value}
                  >
                    <RdxSelect.ItemText>{option.label}</RdxSelect.ItemText>
                  </RdxSelect.Item>
                ))}
              </RdxSelect.Viewport>

              <RdxSelect.ScrollDownButton
                className="flex items-center justify-center h-[25px] bg-white text-gray-800 cursor-default"
              >
                <LuChevronDown />
              </RdxSelect.ScrollDownButton>
            </RdxSelect.Content>
          </RdxSelect.Portal>
        </RdxSelect.Root>
      </div>

      {error && (
        <div className="flex gap-2 items-center mt-2 text-red-900">
          <RxCrossCircled />
          <span className="text-xs">{error}</span>
        </div>
      )}
    </div>
  )
}
