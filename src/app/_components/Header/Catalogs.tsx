import Link from "next/link";
import { TbDownload } from "react-icons/tb";

interface ItemCatalogsProps {
  id: string;
  descricao: string;
  local: string;
}[]

interface CatalogsProps {
  catalogs: ItemCatalogsProps[]
}

export function Catalogs({ catalogs }: CatalogsProps) {
  return (
    <div className="bg-orange-gradient">
      <div className="w-full max-w-[1220px] m-auto h-full">
        <div
          className="flex flex-wrap justify-center items-center w-[94%] lg:w-full max-w-[865px] bg-orange rounded-tl-[40px] ml-auto min-h-[60px] lg:min-h-[65px] lg:justify-end text-white py-2 lg:py-0 lg:pb-[10px]"
        >
          <span className="font-bold tracking-[1.6px] text-sm mb-2 lg:text-[14px] lg:ml-7 lg:mb-0">BAIXE NOSSOS CATÁLOGOS</span>

          <div className="flex flex-1 gap-2 justify-center lg:justify-end lg:pr-[20px] lg:gap-4 flex-wrap lg:flex-nowrap">
            {catalogs.map(catalog => (
              <Link
                key={catalog.id}
                href={catalog.local}
                target="_blank"
                className="font-medium text-sm lg:text-[13px] flex items-center tracking-[1.6px] gap-1 uppercase"
              >
                {catalog.descricao}
                <TbDownload className="w-[20px] h-[20px] lg:w-[20px] lg:h-[20px]" />
              </Link>
            ))}
            {/* <Link
              href="https://drive.google.com/file/d/1YPExzbjTt5CjOba1mvEWdHqv2FjOs3ER/view"
              target="_blank"
              className="font-medium text-sm lg:text-base lg:mr-[52px] flex items-center tracking-[1.6px] gap-1"
            >
              MONTAGEM
              <TbDownload className="w-[20px] h-[20px] lg:w-[27px] lg:h-[27px]" />
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  )
}
