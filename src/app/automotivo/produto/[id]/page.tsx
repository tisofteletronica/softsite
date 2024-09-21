import { getProductsByIdAutomotiveCachedData } from "@/app/_actions/getActionAutomotive";
import { Breadcrumb } from "@/app/_components/Breadcrumb";
import { Container } from "@/app/_components/Container";
import { GetToKnow } from "@/app/_components/GetToKnow";
import { Icon } from "@/app/_components/Icon";
import { Garantia } from "@/app/_components/Icons/Garantia";
import { Info } from "@/app/_components/Info";
import { Rule } from "@/app/_components/Rule";
import { Search } from "@/app/_components/Search";
import { SliderCardProduct } from "@/app/_components/SliderCardProduct";
import { Title } from "@/app/_components/Title";
import { colorsMapper, mapperBg } from "@/lib/mapers";
import { revalidatePath } from "next/cache";
import Link from "next/link";
import { HiOutlineDownload } from "react-icons/hi";
import { Measure } from "./_components/Measure";

interface ProductDetailsProps {
  params: { id: string; };
}

export default async function ProductDetails({ params }: ProductDetailsProps) {
  const response = await getProductsByIdAutomotiveCachedData(params.id);
  const color = colorsMapper(String(response.categoryCommercialId));
  const bgs = mapperBg(String(response.categoryCommercialId));

  revalidatePath(`/automotivo/produto/${params.id}`);

  return (
    <main>
      <Container type="div" className="my-6">
        <Search />
      </Container>

      <div
        style={{ backgroundImage: `url(${bgs})` }}
        className="w-full lg:min-h-[391px] bg-cover lg:bg-center"
      >
        <Container type="div">
          <Title type="h1" className="text-white pt-9 pb-14" classNameLine="bg-white">
            AUTOMOTIVO
          </Title>
        </Container>
      </div>

      <Container type="div" className="mb-7 mt-3">
        <Breadcrumb>
          <li>Soft Eletrônica</li>
          <li>{'>'}</li>
          <li>Divisões</li>
          <li>{'>'}</li>
          <li>
            <Link href="/automotivo" className="hover:underline">
              Automotivo
            </Link>
          </li>
          <li>{'>'}</li>
          <li>Linhas</li>
          <li>{'>'}</li>
          <li>
            <Link href={`/automotivo/${response.categoryCommercialId}`} className="hover:underline">
              {response.nameCategoryCommercial}
            </Link>
          </li>
          <li>{'>'}</li>
          <li>
            {response.name}
          </li>
        </Breadcrumb>
      </Container>

      <Container type="div" className="mb-[70px]">
        <Title type="h2" className="mb-7 lg:mb-[40px]" classNameLine="bg-blue" color={color}>
          {response.name}
          <span className="block text-[14px] font-normal leading-[17px] tracking-[1.4px]">
            {response.code}
          </span>
        </Title>

        <p
          className="text-gray text-[18px] lg:text-[22px] leading-[23px] lg:leading-[30px] tracking-[2.2px]"
          dangerouslySetInnerHTML={{ __html: response?.descriptionCommercial }}
        />
      </Container>

      <Container type="article" className="border-[3px] border-lighterGray2 rounded-b-[51px] lg:!px-4 pb-11">
        <div className="grid lg:grid-cols-[1fr_500px] gap-[11px] mt-[-30px]">
          <div className="max-w-[300px] lg:max-w-[670px]">
            <SliderCardProduct images={[
              response?.imgUrl1 ?? '',
              response?.imgUrl2 ?? '',
              response?.imgUrl3 ?? '',
              response?.imgUrl4 ?? '',
              response?.imgUrl5 ?? ''
            ].filter(Boolean)} />

            <div className="flex flex-col lg:flex-row gap-5 items-center mt-[75px] mb-8 lg:mb-0">
              <div>
                <Icon color={color}>
                  <div style={{ color: color }}>
                    <Garantia />
                  </div>
                </Icon>
              </div>

              <div className="flex-1">
                <h4
                  style={{ color: color }}
                  className="text-[26px] lg:text-[35px] font-semibold leading-[28px] tracking-[1px] lg:tracking-[3px] text-blue mb-2"
                >
                  GARANTIA DE 2 ANOS
                </h4>
                <p className="text-gray text-[17px] font-medium leading-[24px] tracking-[1.7px]">
                  Recomendamos que a instalação seja feita por profissional especializado e não nos responsabilizamos pelo mau uso do produto.
                </p>
              </div>
            </div>

            <div className="flex justify-center mt-10 mb-10 lg:mb-0">
              <div className="w-fit flex flex-col gap-[7px]">
                {response.height && (
                  <Measure
                    icon={<Rule />}
                    label="Altura:"
                    value={`${response.height}cm`}
                    color={color}
                  />
                )}

                {response.width && (
                  <Measure
                    icon={<Rule />}
                    label="Largura:"
                    value={`${response.width}cm`}
                    color={color}
                  />
                )}

                {response.length && (
                  <Measure
                    icon={<Rule />}
                    label="Comprimento:"
                    value={`${response.length}cm`}
                    color={color}
                  />
                )}

                {response.weight && (
                  <Measure
                    icon={<Info />}
                    label="Peso:"
                    value={`${response.weight}g`}
                    color={color}
                  />
                )}
              </div>
            </div>
          </div>

          <div className="bg-lighterGray2 px-5 lg:px-[45px] py-8 lg:py-[70px] rounded-br-[40px]">
            <h4 className="text-center text-gray text-[22px] font-bold leading-[31px] tracking-[2.2px] mb-2">
              CARACTERÍSTICAS:
            </h4>

            <p
              className="text-gray text-[18px] lg:text-[22px] leading-[23px] lg:leading-[26px] tracking-[2.2px]"
              dangerouslySetInnerHTML={{ __html: response?.descriptionInstalesoft.replaceAll('\\n', "<br /><br />")! }}
            />
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <Link
            style={{ background: color }}
            href={response?.urlManual ? response?.urlManual : "#"}
            className="bg-blue text-white text-[14px] lg:text-[22px] font-medium lg:leading-[31px] rounded-tl-[10px] rounded-br-[10px] px-4 lg:px-8 inline-flex tracking-[2.4px] gap-2 lg:gap-4 py-2 lg:py-4 hover:opacity-70 transition-all items-center mb-3 lg:mb-0"
            target="_blank"
          >
            BAIXAR MANUAL
            <HiOutlineDownload className="w-[25px] lg:w-[30px] h-[25px] lg:h-[30px]" />
          </Link>
        </div>
      </Container>

      <GetToKnow currentId={params.id} id={response.categoryCommercialId} color={color} />
    </main>
  )
}
