import { cn } from "@/lib/utils";

interface TitleFooterProps {
  children: React.ReactNode;
  className?: string;
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export function TitleFooter({ children, className, type }: TitleFooterProps) {
  const Component = type;

  return (
    <Component
      className={cn(
        "text-white text-[21px] font-semibold",
        className
      )}
    >
      {children}
      <hr className="border-0 m-0 w-10 h-[3px] bg-orange" />
    </Component>
  )
}
