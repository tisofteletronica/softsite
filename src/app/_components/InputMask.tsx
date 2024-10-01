import { useMask } from '@react-input/mask';
import { Input } from './Input';

interface InputMaskProps {
  mask: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  name: string;
  placeholder: string;
}

export function InputMask({ mask, value, onChange, error, name, placeholder }: InputMaskProps) {
  const inputRef = useMask({ mask: mask, replacement: { _: /\d/ }, showMask: true });

  return (
    <>
      <Input name={name} ref={inputRef} value={value} onChange={onChange} error={error} placeholder={placeholder} />
    </>
  );
}
