import { revalidatePath } from "next/cache";
import Image from "next/image";
import { getLedsCachedData } from "../_actions/getActionLeds";
import { Breadcrumb } from "../_components/Breadcrumb";
import { Container } from "../_components/Container";
import { Title } from "../_components/Title";

export default async function Leds() {
  const response = await getLedsCachedData();

  revalidatePath('/leds');

  console.log(response);


  return (
    <main>
      <div
        className="bg-bgLeds w-full lg:min-h-[391px] bg-cover lg:bg-center mt-5"
      >
        <Container type="div">
          <Title type="h1" className="text-white pt-9 pb-14" classNameLine="bg-white">
            LEDS
          </Title>
        </Container>
      </div>

      <Container type="div" className="mb-7">
        <Breadcrumb>
          <li>Soft Eletrônica</li>
          <li>{'>'}</li>
          <li>Divisões</li>
          <li>{'>'}</li>
          <li>Leds</li>
        </Breadcrumb>
      </Container>

      <Container type="section">
        <Title type="h2" className="mb-7 lg:mb-[75px]">
          LÍDER EM SOLUÇÕES DE ILUMINAÇÃO<br /> E SINALIZAÇÃO DE ÚLTIMA GERAÇÃO
        </Title>

        <div className="lg:flex gap-[55px]">
          <div>
            <div className="text-[18px] lg:text-[20px] font-medium text-gray leading-[25px] lg:leading-[28px] tracking-[1px] lg:tracking-[2px]">
              <p
                dangerouslySetInnerHTML={{ __html: response.content[0].descricao }}
              />
            </div>
          </div>

          <div className="lg:flex-[0_0_660px] mt-5 lg:mt-0 relative">
            <Image
              src={response.content[0].imgSiteLed_1}
              alt="Descrição"
              fill
              className="rounded-tr-[45px] rounded-bl-[45px] !w-auto !h-auto !static"
            />
          </div>
        </div>

        <article className="mt-10 lg:mt-[-67px]" id="producao">
          <Title type="h2" className="mb-7 lg:mb-[55px]">
            PRODUÇÃO
          </Title>

          <div className="lg:flex gap-[55px]">
            <div>
              <Image
                src={response.content[0].imgSiteLed_2}
                alt="Produção"
                fill
                className="rounded-tr-[45px] rounded-bl-[45px] !w-auto !h-auto !static"
              />
            </div>

            <div className="lg:flex-[0_0_660px] mt-5 lg:mt-0">
              <div className="text-[18px] lg:text-[20px] font-medium text-gray leading-[25px] lg:leading-[28px] tracking-[1px] lg:tracking-[2px]">
                <p
                  dangerouslySetInnerHTML={{ __html: response.content[0].producao }}
                />
              </div>
            </div>
          </div>
        </article>

        <article className="mt-10 lg:mt-[130px]" id="projetos">
          <div className="lg:flex gap-[50px]">
            <div>
              <Title type="h2" className="mb-7 lg:mb-[55px]">
                PROJETOS
              </Title>

              <div className="text-[18px] lg:text-[20px] font-medium text-gray leading-[25px] lg:leading-[28px] tracking-[1px] lg:tracking-[2px]">
                <p
                  dangerouslySetInnerHTML={{ __html: response.content[0].projetos }}
                />
              </div>
            </div>

            <div className="lg:flex-[0_0_660px] mt-5 lg:mt-0">
              <Image
                src={response.content[0].imgSiteLed_3}
                alt="Produção"
                fill
                className="rounded-tr-[45px] rounded-bl-[45px] !w-auto !h-auto !static"
              />
            </div>
          </div>
        </article>

        <article className="mt-10 lg:mt-[98px]" id="aplicacoes">
          <Title type="h2" className="mb-7 lg:mb-[55px]">
            APLICAÇÕES
          </Title>

          <div className="text-[18px] lg:text-[20px] font-medium text-gray leading-[25px] lg:leading-[28px] tracking-[1px] lg:tracking-[2px]">
            <p
              dangerouslySetInnerHTML={{ __html: response.content[0].aplicacoes.replaceAll('\\n', '<br/>') }}
            />
          </div>
        </article>

        <div className="mt-10 lg:mt-[54px] mb-[98px]">
          <div className="text-[18px] lg:text-[22px] font-medium text-gray leading-[25px] lg:leading-[30px] tracking-[1px] lg:tracking-[2px]">
            <p
              dangerouslySetInnerHTML={{ __html: response.content[0].conclusao }}
            />
          </div>
          <hr className="border-0 w-[69px] h-[5px] bg-orange mt-3" />
        </div>
      </Container>
    </main>
  )
}
