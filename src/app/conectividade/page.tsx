import { revalidatePath } from "next/cache";
import Image from "next/image";
import { default as imgConexao, default as imgDescricao } from "../../../public/conectividade/descricao.png";
import { getConectivityCachedData } from "../_actions/getActionConectivity";
import { Breadcrumb } from "../_components/Breadcrumb";
import { Container } from "../_components/Container";
import { Title } from "../_components/Title";
import { OurProducts } from "./_components/OurProducts";

export default async function Conectividades() {
  const response = await getConectivityCachedData();

  revalidatePath('/conectividade');

  return (
    <main>
      <div
        className="bg-bgConectividade w-full lg:min-h-[391px] bg-cover lg:bg-center mt-5"
      >
        <Container type="div">
          <Title type="h1" className="text-white pt-9 pb-14" classNameLine="bg-white">
            CONECTIVIDADE
          </Title>
        </Container>
      </div>

      <Container type="div" className="mb-7">
        <Breadcrumb>
          <li>Soft Eletrônica</li>
          <li>{'>'}</li>
          <li>Divisões</li>
          <li>{'>'}</li>
          <li>Conectividade</li>
        </Breadcrumb>
      </Container>

      <Container type="section">
        <Title type="h2" className="mb-7 lg:mb-[75px]">
          A LINHA DE CONECTIVIDADE É FOCADA<br /> NO SEGMENTO IOT
          <span className="font-light text-[28px]"> (Internet das Coisas)</span>
        </Title>

        <div className="lg:flex gap-[55px]">
          <div>
            <div className="text-[18px] lg:text-[22px] font-medium text-gray leading-[25px] lg:leading-[30px] tracking-[1px] lg:tracking-[2px]">
              <p
                dangerouslySetInnerHTML={{ __html: response?.content[0].descricao }}
              />
            </div>
          </div>

          <div className="lg:flex-[0_0_660px] mt-5 lg:mt-0">
            <Image src={imgDescricao} alt="Descrição" className="rounded-tr-[45px] rounded-bl-[45px]" />
          </div>
        </div>

        <article className="mt-10 lg:mt-[-130px]" id="conexaoble">
          <Title type="h2" className="mb-7 lg:mb-[55px]">
            SISTEMAS DE<br /> CONEXÃO BLE:
          </Title>

          <div className="lg:flex gap-[55px]">
            <div>
              <Image src={imgConexao} alt="Produção" className="rounded-tr-[45px] rounded-bl-[45px]" />
            </div>

            <div className="lg:flex-[0_0_660px] mt-5 lg:mt-8">
              <div className="text-[18px] lg:text-[22px] font-medium text-gray leading-[25px] lg:leading-[30px] tracking-[1px] lg:tracking-[2px]">
                <p
                  dangerouslySetInnerHTML={{ __html: response?.content[0].sistemasConexaoBle }}
                />
              </div>
            </div>
          </div>
        </article>
      </Container>

      <div id="produtos">
        <OurProducts />
      </div>

      <Container type="div" className="mt-[70px] mb-8">
        <div className="text-[18px] lg:text-[22px] font-medium text-gray leading-[25px] lg:leading-[30px] tracking-[1px] lg:tracking-[2px]">
          <strong className="mb-5 block">HOMOLOGAÇÃO ANATEL:</strong>
          <p
            dangerouslySetInnerHTML={{ __html: response?.content[0].anatel.replaceAll('\\n', "<br />") }}
          />
        </div>
      </Container>
    </main>
  )
}
