'use client'

import { createExcerpt } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import imgLogo from "../../../public/logo.png";

interface CardProductProps {
  name: string;
  imgUrl1: string;
  code: string;
  descriptionInstalesoft: string;
  link: string;
  portas2?: boolean;
  porta4?: boolean;
  color?: string;
}

export function CardProduct({ name, imgUrl1, code, descriptionInstalesoft, link, portas2, porta4, color }: CardProductProps) {
  return (
    <article
      style={{
        '--hover': color,
      } as React.CSSProperties}
      className="group w-full bg-white hover:bg-[--hover] shadow-[0px_3px_6px_#00000029] rounded-tr-[40px] rounded-bl-[40px] overflow-hidden pb-8 transition-all min-h-[515px] relative"
    >
      <figure
        className="w-full h-[260px] rounded-tr-[40px] rounded-bl-[40px] overflow-hidden bg-white flex items-center justify-center relative"
      >
        {imgUrl1 && (
          <Image
            src={imgUrl1} alt={name ?? 'Imagem do Produto'}
            fill
            className="!w-auto !h-auto !static max-h-[260px]"
          />
        )}

        {!imgUrl1 && (
          <Image src={imgLogo} alt={name ?? 'Imagem do Produto'} className="w-[230px]" />
        )}
      </figure>

      <h2 className="group-hover:text-white text-center text-[28px] lg:text-[28px] font-bold leading-[36px] uppercase text-gray mt-[30px] px-4">
        {name}
      </h2>
      <span className="group-hover:text-white text-gray text-[13px] font-light uppercase leading-[19px] text-center block tracking-[1.3px]">
        {code}
      </span>
      <p className="group-hover:text-white text-[17px] lg:text-[19px] text-gray leading-[23px] text-center mt-3 mb-9 tracking-[1.9px] max-w-[260px] mx-auto">
        {/* Módulo Bluetooth <br />
            de baixo consumo */}
        {createExcerpt(descriptionInstalesoft ?? '', 33)}
      </p>

      {portas2 && (
        <p className="text-blue font-bold uppercase text-[17px] text-center mb-9 group-hover:text-white">
          2 Vidros
        </p>
      )}

      {porta4 && (
        <p className="text-blue font-bold uppercase text-[17px] text-center mb-9 group-hover:text-white">
          4 Vidros
        </p>
      )}

      <Link
        href={link ?? ""}
        style={{ background: color }}
        className="m-auto py-[9px] px-[22px] h-[38px] group-hover:!bg-white group-hover:text-gray bg-blue rounded-[10px_0] text-white font-medium tracking-[1.6px] w-[130px] flex items-center justify-center"
      >
        VER MAIS
      </Link>
    </article>
  )
}
