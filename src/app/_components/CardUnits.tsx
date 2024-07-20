import Image from "next/image";
import Link from "next/link";
import imgUnidade from "../../../public/img-unidade.png";
import { LocalPin } from "./Icons/LocalPin";
import { Phone } from "./Icons/Phone";

interface CardUnitsProps {
  image?: string;
  title: string;
  address: string;
  phone: string;
}

export function CardUnits({ image, title, address, phone }: CardUnitsProps) {
  return (
    <article className="group w-full rounded-tr-[40px] rounded-bl-[40px] shadow-[0px_3px_6px_#00000029] bg-white">
      <figure className="relative h-[242px] rounded-tr-[40px] rounded-bl-[40px] overflow-hidden">
        <Image src={image ? image : imgUnidade} alt="" className="max-h-[242px] w-full h-full object-cover" />

        <div className="group-hover:opacity-100 absolute w-full h-full bg-orange left-0 top-0 flex items-center justify-center transition-all opacity-0">
          <Link
            href={`https://maps.google.com/maps?output=search&q=${address}`}
            target="_blank"
            className="inline-block bg-white text-orange font-medium tracking-[1.6px] leading-[22px] px-[13px] py-[9px] rounded-tl-[10px] rounded-br-[10px]"
          >
            VER MAPA
          </Link>
        </div>
      </figure>

      <div className="px-[33px] pt-[29px] pb-[42px]">
        <h2 className="text-[24px] font-semibold text-orange leading-[28px] uppercase mb-5">
          {title}
        </h2>

        <div className="pl-[17px]">
          <div className="flex items-center gap-[20px] mb-[5px]">
            <LocalPin />
            <span className="font-semibold text-sm leading-[20px] text-orange tracking-[1.4px]">Endereço</span>
          </div>
          <address className="text-sm font-light text-gray leading-[20px] not-italic tracking-[1.4px]">
            {address}
          </address>
        </div>

        <div className="pl-[17px] mt-[22px]">
          <div className="flex items-center gap-[20px] mb-[10px]">
            <Phone />
            <span className="font-semibold text-sm leading-[20px] text-orange tracking-[1.4px]">Telefone</span>
          </div>
          <address className="text-sm font-light text-gray leading-[20px] not-italic tracking-[1.4px]">
            {phone}
          </address>
        </div>
      </div>
    </article>
  )
}
