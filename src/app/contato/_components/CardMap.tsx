import { BsGlobe } from "react-icons/bs";
import { LuPhone } from "react-icons/lu";
import { MdOutlineMail, MdWhatsapp } from "react-icons/md";
import { PiMapPinArea } from "react-icons/pi";

interface CardMapProps {
  razaoSocial: string;
  site: string;
  telefone2: string;
  telefone1: string;
  email: string;
  endereco: string;
  numero: string;
  cep: string;
}

export function CardMap({ razaoSocial, cep, email, endereco, numero, site, telefone1, telefone2 }: CardMapProps) {
  return (
    <div className="mb-8">
      <h4 className="text-gray text-[16px] lg:text-[20px] font-semibold leading-[20px] lg:leading-[28px] uppercase tracking-[1px]">
        {razaoSocial}
      </h4>

      <ul className="mt-4 lg:pl-7">
        {telefone2 && (
          <li className="flex items-center text-gray mb-2">
            <div className="w-6 lg:w-9 flex justify-center">
              <MdWhatsapp size={28} className="text-orange hidden lg:block" />
              <MdWhatsapp size={20} className="text-orange lg:hidden" />
            </div>
            <span className="text-[14px] lg:text-[18px] font-normal leading-[28px] tracking-[1px]">
              {telefone2}
            </span>
          </li>
        )}
        {telefone1 && (
          <li className="flex items-center text-gray mb-2">
            <div className="w-6 lg:w-9 flex justify-center">
              <LuPhone size={26} className="text-orange hidden lg:block" />
              <LuPhone size={20} className="text-orange lg:hidden" />
            </div>
            <span className="text-[14px] lg:text-[18px] font-normal leading-[28px] tracking-[1px]">
              {telefone1}
            </span>
          </li>
        )}
        {email && (
          <li className="flex items-center text-gray mb-2">
            <div className="w-6 lg:w-9 flex justify-center">
              <MdOutlineMail size={28} className="text-orange hidden lg:block" />
              <MdOutlineMail size={20} className="text-orange lg:hidden" />
            </div>
            <span className="text-[14px] lg:text-[18px] font-normal leading-[28px] tracking-[1px]">
              {email}
            </span>
          </li>
        )}
        {endereco && (
          <li className="flex items-center text-gray mb-2">
            <div className="w-6 lg:w-9 flex justify-center">
              <PiMapPinArea size={29} className="text-orange" />
            </div>
            <span className="text-[14px] lg:text-[18px] font-normal leading-[28px] tracking-[1px]">
              {endereco}, {numero} - {cep}
            </span>
          </li>
        )}
        {site && (
          <li className="flex items-center text-gray mb-2">
            <div className="w-6 lg:w-9 flex justify-center">
              <BsGlobe size={25} className="text-orange" />
            </div>
            <span className="text-[14px] lg:text-[18px] font-normal leading-[28px] tracking-[1px]">
              {site}
            </span>
          </li>
        )}
      </ul>
    </div>
  )
}
