// "@react-input/mask": "^1.2.10",
// "react-input-mask": "3.0.0-alpha.2",
import { cn } from '@/lib/utils';
import { createDynamicNumberMaskGenerator, MaskedInput } from 'react-hook-mask';
import { RxCrossCircled } from 'react-icons/rx';

interface InputMaskProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
  name: string;
  placeholder?: string;
  className?: string;
  id?: string;
}

export function InputMaskCustom({ id, value, onChange, error, name, placeholder, className }: InputMaskProps) {
  const inputId = id ?? name
  const mask1 = '(99) 9999-9999';
  const mask2 = '(99) 99999-9999';

  const maskGenerator = createDynamicNumberMaskGenerator(mask1, mask2);

  return (
    <div className='relative'>
      <MaskedInput
        maskGenerator={maskGenerator}
        value={value}
        onChange={onChange}
        className={cn(
          'bg-white w-full rounded-b-[10px] border border-lightGray px-[15px] h-[39px] text-gray peer placeholder-shown:pt-0 focus:border-orange transition-all outline-none tracking-[1px]',
          error && '!border-red-700',
          className,
        )}
        placeholder=""
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
  );
}

