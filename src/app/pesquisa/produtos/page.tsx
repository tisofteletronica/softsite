import { Breadcrumb } from "@/app/_components/Breadcrumb";
import { CardProduct } from "@/app/_components/CardProduct";
import { Container } from "@/app/_components/Container";
import { Pagination } from "@/app/_components/Pagination";
import { Search } from "@/app/_components/Search";
import { searchService } from "@/services/searchService";
import Link from "next/link";

interface ProdutosProps {
  searchParams: { model?: string; year?: string; category?: string; page?: string; limit?: string; };
}

export default async function Produtos({ searchParams }: ProdutosProps) {
  const model = searchParams.model!;
  const year = searchParams.year!;
  const category = searchParams.category!;
  const page = Number(searchParams?.page) || 1;
  const limit = Number(searchParams?.limit) || 9;

  const { content: products, totalElements } = await searchService.getProductsByModelAndCategory(model, year, category, page - 1, limit);

  return (
    <main>
      <Container type="div" className="my-6">
        <Search />
      </Container>

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
          <li>Produtos</li>
        </Breadcrumb>
      </Container>

      <Container type="section">
        <div className="grid lg:grid-cols-3 gap-x-5 gap-y-[30px] lg:gap-y-[80px]">
          {products.map((product) => (
            <CardProduct
              key={product.id}
              name={product.productName}
              code={product.codigo}
              descriptionInstalesoft={product.descricaoInstaleSoft}
              imgUrl1={product.imgUrl1}
              link={`/pesquisa/produto/${product.productId}?year=${product.ano}&category=${product.categoryInstaleSoftId}&model=${product.modeloInstalesoftId}${product.portas2 ? '&portas=2' : (product.porta4 ? '&portas=4' : '')}`}
              portas2={product.portas2}
              porta4={product.porta4}
            />
          ))}
        </div>
      </Container>

      <Container type="div" className="my-[50px]">
        {totalElements > products.length && (
          <Pagination page={page} limit={limit} total={totalElements} />
        )}
      </Container>
    </main>
  )
}
