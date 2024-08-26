import { ProductByIdResponse } from "@/services/conectivityService/productById";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiOutlineDownload } from "react-icons/hi";
import imgGarantia from "../../../public/icon-garantia.png";
import { getProductByIdCachedData } from "../_actions/getActionConectivity";
import { SliderCardProduct } from "./SliderCardProduct";
import { Spinner } from "./Spinner";
import { Title } from "./Title";

interface ProductDetailsProps {
  productId: string;
}

export function ProductDetails({ productId }: ProductDetailsProps) {
  const [product, setProduct] = useState<ProductByIdResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      setIsLoading(true);
      if (productId) {
        const response = await getProductByIdCachedData(productId);
        setProduct(response);
      }
      setIsLoading(false);
    }
    fetch();
  }, [productId])

  return (
    <div className="mt-[95px] min-h-[500px] relative">
      {isLoading ? (
        <div className="absolute top-0 left-0 w-full h-full bg-lighterGray2 flex justify-center items-center z-50">
          <Spinner className="text-gray" />
        </div>
      ) : (
        <>
          <Title type="h2" className="mb-[70px]">
            {product?.name}<br />
            <span className="block font-normal text-[14px] leading-[17px] tracking-[1.4px]">
              {product?.code}
            </span>
          </Title>

          <article className="border-[3px] border-lighterGray2 rounded-b-[51px] px-4 pb-11">
            <div className="grid lg:grid-cols-[1fr_500px] gap-[11px] mt-[-30px]">
              <div className="max-w-[300px] lg:max-w-[580px]">
                <SliderCardProduct images={[
                  product?.imgUrl1 ?? '',
                  product?.imgUrl2 ?? '',
                  product?.imgUrl3 ?? '',
                  product?.imgUrl4 ?? '',
                  product?.imgUrl5 ?? '',
                  product?.imgUrl6 ?? '',
                  product?.imgUrl7 ?? '',
                  product?.imgUrl8 ?? '',
                  product?.imgUrl9 ?? '',
                  product?.imgUrl10 ?? ''
                ].filter(Boolean)} />

                <div className="flex flex-col lg:flex-row gap-5 items-center mt-[75px] mb-8 lg:mb-0">
                  <div>
                    <Image src={imgGarantia} alt="Garantia" />
                  </div>

                  <div className="flex-1">
                    <h4 className="text-[26px] lg:text-[35px] font-semibold leading-[28px] tracking-[1px] lg:tracking-[3px] text-orange mb-2">GARANTIA DE 2 ANOS</h4>
                    <p className="text-gray text-[17px] font-medium leading-[24px] tracking-[1.7px]">Recomendamos que a instalação seja feita por profissional especializado e não nos responsabilizamos pelo mau uso do produto.</p>
                  </div>
                </div>
              </div>

              <div className="bg-lighterGray2 px-5 lg:px-[45px] py-8 lg:py-[70px] rounded-br-[40px]">
                <h4 className="text-center text-gray text-[22px] font-bold leading-[31px] tracking-[2.2px] mb-2">
                  CARACTERÍSTICAS:
                </h4>

                <p
                  className="text-gray text-[18px] lg:text-[22px] leading-[23px] lg:leading-[26px] tracking-[2.2px]"
                  dangerouslySetInnerHTML={{ __html: product?.caracteristica.replaceAll('\\n', "<br /><br />")! }}
                />

                <h4 className="text-center text-gray text-[22px] font-bold leading-[31px] tracking-[2.2px] mb-4 mt-[61px]">
                  APLICAÇÕES:
                </h4>

                <p
                  className="text-gray text-[18px] lg:text-[22px] leading-[23px] lg:leading-[26px] tracking-[2.2px]"
                >
                  O módulo BLE 5.2 é ideal para diversas aplicações, incluindo: IoT em geral.<br /><br />
                  Automação residencial e predial.<br /><br />
                  Sensores para equipamentos esportivos e de saúde.<br /><br />
                  Acessórios móveis e muito mais.
                </p>
              </div>
            </div>

            <div className="lg:flex justify-between mt-10">
              <Link
                href={product?.urlManual ? product?.urlManual : "#"}
                className="bg-orange text-white text-[14px] lg:text-[22px] font-medium lg:leading-[31px] rounded-tl-[10px] rounded-br-[10px] px-4 lg:px-8 inline-flex tracking-[2.4px] gap-2 lg:gap-4 py-2 lg:py-4 hover:bg-orange/70 transition-all items-center mb-3 lg:mb-0"
                target="_blank"
              >
                BAIXAR MANUAL - HARDWARE
                <HiOutlineDownload className="w-[25px] lg:w-[30px] h-[25px] lg:h-[30px]" />
              </Link>

              <Link
                href={product?.urlManual_1 ? product?.urlManual_1 : "#"}
                className="bg-orange text-white text-[14px] lg:text-[22px] font-medium lg:leading-[31px] rounded-tl-[10px] rounded-br-[10px] px-4 lg:px-8 inline-flex tracking-[2.4px] gap-2 lg:gap-4 py-2 lg:py-4 hover:bg-orange/70 transition-all items-center"
                target="_blank"
              >
                BAIXAR MANUAL - COMANDOS AT
                <HiOutlineDownload className="w-[30px] h-[30px]" />
              </Link>
            </div>
          </article>
        </>
      )}
    </div>
  )
}
