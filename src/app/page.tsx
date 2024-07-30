import Image from "next/image";
import Link from "next/link";
import imgCircuito from "../../public/circuito.png";
import imgDrive from "../../public/img-drive.png";
import imgEstrutura from "../../public/img-estrutura.png";
import imgIso from "../../public/iso.png";
import imgSelo from "../../public/selo.png";
import { Container } from "./_components/Container";
import { Button } from "./_components/Home/Button";
import { ItemCategoryMobile } from "./_components/Home/ItemCategoryMobile";
import { Icon } from "./_components/Icon";
import { Aeroporto } from "./_components/Icons/Aeroporto";
import { Entrega } from "./_components/Icons/Entrega";
import { Fabricante } from "./_components/Icons/Fabricante";
import { Hospitalar } from "./_components/Icons/Hospitalar";
import { Industrias } from "./_components/Icons/Industrias";
import { Mineradoras } from "./_components/Icons/Mineradoras";
import { Montadoras } from "./_components/Icons/Montadoras";
import { Prefeituras } from "./_components/Icons/Prefeituras";
import { Produtores } from "./_components/Icons/Produtores";
import { Tecnologia } from "./_components/Icons/Tecnologia";
import { Search } from "./_components/Search";
import { Title } from "./_components/Title";


export default function Home() {
  return (
    <main>
      <Container type="div" className="mt-6">
        <Search />
      </Container>

      <div className="bg-bgCategory w-full min-h-[356px] bg-center mt-7 hidden lg:block">
        <Container type="div" className="flex">
          <Link href="/automotivo" className="w-[292px] block min-h-[356px] ml-[-93px] skew-x-[332deg]"></Link>
          <Link href="/montagem" className="w-[292px] block min-h-[356px] ml-[18px] skew-x-[332deg]"></Link>
          <Link href="/leds" className="w-[292px] block min-h-[356px] ml-[18px] skew-x-[332deg]"></Link>
          <Link href="/conectividade" className="w-[292px] block min-h-[356px] ml-[18px] skew-x-[332deg]"></Link>
        </Container>
      </div>

      <Container type="div" className="mt-6 space-y-2 lg:hidden">
        <ItemCategoryMobile text="AUTOMOTIVO" link="/automotivo" />
        <ItemCategoryMobile text="MONTAGEM" link="/montagem" />
        <ItemCategoryMobile text="LEDS" link="/leds" />
        <ItemCategoryMobile text="CONECTIVIDADE" link="/conectividade" />
      </Container>

      <div className="bg-home-gradiente-about mt-12">
        <Container type="article">
          <div className="bg-lightGray lg:skew-x-[332deg] lg:h-[348px] lg:mr-[80px]">
            <div className="flex flex-wrap lg:flex-nowrap lg:skew-x-[-332deg] py-9 lg:pl-[21px]">
              <div className="w-full max-w-[582px] lg:flex-[0_0_582px]">
                <Title type="h2">
                  HÁ MAIS DE 23 ANOS ATUANDO EM TECNOLOGIA E AUTOMAÇÃO VEICULAR.
                </Title>

                <Button link="#" className="mt-9">
                  SAIBA MAIS SOBRE NÓS!
                </Button>
              </div>

              <div className="hidden lg:block">
                <Image
                  src={imgDrive}
                  alt="23 anos atuando em tecnologia e automação veicular"
                  className="img-about"
                />
              </div>
            </div>
          </div>
        </Container>
      </div>

      <Container type="article" className="mt-[60px] lg:mt-[130px]">
        <div className="lg:flex justify-between">
          <Title type="h2" className="mb-5">
            SETORES QUE ATENDEMOS
          </Title>

          <Icon label="Distribuidores de Acessórios Automotivos">
            <Entrega />
          </Icon>
        </div>

        <div>
          <div className="flex flex-wrap justify-between gap-5 mt-5 lg:mt-9">
            <Icon label="Fabricantes de Vidros Elétricos">
              <Fabricante />
            </Icon>
            <Icon label="Montadoras de Automóveis">
              <Montadoras />
            </Icon>
            <Icon label="Produtores do Segmento do Agronegócio">
              <Produtores />
            </Icon>
          </div>

          <div className="flex flex-wrap justify-between gap-5 mt-5 lg:mt-9">
            <Icon label="Prefeituras e Órgãos Públicos de Urbanismo">
              <Prefeituras />
            </Icon>
            <Icon label="Indústrias">
              <Industrias />
            </Icon>
            <Icon label="Aeroportos">
              <Aeroporto />
            </Icon>
          </div>

          <div className="flex flex-wrap justify-between gap-5 mt-5 lg:mt-9">
            <Icon label="Mineradoras">
              <Mineradoras />
            </Icon>
            <Icon label="Segmento Hospitalar">
              <Hospitalar />
            </Icon>
            <Icon label="Segmento de Tecnologia">
              <Tecnologia />
            </Icon>
          </div>
        </div>
      </Container>

      <div className="bg-lighterGray mt-[60px] lg:mt-[350px]">
        <div className="relative lg:top-[-253px] bg-home-gradiente-structure">
          <Container type="article" className="!pr-0 lg:!pr-[83px]">
            <div className="bg-gray lg:rounded-tr-[120px] py-[58px] flex lg:max-h-[415px] mb-[60px] lg:mb-0">
              <div className="lg:flex-[0_0_690px]">
                <Title type="h2" className="text-white" classNameLine="bg-white">
                  PROJETOS ELETRÔNICOS PERSONALIZADOS E MONTAGEM EM UNIDADE FABRIL PRÓPRIA.
                </Title>

                <Button link="#" className="mt-[65px]">
                  CONHEÇA NOSSA ESTRUTURA!
                </Button>
              </div>

              <div className="hidden lg:block">
                <Image src={imgEstrutura} alt="Conheça Nossa Estrutura" className="relative right-[-47px] bottom-[-130px] max-content" />
              </div>
            </div>
          </Container>
        </div>

        <Container type="article">
          <Title type="h2" classNameLine="bg-gray">
            RESPONSABILIDADE TÉCNICA E ALTA QUALIDADE A CADA PROJETO.
          </Title>

          <div className="flex gap-[30px] lg:gap-[140px] items-center lg:items-end flex-col lg:flex-row mt-8 lg:mt-0 pb-[60px]">
            <Image src={imgIso} alt="ISO 9001:2015" className="w-full max-w-[595px]" />
            <Image src={imgSelo} alt="Certified Company" className="max-w-[130px] lg:max-w-max" />
          </div>
        </Container>
      </div>

      <Container
        type="article"
        className="bg-orange rounded-tl-[30px] rounded-br-[30px] pt-[59px] pb-[49px] lg:!pl-[90px] mt-[50px] lg:mt-[147px] mb-[50px] lg:mb-[180px] relative"
      >
        <p
          className="bg-white shadow-[1px_4px_8px_#0000006E] text-[23px] lg:text-[29px] font-semibold leading-7 lg:leading-[40px] px-5 py-3 rounded-tl-[15px] rounded-br-[15px] inline-block text-orange mb-10 text-center lg:text-left"
        >
          CONVERSE COM UM DOS NOSSOS CONSULTORES
        </p>

        <Title type="h2" className="text-white" classNameLine="bg-white">
          TEMOS AS MELHORES SOLUÇÕES<br /> PARA O SEU PROJETO.
        </Title>

        <Image
          src={imgCircuito}
          alt="Temos as Melhores Soluções para o seu Projeto"
          className="hidden absolute right-[-27px] bottom-[-100px] lg:block"
        />
      </Container>
    </main>
  );
}
