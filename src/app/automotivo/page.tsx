import { automotiveService } from "@/services/automotiveService";
import { Breadcrumb } from "../_components/Breadcrumb";
import { CardLine } from "../_components/CardLine";
import { Container } from "../_components/Container";
import { Acessorios } from "../_components/Icons/Acessorios";
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
  const categories = await automotiveService.getCategories();

  return (
    <main>
      <Container type="div" className="my-6">
        <Search />
      </Container>

      <div
        className="bg-bgMontagem w-full lg:min-h-[391px] bg-cover lg:bg-center"
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
            link="/automotivo/5"
            icon={<Acessorios />}
            title="ACESSÓRIOS"
          />
          <CardLine
            link="/automotivo/7"
            icon={<Alarmes />}
            title="ALARMES"
          />
          <CardLine
            link="/automotivo/8"
            icon={<BeeLink />}
            title="BEE LINK"
          />
          <CardLine
            link="/automotivo/2"
            icon={<Vidro />}
            title="CENTRAL DE LEVANTAMENTO DE VIDRO"
          />

          <CardLine
            link="/automotivo/4"
            icon={<CentralTravaEletrica />}
            title="CENTRAL DE TRAVA ELÉTRICA"
          />
          <CardLine
            link="/automotivo/1"
            icon={<ModuloVidro />}
            title="MÓDULO DE VIDRO ELÉTRICO"
          />
          <CardLine
            link="/automotivo/6"
            icon={<TravaEletrica />}
            title="TRAVAS ELÉTRICAS"
          />
          <CardLine
            link="/automotivo/3"
            icon={<Unique />}
            title="UNIQUE"
          />
        </div>
      </Container>
    </main>
  )
}
