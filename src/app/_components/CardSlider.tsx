import { cn } from "@/lib/utils";
import Image from "next/image";

export interface CardSliderProps {
  urlImg1?: string;
  servicos: string;
  descricao: string;
  className?: string;
}

export function CardSlider({ urlImg1, servicos, descricao, className }: CardSliderProps) {
  return (
    <article className={cn(
      'w-full bg-white rounded-[0_40px] shadow-[0px_3px_6px_#00000029] min-h-[548px]',
      className
    )}>
      <figure className="bg-[#F1F1FA] rounded-[0_40px] w-full h-[242px] overflow-hidden">
        {urlImg1 && (
          <Image
            src={urlImg1}
            alt={servicos}
            width={355}
            height={242}
          />
        )}
      </figure>

      <div className="w-full p-6 pb-[50px]">
        <h3 className="uppercase text-gray font-bold text-lg leading-[22px] mb-5">
          {servicos}
        </h3>
        <p className="text-gray text-sm leading-[19px] font-medium tracking-[1px]">
          {descricao}
        </p>
      </div>
    </article>
  )
}
