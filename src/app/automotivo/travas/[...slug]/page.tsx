import { getProductsLockByActuatorCachedData, getProductsLockByLockCachedData } from "@/app/_actions/getActionAutomotive";
import { Breadcrumb } from "@/app/_components/Breadcrumb";
import { CardProduct } from "@/app/_components/CardProduct";
import { Container } from "@/app/_components/Container";
import { Search } from "@/app/_components/Search";
import { Title } from "@/app/_components/Title";
import { FilterLock } from "@/app/automotivo/[id]/_components/FilterLock";
import { colorsMapper, mapperBg } from "@/lib/mapers";
import { revalidatePath } from "next/cache";
import Link from "next/link";

interface AutomotivoCategoryUniqueProps {
  params: { slug: string; };
  searchParams: { page?: string; limit?: string; };
}

export default async function AutomotivoCategoryLock({ params }: AutomotivoCategoryUniqueProps) {
  const automaker = params.slug[0] === 'trava' || params.slug[0] === 'atuador' ? '' : params.slug[0];
  const color = colorsMapper("6");
  const bgs = mapperBg("6");
  let products;

  if (params.slug[1] || params.slug[0] === 'trava') {
    products = await getProductsLockByLockCachedData(automaker);
  } else {
    products = await getProductsLockByActuatorCachedData(automaker);
  }

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
          {params.slug[1] && (
            <>
              <li>{'>'}</li>
              <li>{params.slug[1].toUpperCase()}</li>
            </>
          )}
        </Breadcrumb>
      </Container>

      <Container type="div">
        <Title type="h2" className="mb-7 lg:mb-[60px]" color={color}>
          {products[0].nameCategoryCommercial}
        </Title>
      </Container>

      <Container type="div" className="mb-8">
        <FilterLock type={params.slug[1] ?? params.slug[0]} automaker={automaker} />
      </Container>

      <Container type="section">
        <div className="grid lg:grid-cols-3 gap-x-5 gap-y-[30px] lg:gap-y-[80px]">
          {products.map((product, index) => (
            <CardProduct
              key={index}
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
