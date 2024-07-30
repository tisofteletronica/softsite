import { assemblyService } from "@/services/assemblyService";
import { Breadcrumb } from "../_components/Breadcrumb";
import { Container } from "../_components/Container";
import { Icon } from "../_components/Icon";
import { Balanca } from "../_components/Icons/Balanca";
import { Controle } from "../_components/Icons/Controle";
import { ControleTrafego } from "../_components/Icons/ControleTrafego";
import { EquipamentoHospitalar } from "../_components/Icons/EquipamentoHospitalar";
import { Impressoras } from "../_components/Icons/Impressoras";
import { Ionizador } from "../_components/Icons/Ionizador";
import { MaquinaLavar } from "../_components/Icons/MaquinaLavar";
import { Monitor } from "../_components/Icons/Monitor";
import { Portoes } from "../_components/Icons/Portoes";
import { Projetor } from "../_components/Icons/Projetor";
import { Rastreador } from "../_components/Icons/Rastreador";
import { Telefonia } from "../_components/Icons/Telefonia";
import { Search } from "../_components/Search";
import { Title } from "../_components/Title";
import { SliderImages } from "./_components/SliderImages";
import { SliderMontagem } from "./_components/SliderMontagem";
import { Structure } from "./_components/Structure";

export default async function Montagem() {
  const servicesData = assemblyService.getServices();
  const differencesData = assemblyService.getDifferences();
  const structurePage1Data = assemblyService.getStructure();
  const structurePage2Data = assemblyService.getStructure("1");
  const assemblyData = assemblyService.getAssembly();

  const [
    services,
    differences,
    structurePage1,
    structurePage2,
    assembly
  ] = await Promise.all([
    servicesData,
    differencesData,
    structurePage1Data,
    structurePage2Data,
    assemblyData
  ])

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
            MONTAGEM
          </Title>
        </Container>
      </div>

      <div className="relative w-full">
        <div className="w-full h-full max-h-[815px] bg-[#F7F6FB] absolute top-0 left-0 z-[1]" />

        <div className="relative z-[2] pt-4">
          <Container type="div" className="mb-7">
            <Breadcrumb>
              <li>Soft Eletrônica</li>
              <li>{'>'}</li>
              <li>Divisões</li>
              <li>{'>'}</li>
              <li>Montagem</li>
            </Breadcrumb>
          </Container>

          <Container type="section">
            <Title type="h2" className="mb-7 lg:mb-[50px]">
              FOCAMOS EM QUALIDADE, TECNOLOGIA<br /> E NA SATISFAÇÃO DO CLIENTE.
            </Title>
          </Container>

          <Container type="div" className="bg-white rounded-tr-[45px] max-w-[1309px]">
            <div className="lg:px-[45px] pt-12" id="servicos">
              <Title type="h2" className="mb-10 lg:mb-[50px]">
                SERVIÇOS:
              </Title>

              <p className="text-[18px] lg:text-[22px] font-medium text-gray leading-[25px] lg:leading-[30px] tracking-[1px] lg:tracking-[2px] mb-[50px]">
                Conheça todos os serviços que oferecemos em nossa área de montagem.
              </p>

              <SliderMontagem items={services.content} />
            </div>
          </Container>
        </div>
      </div>

      <Container type="article" className="mt-0 lg:mt-[80px]" id="areas">
        <Title type="h2" className="mb-10 lg:mb-[80px]">
          ÁREAS DE ATUAÇÃO:
        </Title>

        <div>
          <div className="flex flex-wrap justify-between gap-5 mb-5 lg:mb-9">
            <Icon label="Balanças industriais e rodoviárias">
              <Balanca />
            </Icon>
            <Icon label="Controle de tráfego">
              <ControleTrafego />
            </Icon>
            <Icon label="Controle de abastecimento de frota">
              <Controle />
            </Icon>
          </div>

          <div className="flex flex-wrap justify-between gap-5 mb-5 lg:mb-9">
            <Icon label="Ionizador de água potável">
              <Ionizador />
            </Icon>
            <Icon label="Impressoras fiscais">
              <Impressoras />
            </Icon>
            <Icon label="Monitores de computadores">
              <Monitor />
            </Icon>
          </div>

          <div className="flex flex-wrap justify-between gap-5 mb-5 lg:mb-9">
            <Icon label="Rastreadores de veículos e cargas">
              <Rastreador />
            </Icon>
            <Icon label="Equipamentos para ensino">
              <Projetor />
            </Icon>
            <Icon label="Equipamentos hospitalares">
              <EquipamentoHospitalar />
            </Icon>
          </div>

          <div className="flex flex-wrap justify-between gap-5">
            <Icon label="Centrais para motores (portões e esteiras)">
              <Portoes />
            </Icon>
            <Icon label="Controladoras de lava-roupa e fogões">
              <MaquinaLavar />
            </Icon>
            <Icon label="Sistemas de controle de telefonia">
              <Telefonia />
            </Icon>
          </div>
        </div>
      </Container>

      <div className="relative w-full mt-11" id="diferenciais">
        <div className="w-full h-full max-h-[621px] bg-[#F7F6FB] absolute top-0 left-0 z-[1]" />

        <div className="relative z-[2] pt-[46px]">
          <Container type="div" className="bg-white rounded-tr-[45px] max-w-[1309px]">
            <div className="lg:px-[45px] pt-12">
              <Title type="h2" className="mb-10 lg:mb-[50px]">
                DIFERENCIAIS:
              </Title>

              <SliderMontagem items={differences.content.map((difference) => {
                return {
                  id: difference.id,
                  servicos: difference.diferencial,
                  descricao: difference.descricao,
                }
              })} />
            </div>
          </Container>
        </div>
      </div>

      <Structure
        itemsPage1={structurePage1.content}
        itemsPage2={structurePage2.content}
      />

      <Container type="div" className="mt-[75px] mb-[110px]">
        <div className="text-[18px] lg:text-[22px] font-medium text-gray leading-[25px] lg:leading-[30px] tracking-[1px] lg:tracking-[2px]">
          <p
            dangerouslySetInnerHTML={{ __html: assembly?.content[0].descricao }}
          />
        </div>
      </Container>

      <div className="mb-[100px]">
        <SliderImages items={[
          assembly?.content[0].urlImg ?? '',
          assembly?.content[0].urlImg_2 ?? '',
          assembly?.content[0].urlImg_3 ?? '',
          assembly?.content[0].urlImg_4 ?? '',
          assembly?.content[0].urlImg_5 ?? '',
          assembly?.content[0].urlImg_6 ?? '',
          assembly?.content[0].urlImg_7 ?? '',
          assembly?.content[0].urlImg_8 ?? '',
          assembly?.content[0].urlImg_9 ?? '',
          assembly?.content[0].urlImg_10 ?? '',
          assembly?.content[0].urlImg_11 ?? '',
          assembly?.content[0].urlImg_12 ?? '',
          assembly?.content[0].urlImg_13 ?? '',
          assembly?.content[0].urlImg_14 ?? '',
          assembly?.content[0].urlImg_15 ?? '',
          assembly?.content[0].urlImg_16 ?? '',
          assembly?.content[0].urlImg_17 ?? '',
          assembly?.content[0].urlImg_18 ?? '',
          assembly?.content[0].urlImg_19 ?? '',
          assembly?.content[0].urlImg_20 ?? '',
          assembly?.content[0].urlImg_21 ?? '',
          assembly?.content[0].urlImg_22 ?? '',
          assembly?.content[0].urlImg_23 ?? '',
          assembly?.content[0].urlImg_24 ?? '',
          assembly?.content[0].urlImg_25 ?? '',
          assembly?.content[0].urlImg_26 ?? '',
          assembly?.content[0].urlImg_27 ?? '',
          assembly?.content[0].urlImg_28 ?? '',
          assembly?.content[0].urlImg_29 ?? '',
          assembly?.content[0].urlImg_30 ?? '',
        ].filter(Boolean)} />
      </div>
    </main>
  )
}
