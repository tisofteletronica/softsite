'use client'
import { cn } from '@/lib/utils';
import * as AccordionDemo from '@radix-ui/react-accordion';
import React from 'react';
import { IoChevronDownSharp } from 'react-icons/io5';

interface AccordionProps {
  children: React.ReactNode;
}

const Accordion = ({ children }: AccordionProps) => {
  return (
    (
      <AccordionDemo.Root
        className="bg-mauve6 w-full"
        type="single"
        defaultValue="item-0"
        collapsible
      >
        {children}
      </AccordionDemo.Root>
    )
  )
}

interface AccordionItemProps {
  children: React.ReactNode;
  className?: string;
  value: string;
  [key: string]: any;
}
export const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(({ children, className, value, ...props }, forwardedRef) => (
  <AccordionDemo.Item
    className={cn(
      'mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10',
      className
    )}
    {...props}
    ref={forwardedRef}
    value={value}
  >
    {children}
  </AccordionDemo.Item>
));
AccordionItem.displayName = 'AccordionItem'

interface AccordionTriggerProps {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}
export const AccordionTrigger = React.forwardRef<HTMLButtonElement, AccordionTriggerProps>(({ children, className, ...props }, forwardedRef) => (
  <AccordionDemo.Header className="flex">
    <AccordionDemo.Trigger
      className={cn(
        'group text-[18px] lg:text-[24px] font-semibold text-gray group flex flex-1 items-center gap-5 bg-white leading-[20px] lg:leading-[29px] outline-none cursor-pointer pb-5 uppercase focus:outline-none  data-[state=open]:text-orange text-left',
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      <div>
        {children}
        <hr className='h-[3px] w-[40px] bg-gray border-0 mt-[6px] group-data-[state=open]:bg-orange' />
      </div>
      <div className='flex-1'>
        <IoChevronDownSharp
          size={33}
          className="transition-transform duration-300 group-data-[state=open]:rotate-180 mt-[-8px]"
          aria-hidden
        />
      </div>
    </AccordionDemo.Trigger>
  </AccordionDemo.Header>
));
AccordionTrigger.displayName = 'AccordionTrigger'

interface AccordionContentProps {
  children: React.ReactNode;
  className?: string;
  [key: string]: any; // Aceitar outras props
}

export const AccordionContent = React.forwardRef<HTMLDivElement, AccordionContentProps>(({ children, className, ...props }, forwardedRef) => (
  <AccordionDemo.Content
    className={cn(
      'data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[15px] data-[state=open]:rounded-b-[45px] px-0 transition-all',
      className
    )}
    {...props}
    ref={forwardedRef}
  >
    <div className="py-[15px] px-5">{children}</div>
  </AccordionDemo.Content>
));

AccordionContent.displayName = 'AccordionContent'

export default Accordion;
