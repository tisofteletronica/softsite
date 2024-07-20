import { unitsService } from "@/services/unitsService";
import Image from "next/image";
import imgMapa from "../../../public/mapa.png";
import { Breadcrumb } from "../_components/Breadcrumb";
import { CardUnits } from "../_components/CardUnits";
import { Container } from "../_components/Container";

export default async function Unidades() {
  const response = await unitsService.getUnits();

  return (
    <main>
      <Container type="div" className="mt-9 mb-[60px] lg:mb-[100px]">
        <Breadcrumb>
          <li>Soft Eletrônica</li>
          <li>{'>'}</li>
          <li>Unidades</li>
        </Breadcrumb>
      </Container>

      <Container type="div">
        <div className="flex mb-[77px]">
          <div>
            <h1
              className="text-[38px] lg:text-[43px] font-extrabold text-gray tracking-[1px] lg:tracking-[2.15px] leading-[50px] lg:leading-[60px]"
            >
              CONHEÇA NOSSAS<br /> UNIDADES
            </h1>
            <hr className="border-0 w-[69px] h-[5px] bg-orange mt-2" />
          </div>

          <div className="flex-1 flex justify-center mt-[-80px]">
            <Image src={imgMapa} alt="Conheça nossas Unidades" />
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-[21px]">
          {response.content.map((units) => {
            const address = `${units.address}, ${units.number}, ${units.complement}, ${units.neighborhood}, ${units.city}/${units.uf} | ${units.cep}`

            return (
              <CardUnits
                key={units.id}
                title={units.description.replace('Soft Sistemas Eletrônicos LTDA – ', '')}
                image={units.imgUrl1}
                phone={units.phone1}
                address={address}
              />
            )
          })}
        </div>
      </Container>

      <div className="my-[120px]">
        <hr className="border-0 w-[320px] h-[1px] bg-orange m-auto" />
      </div>
    </main>
  )
}
