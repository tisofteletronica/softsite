import { LuPhone } from "react-icons/lu";
import { MdOutlineMail, MdWhatsapp } from "react-icons/md";

interface CardRepresentativesProps {
  representante: string;
  contato: string;
  whatsapp: string;
  phone1: string;
  email: string;
}

export function CardRepresentatives({ representante, contato, whatsapp, phone1, email }: CardRepresentativesProps) {
  return (
    <div className="mb-8">
      <h4 className="text-white text-[20px] font-semibold leading-[28px] uppercase tracking-[1px]">
        {representante}
      </h4>
      {contato && (
        <p className="text-white text-[20px] font-normal leading-[28px] tracking-[1px]">
          {contato}
        </p>
      )}

      <ul className="mt-4 lg:pl-12">
        {whatsapp && (
          <li className="flex items-center text-white mb-2">
            <div className="w-6 lg:w-9">
              <MdWhatsapp size={28} className="text-orange hidden lg:block" />
              <MdWhatsapp size={20} className="text-orange lg:hidden" />
            </div>
            <span className="text-[14px] lg:text-[18px] font-normal leading-[28px] tracking-[1px]">
              {whatsapp}
            </span>
          </li>
        )}
        {phone1 && (
          <li className="flex items-center text-white mb-2">
            <div className="w-6 lg:w-9">
              <LuPhone size={26} className="text-orange hidden lg:block" />
              <LuPhone size={20} className="text-orange lg:hidden" />
            </div>
            <span className="text-[14px] lg:text-[18px] font-normal leading-[28px] tracking-[1px]">
              {phone1}
            </span>
          </li>
        )}
        {email && (
          <li className="flex items-center text-white mb-2">
            <div className="w-6 lg:w-9">
              <MdOutlineMail size={28} className="text-orange hidden lg:block" />
              <MdOutlineMail size={20} className="text-orange lg:hidden" />
            </div>
            <span className="text-[14px] lg:text-[18px] font-normal leading-[28px] tracking-[1px]">
              {email}
            </span>
          </li>
        )}
      </ul>
    </div>
  )
}
