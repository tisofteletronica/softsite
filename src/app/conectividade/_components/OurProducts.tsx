'use client'
import { Container } from "@/app/_components/Container";
import { ProductDetails } from "@/app/_components/ProductDetails";
import { Title } from "@/app/_components/Title";
import { useState } from "react";
import { CardProduct } from "./CardProduct";

export function OurProducts() {
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);

  function handleProductSelect(id: string) {
    setSelectedProductId(id);
  };

  return (
    <section className="relative w-full pt-[45px] mt-11">
      <div className="w-full h-full max-h-[621px] bg-[#F7F6FB] absolute top-0 left-0 z-[1]" />

      <Container type="div" className="bg-white relative z-[2]">
        <div className="lg:px-[45px] pt-10">
          <Title type="h2" className="mb-10 lg:mb-[90px]">
            CONHEÇA NOSSOS PRODUTOS
          </Title>

          <div className="grid sm:grid-cols-2 gap-8">
            <CardProduct idProduct="1" onClick={() => handleProductSelect("1")} />

            <CardProduct idProduct="2" onClick={() => handleProductSelect("2")} />
          </div>

          {selectedProductId && (
            <ProductDetails productId={selectedProductId} />
          )}
        </div>
      </Container>
    </section>
  )
}
