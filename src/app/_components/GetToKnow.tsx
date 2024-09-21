import { automotiveService } from "@/services/automotiveService";
import { CardProduct } from "./CardProduct";
import { Container } from "./Container";
import { Title } from "./Title";

interface GetToKnowProps {
  id: string;
  currentId: string;
  color?: string;
}

export async function GetToKnow({ id, currentId, color }: GetToKnowProps) {
  const products = await automotiveService.getProductsByCategoryId(id);
  const filterProducts = products.content.filter((item) => item.id != currentId)

  return (
    <section className="mt-[110px] flex relative w-full">
      {filterProducts.length > 0 && (
        <>
          <div className="w-full h-full max-h-[515px] bg-[#F7F6FB] absolute bottom-0 left-0 z-[1]" />

          <Container type="div" className="relative z-[2] mb-[130px]">
            <Title type="h2" className="mb-7 lg:mb-[88px]" classNameLine="bg-blue" color={color}>
              CONHEÇA TAMBÉM
            </Title>



            <div className="grid lg:grid-cols-3 gap-x-5 gap-y-[30px]">
              {filterProducts.slice(0, 3).map((product) => (
                <CardProduct
                  key={product.id}
                  name={product.name}
                  code={product.code}
                  descriptionInstalesoft={product.descriptionInstalesoft}
                  imgUrl1={product.imgUrl1}
                  link={`/automotivo/produto/${product.id}`}
                  color={color}
                />
              ))}
            </div>
          </Container>
        </>
      )}
    </section>
  )
}
