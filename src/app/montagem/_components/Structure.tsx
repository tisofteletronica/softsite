'use client'
import AccordionV2 from "@/app/_components/AccordionV2";
import { Container } from "@/app/_components/Container";
import { Title } from "@/app/_components/Title";
import { useEffect, useState } from "react";

export interface StructureItemProps {
  id: string;
  tipo: string;
  maquina: string;
  descricao: string;
}
interface StructureProps {
  itemsPage1: StructureItemProps[];
  itemsPage2: StructureItemProps[];
}

export function Structure({ itemsPage1, itemsPage2 }: StructureProps) {
  const [items, setItems] = useState<StructureItemProps[]>([]);

  useEffect(() => {
    setItems(itemsPage1.concat(itemsPage2))
  },[itemsPage1, itemsPage2])

  return (
    <Container type="article" className="mt-[80px]" id="estrutura">
      <Title type="h2" className="mb-10 lg:mb-[50px]">
        CONHEÇA NOSSA ESTRUTURA
      </Title>

      <p className="text-[18px] lg:text-[22px] font-medium text-gray leading-[25px] lg:leading-[30px] tracking-[1px] lg:tracking-[2px] mb-[50px]">
        Tecnologia de ponta à disposição dos nossos clientes.
      </p>

      <AccordionV2 options={items} />
    </Container>
  )
}
