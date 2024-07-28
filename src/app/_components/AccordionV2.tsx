'use client'
import { cn } from '@/lib/utils';
import * as AccordionDemo from '@radix-ui/react-accordion';
import React from 'react';
import { IoChevronDownSharp } from 'react-icons/io5';
import { StructureItemProps } from '../montagem/_components/Structure';

interface AccordionProps {
  options: StructureItemProps[]
}

const AccordionV2 = ({ options }: AccordionProps) => {
  const smd = options.filter((option) => option.tipo === "SMD")
  const pth = options.filter((option) => option.tipo === "PTH")
  const armazenagem = options.filter((option) => option.tipo === "Armazenagem")
  const reparo = options.filter((option) => option.tipo === "Reparo")
  const tampografia = options.filter((option) => option.tipo === "Tampografia")
  const injecao = options.filter((option) => option.tipo === "Injeção Plástica")
  const chicotes = options.filter((option) => option.tipo === "Chicotes")
  const linha = options.filter((option) => option.tipo === "Linha mecânica")


  return (
    (
      <AccordionDemo.Root
        className="bg-mauve6 w-full rounded-md mb-[-1px] border-x border-gray rounded-tl-[45px] rounded-b-[45px]"
        type="single"
        defaultValue="item-1"
        collapsible
      >
        <AccordionItem value={`item-1`}>
          <AccordionTrigger className="border">MÁQUINAS SMD</AccordionTrigger>
          <AccordionContent>
            <div className='grid lg:grid-cols-3 gap-[22px]'>
              {smd.map((item) => (
                <div key={item.id}>
                  <strong className='text-[18px] font-bold text-gray leading-[22px] mb-[22px] block uppercase'>
                    {item.maquina}
                  </strong>
                  <p className='text-gray text-[14px] font-medium leading-[19px] tracking-[1.4px]'>
                    {item.descricao}
                  </p>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value={`item-2`}>
          <AccordionTrigger>MÁQUINAS PTH</AccordionTrigger>
          <AccordionContent>
            <div className='grid lg:grid-cols-3 gap-[22px]'>
              {pth.map((item) => (
                <div key={item.id}>
                  <strong className='text-[18px] font-bold text-gray leading-[22px] mb-[22px] block uppercase'>
                    {item.maquina}
                  </strong>
                  <p className='text-gray text-[14px] font-medium leading-[19px] tracking-[1.4px]'>
                    {item.descricao}
                  </p>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value={`item-3`}>
          <AccordionTrigger>ARMAZENAGEM</AccordionTrigger>
          <AccordionContent>
            <div className='grid lg:grid-cols-3 gap-[22px]'>
              {armazenagem.map((item) => (
                <div key={item.id}>
                  <strong className='text-[18px] font-bold text-gray leading-[22px] mb-[22px] block uppercase'>
                    {item.maquina}
                  </strong>
                  <p className='text-gray text-[14px] font-medium leading-[19px] tracking-[1.4px]'>
                    {item.descricao}
                  </p>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value={`item-4`}>
          <AccordionTrigger>MÁQUINAS DE REPARO</AccordionTrigger>
          <AccordionContent>
            <div className='grid lg:grid-cols-3 gap-[22px]'>
              {reparo.map((item) => (
                <div key={item.id}>
                  <strong className='text-[18px] font-bold text-gray leading-[22px] mb-[22px] block uppercase'>
                    {item.maquina}
                  </strong>
                  <p className='text-gray text-[14px] font-medium leading-[19px] tracking-[1.4px]'>
                    {item.descricao}
                  </p>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value={`item-5`}>
          <AccordionTrigger>MÁQUINA DE TAMPOGRAFIA</AccordionTrigger>
          <AccordionContent>
            <div className='grid lg:grid-cols-3 gap-[22px]'>
              {tampografia.map((item) => (
                <div key={item.id}>
                  <strong className='text-[18px] font-bold text-gray leading-[22px] mb-[22px] block uppercase'>
                    {item.maquina}
                  </strong>
                  <p className='text-gray text-[14px] font-medium leading-[19px] tracking-[1.4px]'>
                    {item.descricao}
                  </p>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value={`item-6`}>
          <AccordionTrigger>MÁQUINAS DE INJEÇÃO PLÁSTICA</AccordionTrigger>
          <AccordionContent>
            <div className='grid lg:grid-cols-3 gap-[22px]'>
              {injecao.map((item) => (
                <div key={item.id}>
                  <strong className='text-[18px] font-bold text-gray leading-[22px] mb-[22px] block uppercase'>
                    {item.maquina}
                  </strong>
                  <p className='text-gray text-[14px] font-medium leading-[19px] tracking-[1.4px]'>
                    {item.descricao}
                  </p>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value={`item-7`}>
          <AccordionTrigger>MÁQUINAS PARA CHICOTES</AccordionTrigger>
          <AccordionContent>
            <div className='grid lg:grid-cols-3 gap-[22px]'>
              {chicotes.map((item) => (
                <div key={item.id}>
                  <strong className='text-[18px] font-bold text-gray leading-[22px] mb-[22px] block uppercase'>
                    {item.maquina}
                  </strong>
                  <p className='text-gray text-[14px] font-medium leading-[19px] tracking-[1.4px]'>
                    {item.descricao}
                  </p>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value={`item-8`}>
          <AccordionTrigger>LINHA MECÂNICA</AccordionTrigger>
          <AccordionContent>
            <div className='grid lg:grid-cols-3 gap-[22px]'>
              {linha.map((item) => (
                <div key={item.id}>
                  <strong className='text-[18px] font-bold text-gray leading-[22px] mb-[22px] block uppercase'>
                    {item.maquina}
                  </strong>
                  <p className='text-gray text-[14px] font-medium leading-[19px] tracking-[1.4px]'>
                    {item.descricao}
                  </p>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
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
const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(({ children, className, ...props }, forwardedRef) => (
  <AccordionDemo.Item
    className={cn(
      'mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10 mx-[-1px]',
      className
    )}
    {...props}
    ref={forwardedRef}
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
        'text-[18px] lg:text-[24px] font-semibold text-gray hover:bg-[#F7F6FB] group flex flex-1 items-center gap-5 bg-white leading-[20px] lg:leading-[29px] outline-none cursor-pointer px-5 lg:px-[110px] py-10 border border-gray rounded-bl-[45px] rounded-br-[45px] uppercase focus:outline-none data-[state=open]:bg-[#F7F6FB] data-[state=open]:text-orange data-[state=open]:rounded-bl-[0] data-[state=open]:rounded-br-[0] data-[state=open]:rounded-tl-[45px] text-left data-[state=open]:border-b-0 border-t-0 data-[state=open]:border-t',
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      <div>
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

const AccordionContent = React.forwardRef<HTMLDivElement, AccordionItemProps>(({ children, className, ...props }, forwardedRef) => (
  <AccordionDemo.Content
    className={cn(
      'data-[state=open]:bg-[#F7F6FB] data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[15px] data-[state=open]:rounded-b-[45px] px-0 lg:px-[90px] transition-all border-x-[1px] border-gray border-b-[1px] pb-[60px]',
      className
    )}
    {...props}
    ref={forwardedRef}
  >
    <div className="py-[15px] px-5">{children}</div>
  </AccordionDemo.Content>
));

AccordionContent.displayName = 'AccordionContent'

export default AccordionV2;
