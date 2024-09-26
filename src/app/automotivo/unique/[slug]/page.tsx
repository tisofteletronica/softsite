import { getProductsUniqueByAutomakerCachedData } from "@/app/_actions/getActionAutomotive";
import { getAutomakersUniqueCachedData } from "@/app/_actions/getActionSearch";
import { Breadcrumb } from "@/app/_components/Breadcrumb";
import { CardProduct } from "@/app/_components/CardProduct";
import { Container } from "@/app/_components/Container";
import { Search } from "@/app/_components/Search";
import { Title } from "@/app/_components/Title";
import { colorsMapper, mapperBg } from "@/lib/mapers";
import { revalidatePath } from "next/cache";
import Link from "next/link";
import { FilterUnique } from "../../[id]/_components/FilterUnique";

interface AutomotivoCategoryUniqueProps {
  params: { slug: string; };
  searchParams: { page?: string; limit?: string; };
}

export default async function AutomotivoCategoryUnique({ params }: AutomotivoCategoryUniqueProps) {
  const products = await getProductsUniqueByAutomakerCachedData(params.slug);
  const color = colorsMapper("3");
  const bgs = mapperBg("3");
  const automakersUniqueData = await getAutomakersUniqueCachedData();

  revalidatePath(`/automotivo/unique/${params.slug}`);

  return (
    <main className="mb-[50px]">
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
            <Link href={`/automotivo/${products[0].categoryCommercialId}`} className="hover:underline">
              {products[0].nameCategoryCommercial}
            </Link>
          </li>
        </Breadcrumb>
      </Container>

      <Container type="div">
        <Title type="h2" className="mb-7 lg:mb-[60px]" color={color}>
          {products[0].nameCategoryCommercial}
        </Title>
      </Container>

      <Container type="div" className="mb-8">
        <FilterUnique
          defaulValue={params.slug}
          automakersData={
            automakersUniqueData.map(automaker => ({
              value: String(automaker.montadora),
              label: automaker.montadora
            }))
          }
        />
      </Container>

      <Container type="section">
        <div className="grid lg:grid-cols-3 gap-x-5 gap-y-[30px] lg:gap-y-[80px]">
          {products.map((product) => (
            <CardProduct
              key={product.id}
              name={product.name}
              code={product.code}
              descriptionInstalesoft={product.descriptionInstalesoft}
              imgUrl1={product.capaImagem}
              link={`/automotivo/produto/${product.id}`}
              color={color}
            />
          ))}
        </div>
      </Container>
    </main>
  )
}
