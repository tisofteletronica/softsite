import { searchService } from "@/services/searchService";
import { FormSearch } from "./FormSearch";

interface SearchProps {
  automakerSelected?: string;
  modelSelected?: string;
  yearSelected?: string;
}

export async function Search({ automakerSelected, modelSelected, yearSelected }: SearchProps) {
  const automakers = await searchService.getAutomakers();

  return (
    <div
      className="bg-lightGray shadow-[0px_3px_6px_#00000029] py-4 px-9 rounded-tr-[10px] rounded-bl-[10px] flex flex-col justify-between gap-4 lg:gap-[99px] lg:flex-row lg:items-center"
    >
      <div>
        <p className="text-sm text-gray leading-[17px] tracking-[1.4px]">
          Qual o produto ideal para<br /> o meu carro?
        </p>
      </div>

      <FormSearch
        automakerSelected={automakerSelected}
        modelSelected={modelSelected}
        yearSelected={yearSelected}
        automakersData={
          automakers.map(automaker => ({
            value: String(automaker.id),
            label: automaker.name
          }))
        }
      />
    </div>
  )
}
