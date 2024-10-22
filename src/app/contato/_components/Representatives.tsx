'use client'
import Accordion from "@/app/_components/Accordion";
import { Container } from "@/app/_components/Container";

export interface RepresentativeItemProps {
  id: string;
  representante: string;
  estadosRepresentantes: string;
  whatsapp: string;
  phone1: string;
  contato: string;
  email: string;
}

interface RepresentativesProps {
  representatives: RepresentativeItemProps[];
}

export function Representatives({ representatives }: RepresentativesProps) {
  return (
    <Container type="div">
      <div className="border border-gray rounded-tl-[45px] rounded-bl-[45px] rounded-br-[45px]">
        <div className="my-[55px] mx-5 lg:mx-[110px]">
          <h2
            className="text-[31px] lg:text-[43px] font-extrabold text-gray tracking-[1px] lg:tracking-[2.15px] leading-[40px] lg:leading-[51px]"
          >
            LISTA DE<br /> REPRESENTANTES
          </h2>
          <hr className="border-0 w-[69px] h-[5px] bg-orange mt-2" />
        </div>

        <div>
          <Accordion options={representatives} />
        </div>
      </div>
    </Container>
  )
}
