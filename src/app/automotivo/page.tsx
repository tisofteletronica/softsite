import { Breadcrumb } from "../_components/Breadcrumb";
import { CardLine } from "../_components/CardLine";
import { Container } from "../_components/Container";
import { AcessoriosV2 } from "../_components/Icons/AcessoriosV2";
import { Alarmes } from "../_components/Icons/Alarmes";
import { BeeLink } from "../_components/Icons/BeeLink";
import { CentralTravaEletrica } from "../_components/Icons/CentralTravaEletrica";
import { ModuloVidro } from "../_components/Icons/ModuloVidro";
import { TravaEletrica } from "../_components/Icons/TravaEletrica";
import { Unique } from "../_components/Icons/Unique";
import { Vidro } from "../_components/Icons/Vidro";
import { Search } from "../_components/Search";
import { Title } from "../_components/Title";

export default async function Automotivo() {

  return (
    <main>
      <Container type="div" className="my-6">
        <Search />
      </Container>

      <div
        className="bg-bgAutomotivo w-full lg:min-h-[391px] bg-cover lg:bg-center"
      >
        <Container type="div">
          <Title type="h1" className="text-white pt-9 pb-14" classNameLine="bg-white">
            AUTOMOTIVO
          </Title>
        </Container>
      </div>

      <Container type="div" className="mb-7">
        <Breadcrumb>
          <li>Soft Eletrônica</li>
          <li>{'>'}</li>
          <li>Divisões</li>
          <li>{'>'}</li>
          <li>Automotivo</li>
          <li>{'>'}</li>
          <li>Linhas</li>
        </Breadcrumb>
      </Container>

      <Container type="div">
        <Title type="h2" className="mb-7 lg:mb-[50px]">
          CONHEÇA OS PRODUTOS<br /> POR LINHAS
        </Title>
      </Container>

      <Container type="div">
        <div className="grid lg:grid-cols-4 gap-[27px] mb-[100px]">
          <CardLine
            className="group-hover:bg-[#473165]"
            classNameText="group-hover:text-[#473165]"
            link="/automotivo/5"
            icon={<AcessoriosV2 size="134" className="text-[#484848] group-hover:text-white" />}
            title="ACESSÓRIOS"
          />
          <CardLine
            className="group-hover:bg-[#044460]"
            classNameText="group-hover:text-[#044460]"
            link="/automotivo/7"
            icon={<Alarmes className="text-[#054460] group-hover:text-[#c2c2c2]" secColor="#a2a2a2" />}
            title="ALARMES"
          />
          <CardLine
            className="group-hover:bg-[#F9B73A]"
            classNameText="group-hover:text-[#F9B73A]"
            link="/automotivo/8"
            icon={<BeeLink />}
            title="BEE LINK"
          />
          <CardLine
            className="group-hover:bg-[#1C61AC]"
            classNameText="group-hover:text-[#1C61AC]"
            link="/automotivo/2"
            icon={<Vidro className="text-[#484848] group-hover:text-white" />}
            title="CENTRAL DE LEVANTAMENTO DE VIDRO"
          />

          <CardLine
            className="group-hover:bg-[#E50914]"
            classNameText="group-hover:text-[#E50914]"
            link="/automotivo/4"
            icon={<CentralTravaEletrica className="text-[#484848] group-hover:text-white" />}
            title="CENTRAL DE TRAVA ELÉTRICA"
          />
          <CardLine
            className="group-hover:bg-[#99CC33]"
            classNameText="group-hover:text-[#99CC33]"
            link="/automotivo/1"
            icon={<ModuloVidro className="text-[#484848] group-hover:text-white" />}
            title="MÓDULO DE VIDRO ELÉTRICO"
          />
          <CardLine
            className="group-hover:bg-[#FC4C02]"
            classNameText="group-hover:text-[#FC4C02]"
            link="/automotivo/6"
            icon={<TravaEletrica className="text-[#484848] group-hover:text-white" />}
            title="TRAVAS ELÉTRICAS"
          />
          <CardLine
            className="group-hover:bg-[#44D62C]"
            classNameText="group-hover:text-[#44D62C]"
            link="/automotivo/3"
            icon={<Unique className="text-[#484848] group-hover:text-white w-[220px] h-[140px]" />}
            title="UNIQUE"
          />
        </div>
      </Container>
    </main>
  )
}
