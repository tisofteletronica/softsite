import { revalidatePath } from "next/cache";
import Image from "next/image";
import imgAspas from "../../../public/aspas.png";
import { getAboutCachedData, getLineTimeCachedData } from "../_actions/getActionAbout";
import { Breadcrumb } from "../_components/Breadcrumb";
import { Container } from "../_components/Container";
import { Title } from "../_components/Title";
import { Slider } from "./_components/Slider";

export default async function SobreNos() {
  const responseData = getAboutCachedData();
  const responseLineData = getLineTimeCachedData();

  const [
    response,
    responseLine
  ] = await Promise.all([
    responseData,
    responseLineData
  ])

  revalidatePath('/sobre-nos');

  return (
    <main>
      <Container type="div" className="mt-9 mb-[75px]">
        <Breadcrumb>
          <li>Soft Eletrônica</li>
          <li>{'>'}</li>
          <li>Sobre</li>
        </Breadcrumb>
      </Container>

      <Container type="div">
        <div className="mb-[50px] lg:mb-[75px]">
          <h1
            className="text-[38px] lg:text-[43px] font-extrabold text-gray tracking-[1px] lg:tracking-[2.15px] leading-[50px] lg:leading-[60px]"
          >
            COMO TUDO COMEÇOU
          </h1>
          <hr className="border-0 w-[69px] h-[5px] bg-orange mt-2" />
        </div>

        <div
          className="text-[18px] lg:text-[20px] text-gray font-medium leading-[25px] lg:leading-[28px] tracking-[1px] lg:tracking-[2px]"
        >
          <p dangerouslySetInnerHTML={{ __html: response.content[0].historico.replaceAll('\n', '<br/>') }} />
        </div>

        <div className="mt-[125px]">
          <Title type="h2" className="mb-10">
            CONHEÇA A NOSSA HISTÓRIA
          </Title>

          <div className='w-full max-w-[1015px] m-auto'>
            <Slider content={responseLine.content} />
          </div>
        </div>

        <article id="politica" className="bg-orange rounded-tl-[30px] rounded-br-[30px] px-5 lg:px-[60px] py-4 lg:py-[50px] my-[115px] relative">
          <Image src={imgAspas} alt="Aspas" className="hidden absolute right-[-5px] top-[45px] lg:block" />

          <div className="mb-9 lg:mb-16">
            <h2 className="text-white text-[30px] lg:text-[39px] font-semibold leading-[38px] lg:leading-[46px] mb-[19px]">COMPROMISSOS</h2>
            <hr className="border-0 w-[64px] h-[5px] bg-white" />
          </div>

          <div className="bg-white rounded-tl-[10px] rounded-br-[10px] px-[10px] lg:px-0">
            <h3
              className="text-center text-[23px] lg:text-[30px] font-semibold italic leading-[30px] lg:leading-[51px] text-orange py-3"
              dangerouslySetInnerHTML={{ __html: response.content[0].politica.replace('Política da Qualidade:\n', '') }}
            />
              <h3
              className="text-center text-[23px] lg:text-[30px] font-semibold italic leading-[30px] lg:leading-[51px] text-orange py-3"
              dangerouslySetInnerHTML={{ __html: response.content[0].politicaAmbiental.replace('Política da Qualidade:\n', '') }}
            />
          </div>

          <div className="text-white text-[18px] lg:text-[20px] leading-[23px] lg:leading-[25px] font-medium tracking-[2px] mt-[28px]">
            <p>Escopo do sistema de gestão da qualidade ISO 9.001:2015 e ISO 14.001:2015</p><br />
            <p>Projeto, desenvolvimento e fabricação de produtos eletrônicos automotivos, lâmpadas LED (direcional) e balanças digitais. Montagem e assistência técnica de placas eletrônicas.</p>
          </div>
        </article>
      </Container>
    </main>
  )
}
