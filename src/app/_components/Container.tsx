import { cn } from "@/lib/utils";
import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  type: 'div' | 'section' | 'article' | 'main'
}

export function Container({ children, className, type }: ContainerProps) {
  const Component = type;

  return (
    <Component className={cn(
      'w-full max-w-[1220px] m-auto px-3 lg:px-0',
      className
    )}>
      {children}
    </Component>
  )
}
