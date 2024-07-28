'use client'

import { Spinner } from "@/app/_components/Spinner";
import { conectivityService } from "@/services/conectivityService";
import { ProductByIdResponse } from "@/services/conectivityService/productById";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "../../_components/Button";

interface CardProductProps {
  idProduct: string;
  onClick: () => void;
}

export function CardProduct({ idProduct, onClick }: CardProductProps) {
  const [product, setProduct] = useState<ProductByIdResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      setIsLoading(true);
      const response = await conectivityService.getProductById(idProduct);
      setProduct(response);
      setIsLoading(false);
    }
    fetch();
  }, [idProduct])

  return (
    <article className="group w-full bg-white hover:bg-orange shadow-[0px_3px_6px_#00000029] rounded-tr-[40px] rounded-bl-[40px] overflow-hidden pb-8 transition-all min-h-[515px] relative">
      {isLoading ? (
        <div className="absolute top-0 left-0 w-full h-full bg-lighterGray2 flex justify-center items-center z-50">
          <Spinner className="text-gray" />
        </div>
      ) : (
          <>
            <figure className="w-full h-[260px] rounded-tr-[40px] rounded-bl-[40px] overflow-hidden bg-lighterGray2">
              {product?.imgUrl1 && (
                <Image src={product?.imgUrl1} alt={product?.name!} width={580} height={260} className="object-cover h-[260px]" />
              )}
            </figure>

            <h2 className="group-hover:text-white text-center text-[28px] lg:text-[32px] font-bold leading-[42px] uppercase text-gray mt-[30px]">
              {product?.name}
            </h2>
            <span className="group-hover:text-white text-gray text-[13px] font-light uppercase leading-[19px] text-center block tracking-[1.3px]">
              {product?.code}
            </span>
            <p className="group-hover:text-white text-[17px] lg:text-[19px] text-gray leading-[23px] text-center mt-3 mb-9 tracking-[1.9px]">
              Módulo Bluetooth <br />
              de baixo consumo
            </p>

            <Button
              type="button"
              className="m-auto py-[9px] px-[22px] h-[38px] group-hover:bg-white group-hover:text-gray"
              onClick={onClick}
            >
              VER MAIS
            </Button>
          </>
      )}
    </article>
  )
}
