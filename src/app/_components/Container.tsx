import { cn } from "@/lib/utils";
import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  type: 'div' | 'section' | 'article' | 'main'
  id?: string;
}

export function Container({ children, className, type, id }: ContainerProps) {
  const Component = type;

  return (
    <Component className={cn(
      'w-full max-w-[1220px] m-auto px-3 lg:px-0',
      className
    )} id={id}>
      {children}
    </Component>
  )
}
