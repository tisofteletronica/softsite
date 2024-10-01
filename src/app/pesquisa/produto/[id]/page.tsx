import { getProductsByModelAndCategoryCachedData } from "@/app/_actions/getActionSearch";
import { Breadcrumb } from "@/app/_components/Breadcrumb";
import { Container } from "@/app/_components/Container";
import { GetToKnow } from "@/app/_components/GetToKnow";
import { NotFound } from "@/app/_components/NotFound";
import { Search } from "@/app/_components/Search";
import { SliderCardProduct } from "@/app/_components/SliderCardProduct";
import { Title } from "@/app/_components/Title";
import { revalidatePath } from "next/cache";
import Image from "next/image";
import Link from "next/link";
import { GiCarDoor } from "react-icons/gi";
import { HiOutlineDownload } from "react-icons/hi";
import imgGarantia from "../../../../../public/icon-garantia2.png";
import { Measure } from "./_components/Measure";

interface ProductDetailsProps {
  params: {
    id: string;
  };
  searchParams: { model?: string; year?: string; category?: string; portas?: string; };
}

export default async function ProductDetails({ params, searchParams }: ProductDetailsProps) {
  const model = searchParams.model!;
  const year = searchParams.year!;
  const category = searchParams.category!;
  const portas = searchParams.portas!;

  let response;
  try {
    const { content: products } = await getProductsByModelAndCategoryCachedData(model, year, category, 0, 1000);
    response = products.filter((product) => Number(product.id) === Number(params.id));
  } catch (error) {
    return <NotFound />
  }

  const video = response[0]?.urlVideo ? response[0]?.urlVideo.replace('https://www.youtube.com/watch?v=', '') : null;

  revalidatePath(`/pesquisa/produto/${params.id}?year=${year}&category=${category}&model=${model}&portas=${portas}`);

  return (
    <main>
      <Container type="div" className="my-6">
        <Search />
      </Container>

      <div
        className="bg-bgCategoryAutomotivo w-full lg:min-h-[391px] bg-cover lg:bg-center"
      >
        <Container type="div">
          <Title type="h1" className="text-white pt-9 pb-14" classNameLine="bg-white">
            PESQUISA
          </Title>
        </Container>
      </div>

      <Container type="div" className="mb-7">
        <Breadcrumb>
          <li>Soft Eletrônica</li>
          <li>{'>'}</li>
          <li>
            <Link href={`/pesquisa?models=${model}&year=${year}`} className="hover:underline">
              Pesquisa
            </Link>
          </li>
          <li>{'>'}</li>
          <li>
            {response[0]?.productName}
          </li>
        </Breadcrumb>
      </Container>

      <Container type="div" className="mb-[70px]">
        <Title type="h2" className="mb-7 lg:mb-[40px]" classNameLine="bg-blue">
          {response[0]?.productName}
          <span className="block text-[14px] font-normal leading-[17px] tracking-[1.4px]">
            {response[0]?.codigo}
          </span>
        </Title>
      </Container>

      <Container type="article" className="border-[3px] border-lighterGray2 rounded-b-[51px] lg:!px-4 pb-11">
        <div className="grid lg:grid-cols-[1fr_500px] gap-[11px] mt-[-30px]">
          <div className="max-w-[300px] lg:max-w-[670px]">
            <SliderCardProduct images={[
              response[0]?.imgUrl1 ?? '',
              response[0]?.imgUrl2 ?? '',
              response[0]?.imgUrl3 ?? '',
              response[0]?.imgUrl4 ?? '',
              response[0]?.imgUrl5 ?? ''
            ].filter(Boolean)} />

            <div className="flex flex-col lg:flex-row gap-5 items-center mt-[75px] mb-8 lg:mb-0">
              <div>
                <Image src={imgGarantia} alt="Garantia" />
              </div>

              <div className="flex-1">
                <h4 className="text-[26px] lg:text-[35px] font-semibold leading-[28px] tracking-[1px] lg:tracking-[3px] text-blue mb-2">
                  GARANTIA DE 2 ANOS
                </h4>
                <p className="text-gray text-[17px] font-medium leading-[24px] tracking-[1.7px]">
                  Recomendamos que a instalação seja feita por profissional especializado e não nos responsabilizamos pelo mau uso do produto.
                </p>
              </div>
            </div>

            <div className="flex justify-center mt-10 mb-10 lg:mb-0">
              <div className="w-fit flex flex-col gap-[7px]">
                {(Number(response[0]?.vidroConvencional) > 0) && (
                  <Measure
                    icon={<GiCarDoor size={30} />}
                    label={`${response[0]?.vidroConvencional} Vidro(s) Convencional(is)`}
                    value={""}
                  />
                )}

                {(Number(response[0]?.vidroInteligente) > 0) && (
                  <Measure
                    icon={<GiCarDoor size={30} />}
                    label={`${response[0]?.vidroInteligente} Vidro(s) Inteligente(s)`}
                    value={""}
                  />
                )}
              </div>
            </div>
          </div>

          <div className="bg-lighterGray2 px-5 lg:px-[45px] py-8 lg:py-[70px] rounded-br-[40px]">
            <h4 className="text-center text-gray text-[22px] font-bold leading-[31px] tracking-[2.2px] mb-2">
              FICHA TÉCNICA:
            </h4>

            <p
              className="text-gray text-[18px] lg:text-[20px] leading-[23px] lg:leading-[24px] tracking-[2.2px] text-justify"
              dangerouslySetInnerHTML={{ __html: response[0]?.descricaoInstaleSoft.replaceAll('\n', "<br /><br />")! }}
            />

            {response[0]?.observacao && (
              <>
                <h4 className="text-center text-gray text-[22px] font-bold leading-[31px] tracking-[2.2px] mb-2 mt-8">
                  IMPORTANTE:
                </h4>

                <p
                  className="text-gray text-[18px] lg:text-[20px] leading-[23px] lg:leading-[24px] tracking-[2.2px] text-justify"
                  dangerouslySetInnerHTML={{ __html: response[0]?.observacao! }}
                />
              </>
            )}

            {response[0]?.urlVideo && (
              <div className="mt-7">
                <iframe width="100%" height="315" src={`https://www.youtube.com/embed/${video}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
              </div>
            )}

          </div>
        </div>

        <div className="flex justify-center mt-10 gap-4">
          <Link
            href={response[0]?.urlManual ? response[0]?.urlManual : "#"}
            className="bg-blue text-white text-[14px] lg:text-[22px] font-medium lg:leading-[31px] rounded-tl-[10px] rounded-br-[10px] px-4 lg:px-8 inline-flex tracking-[2.4px] gap-2 lg:gap-4 py-2 lg:py-4 hover:bg-blue/70 transition-all items-center mb-3 lg:mb-0"
            target="_blank"
          >
            BAIXAR MANUAL
            <HiOutlineDownload className="w-[25px] lg:w-[30px] h-[25px] lg:h-[30px]" />
          </Link>

          {response[0]?.urlEsquema && (
            <Link
              href={response[0]?.urlEsquema ? response[0]?.urlEsquema : "#"}
              className="bg-blue text-white text-[14px] lg:text-[22px] font-medium lg:leading-[31px] rounded-tl-[10px] rounded-br-[10px] px-4 lg:px-8 inline-flex tracking-[2.4px] gap-2 lg:gap-4 py-2 lg:py-4 hover:bg-blue/70 transition-all items-center mb-3 lg:mb-0"
              target="_blank"
            >
              BAIXAR ESQUEMA
              <HiOutlineDownload className="w-[25px] lg:w-[30px] h-[25px] lg:h-[30px]" />
            </Link>
          )}
        </div>
      </Container>

      <GetToKnow currentId={params.id} id={response[0]?.categoryInstaleSoftId} color="#1c61ac" />
    </main>
  )
}
