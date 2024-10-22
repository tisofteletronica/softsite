import { CategoryIcons } from "@/config/CategoryIcons";
import { revalidatePath } from "next/cache";
import { getCategoryByModelAndYearCachedData } from "../_actions/getActionSearch";
import { Breadcrumb } from "../_components/Breadcrumb";
import { CardLineSearch } from "../_components/CardLineSearch";
import { Container } from "../_components/Container";
import { NotFound } from "../_components/NotFound";
import { Search } from "../_components/Search";

interface PesquisaProps {
  searchParams: { mon?: string;  models?: string; year?: string; };
}

export default async function Pesquisa({ searchParams }: PesquisaProps) {
  const automaker = searchParams.mon!;
  const model = searchParams.models!;
  const year = searchParams.year!;
  const categories = await getCategoryByModelAndYearCachedData(model, year);

  revalidatePath(`/pesquisa?models=${model}&year=${year}`);

  if (categories.content.length <= 0) {
    return <NotFound />;
  }

  return (
    <main>
      <Container type="div" className="my-6">
        <Search automakerSelected={automaker} modelSelected={model} yearSelected={year} />
      </Container>

      <Container type="div" className="mb-7">
        <Breadcrumb>
          <li>Soft Eletrônica</li>
          <li>{'>'}</li>
          <li>Pesquisa</li>
        </Breadcrumb>
      </Container>

      <Container type="div">
        <div className="grid lg:grid-cols-4 gap-[27px] mb-[100px]">
          {categories.content.map((category) => (
            <CardLineSearch
              key={category.categoriaId}
              category={category.name}
              link={`/pesquisa/produtos?year=${category.ano}&category=${category.categoriaId}&model=${category.modeloId}`}
              icon={CategoryIcons(category.name)}
              title={`${category.modelo} ${category.ano}`}
            />
          ))}
        </div>
      </Container>
    </main>
  )
}
