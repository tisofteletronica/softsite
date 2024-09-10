import { titleRepresentativesMapper } from '@/lib/mapers';
import { cn } from '@/lib/utils';
import * as AccordionDemo from '@radix-ui/react-accordion';
import React from 'react';
import { IoChevronDownSharp } from 'react-icons/io5';
import { RepresentativeItemProps } from '../contato/_components/Representatives';
import { CardRepresentatives } from './CardRepresentatives';

interface AccordionProps {
  options: RepresentativeItemProps[]
}

const Accordion = ({ options }: AccordionProps) => (
  <AccordionDemo.Root
    className="bg-mauve6 w-full rounded-md mb-[-1px]"
    type="single"
    defaultValue="item-0"
    collapsible
  >
    {options?.map((item, index) => (
      <AccordionItem key={item.id} value={`item-${index}`}>
        <AccordionTrigger>{titleRepresentativesMapper(item.estadosRepresentantes)}</AccordionTrigger>
        <AccordionContent>
          <CardRepresentatives
            representante={item.representante}
            contato={item.contato}
            whatsapp={item.whatsapp}
            phone1={item.phone1}
            email={item.email}
          />
        </AccordionContent>
      </AccordionItem>
    ))}
  </AccordionDemo.Root>
);

interface AccordionItemProps {
  children: React.ReactNode;
  className?: string;
  value: string;
  [key: string]: any;
}
const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(({ children, className, value, ...props }, forwardedRef) => (
  <AccordionDemo.Item
    className={cn(
      'mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10 ',
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
const AccordionTrigger = React.forwardRef<HTMLButtonElement, AccordionTriggerProps>(({ children, className, ...props }, forwardedRef) => (
  <AccordionDemo.Header className="flex">
    <AccordionDemo.Trigger
      className={cn(
        'text-[18px] lg:text-[24px] font-semibold text-gray hover:bg-[#F7F6FB] group flex flex-1 items-center gap-5 bg-white leading-[20px] lg:leading-[29px] outline-none cursor-pointer border border-gray border-t-0 rounded-bl-[45px] rounded-br-[45px] ml-[-1px] mr-[-1px] uppercase focus:outline-none data-[state=open]:bg-gray data-[state=open]:text-white data-[state=open]:rounded-bl-[0] data-[state=open]:rounded-br-[0] data-[state=open]:rounded-tl-[45px] text-left',
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      <div className='px-5 lg:px-[110px] py-10'>
        {children}
        <hr className='h-[3px] w-[40px] bg-orange border-0 mt-[6px]' />
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

const AccordionContent = React.forwardRef<HTMLDivElement, AccordionContentProps>(({ children, className, ...props }, forwardedRef) => (
  <AccordionDemo.Content
    className={cn(
      'data-[state=open]:bg-gray data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[15px] data-[state=open]:rounded-br-[45px] transition-all',
      className
    )}
    {...props}
    ref={forwardedRef}
  >
    <div className="py-[15px] px-0 lg:px-[110px]">{children}</div>
  </AccordionDemo.Content>
));

AccordionContent.displayName = 'AccordionContent'

export default Accordion;
