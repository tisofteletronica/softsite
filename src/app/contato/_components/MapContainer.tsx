'use client'
import { Spinner } from "@/app/_components/Spinner";
import { ufMapper } from "@/lib/mapers";
import Accordion, { AccordionContent, AccordionItem, AccordionTrigger } from "./Accordion";
import { CardMap } from "./CardMap";
import { MapChart } from "./MapChart";
import { useMapController } from "./useMapController";


export function MapContainer() {
  const { handleState, isLoading, uniqueCities, statesData } = useMapController();

  return (
    <article className="lg:flex gap-[140px] mt-[70px]">
      <div className="w-full max-w-[700px] flex-[0_0_700px]">
        <MapChart handleState={handleState} />
      </div>

      <div className="relative w-full">
        {isLoading && (
          <div className="absolute w-full h-full flex items-center justify-center bg-white">
            <Spinner className="w-6 h-6 text-lightGray" />
          </div>
        )}

        {statesData[0]?.uf && (
          <h2 className="uppercase text-[24px] font-semibold text-gray leading-[29px] mb-10">
            {ufMapper(statesData[0]?.uf)}
            <hr className="border-0 w-10 h-[3px] bg-orange mt-[6px]" />
          </h2>
        )}

        <Accordion>
          {uniqueCities.map((cities, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger>{cities}</AccordionTrigger>

              <AccordionContent>
                {statesData.filter((states) => states.cidade === cities).map((item) => (
                  <CardMap
                    key={item.id}
                    razaoSocial={item.razaoSocial}
                    email={item.email}
                    cep={item.cep}
                    endereco={item.endereco}
                    numero={item.numero}
                    site={item.site}
                    telefone1={item.telefone1}
                    telefone2={item.telefone2}
                  />
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </article>
  )
}
