import { contactService } from "@/services/contactService";
import { LuPhone } from "react-icons/lu";
import { MdOutlineMail, MdWhatsapp } from "react-icons/md";
import { Breadcrumb } from "../_components/Breadcrumb";
import { Container } from "../_components/Container";
import { Form } from "./_components/Form";
import { MapContainer } from "./_components/MapContainer";
import { Representatives } from "./_components/Representatives";

export default async function Contato() {
  const response = await contactService.getCentral();
  const representatives = await contactService.getRepresentatives();

  return (
    <main>
      <Container type="div" className="mt-9 mb-[75px]">
        <Breadcrumb>
          <li>Soft Eletrônica</li>
          <li>{'>'}</li>
          <li>Contato</li>
        </Breadcrumb>
      </Container>

      <Container type="div">
        <div className="border border-lightGray rounded-tl-[45px] rounded-br-[45px] px-5 lg:px-[65px] py-[35px]  justify-between mb-[65px]">
          <div>
            <h1
              className="text-[31px] lg:text-[43px] font-extrabold text-gray tracking-[1px] lg:tracking-[2.15px] leading-[40px] lg:leading-[51px]"
            >
              FALE COM NOSSA CENTRAL DE ATENDIMENTO
            </h1>
            <hr className="border-0 w-[69px] h-[5px] bg-orange mt-2" />
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mt-8">
            {response.content.map((contact) => (
              <div key={contact.id}>
                <h4 className="text-[20px] text-gray font-bold mb-3">
                  {contact.setor}
                </h4>

                <p className="border-b-[1px] border-lightGray flex items-center pb-[2px] gap-[6px] mb-[6px]">
                  <MdWhatsapp size={28} className="text-orange" />
                  <span className="text-[16px] lg:text-[18px] leading-[22px] font-bold text-gray">
                    {contact.whatsapp}
                  </span>
                </p>
                <p className="border-b-[1px] border-lightGray flex items-center pb-[2px] gap-[6px] mb-[6px]">
                  <LuPhone size={26} className="text-orange" />
                  <span className="text-[16px] lg:text-[18px] leading-[22px] font-bold text-gray">
                    {contact.phone1}
                  </span>
                </p>
                <p className="border-b-[1px] border-lightGray flex items-center pb-[2px] gap-[6px] mb-[6px]">
                  <MdOutlineMail size={28} className="text-orange" />
                  <span className="text-[16px] lg:text-[18px] leading-[22px] font-bold text-gray">
                    {contact.email}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>

      <div className="relative pt-[74px]">
        <div
          className="w-full h-full max-h-[785px] bg-[#F1F1FA] absolute top-0 left-0 z-0"
        />

        <Container type="div" className="relative z-10">
          <div className="mb-9">
            <h2
              className="text-[31px] lg:text-[43px] font-extrabold text-gray tracking-[1px] lg:tracking-[2.15px] leading-[40px] lg:leading-[51px]"
            >
              SEJA UM DISTRIBUIDOR
            </h2>
            <hr className="border-0 w-[69px] h-[5px] bg-orange mt-2" />
          </div>

          <p
            className="text-[17px] lg:text-[22px] font-medium leading-[23px] lg:leading-[30px] tracking-[2px] text-gray"
          >
            A Soft Eletrônica terá o maior prazer em tê-lo como parceiro, visando sempre a transparência e a integridade em suas negociações, ética empresarial e a responsabilidade social.
          </p>

          <strong className="text-[18px] lg:text-[25px] font-semibold leading-[23px] lg:leading-[30px] tracking-[2.5px] text-gray my-[40px] block">
            Preencha o formulário para ser um distribuidor da Soft Eletrônica.
          </strong>

          <div className="bg-white shadow-[0px_3px_6px_#00000029] rounded-tr-[45px] rounded-bl-[45px] px-5 lg:px-[32px] pt-[33px] pb-[48px]">
            <Form />
          </div>
        </Container>
      </div>

      <Container type="div" className="mt-[85px]">
        <div className="mb-9">
          <h2
            className="text-[31px] lg:text-[43px] font-extrabold text-gray tracking-[1px] lg:tracking-[2.15px] leading-[40px] lg:leading-[51px]"
          >
            DISTRIBUIDORES
          </h2>
          <hr className="border-0 w-[69px] h-[5px] bg-orange mt-2" />
        </div>

        <p
          className="text-[17px] lg:text-[22px] font-medium leading-[23px] lg:leading-[30px] tracking-[2px] text-gray"
        >
          Saiba onde comprar os produtos Soft:
        </p>

        <MapContainer />
      </Container>

      <div className="mt-[160px] mb-[200px]">
        <Representatives representatives={representatives.content} />
      </div>
    </main>
  )
}
