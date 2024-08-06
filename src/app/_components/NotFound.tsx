import Image from "next/image";
import imgNotFound from '../../../public/empty-state.svg';
import { Breadcrumb } from "./Breadcrumb";
import { Container } from "./Container";
import { Search } from "./Search";

export function NotFound() {
  return (
    <main>
      <Container type="div" className="my-6">
        <Search />
      </Container>

      <Container type="div" className="mb-7">
        <Breadcrumb>
          <li>Soft Eletrônica</li>
          <li>{'>'}</li>
          <li>Pesquisa</li>
        </Breadcrumb>
      </Container>

      <Container type="div" className="mb-7">
        <div className="flex flex-col justify-center items-center">
          <Image src={imgNotFound} alt="Not Found" />
          <span className="text-gray text-center">Opps... Não foi encontrado o que você procura.</span>
        </div>
      </Container>
    </main>
  )
}
