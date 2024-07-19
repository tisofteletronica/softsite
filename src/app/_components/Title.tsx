import { cn } from "@/lib/utils";

interface TitleProps {
  children: React.ReactNode;
  className?: string;
  classNameLine?: string;
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export function Title({ children, className, classNameLine, type }: TitleProps) {
  const Component = type;

  return (
    <Component
      className={cn(
        "text-3xl leading-9 lg:text-[42px] lg:leading-[50px] font-semibold text-gray",
        className
      )}
    >
      {children}
      <hr className={cn(
        "border-0 w-[69px] h-[5px] bg-orange mt-3",
        classNameLine
      )} />
    </Component>
  )
}
