import { cn } from "@/lib/utils";

export interface CardSliderProps {
  servicos: string;
  descricao: string;
  className?: string;
}

export function CardSlider({ servicos, descricao, className }: CardSliderProps) {
  return (
    <article className={cn(
      'w-full bg-white rounded-[0_40px] shadow-[0px_3px_6px_#00000029] min-h-[548px]',
      className
    )}>
      <figure className="bg-[#F1F1FA] rounded-[0_40px] w-full h-[242px] overflow-hidden" />

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
