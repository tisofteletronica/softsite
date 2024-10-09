import Image from "next/image";
import Link from "next/link";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa6";
import { ImFacebook } from "react-icons/im";
import { SiInstagram } from "react-icons/si";
import imgWhats from '../../../../public/whatsapp.png';
import { Container } from "../Container";
import { LogoFooter } from "./LogoFooter";
import { Mascot } from "./Mascot";
import { TitleFooter } from "./TitleFooter";

export function Footer() {
  return (
    <>
      <div className="fixed right-[15px] bottom-[15px]">
        <a href="https://api.whatsapp.com/send?phone=554135448500&text=Ol%C3%A1!%20Acessei%20atrav%C3%A9s%20do%20website.%20Gostaria%20de%20tirar%20umas%20d%C3%BAvidas." target="_blank">
          <Image src={imgWhats} alt="Whatsapp" width={60} height={60} />
        </a>
      </div>

      <footer className="w-full bg-darkGray bg-footer-texture bg-center bg-no-repeat bg-cover pt-[73px]">
        <Container type="div">
          <div className="flex flex-wrap flex-col items-center gap-5 sm:flex-row sm:gap-[80px] lg:flex-row lg:gap-[142px]">
            <LogoFooter className="w-[190px]" />

            <ul className="text-white flex items-center gap-5 footer-sociais">
              <li>
                <Link href="#" target="_blank">
                  <ImFacebook size={21} />
                </Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/softeletronica/" target="_blank">
                  <SiInstagram size={21} />
                </Link>
              </li>
              <li>
                <Link href="https://www.youtube.com/c/SOFTELETRONICA2000" target="_blank">
                  <AiOutlineYoutube size={30} />
                </Link>
              </li>
              <li>
                <Link href="#" target="_blank">
                  <FaLinkedinIn size={21} />
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col justify-between lg:flex-row">
            <div className="flex flex-wrap flex-col gap-5 sm:flex-row sm:gap-[80px] lg:flex-row lg:gap-[142px] mt-[70px]">
              <div>
                <TitleFooter type="h3">DIVISÕES</TitleFooter>
                <ul className="pl-6 mt-3 menu-footer">
                  <li>
                    <Link href="/automotivo">
                      Automotiva
                    </Link>
                  </li>
                  <li>
                    <Link href="/montagem">
                      Montagem
                    </Link>
                  </li>
                  <li>
                    <Link href="/leds">
                      LEDs
                    </Link>
                  </li>
                  <li>
                    <Link href="/conectividade">
                      Conectividade
                    </Link>
                  </li>
                </ul>

                <TitleFooter type="h3" className="mt-[19px]">CONTATO</TitleFooter>
                <ul className="pl-6 mt-3 menu-footer">
                  <li>
                    <Link href="/contato">
                      WhatsApp
                    </Link>
                  </li>
                  <li>
                    <Link href="/contato">
                      Telefones
                    </Link>
                  </li>
                  <li>
                    <Link href="/contato">
                      E-mails
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <TitleFooter type="h3">UNIDADES</TitleFooter>
                <ul className="pl-6 mt-3 menu-footer">
                  <li>
                    <Link href="/unidades">
                      Matriz - Pato Branco
                    </Link>
                  </li>
                  <li>
                    <Link href="/unidades">
                      Filial I - Curitiba
                    </Link>
                  </li>
                  <li>
                    <Link href="/unidades">
                      Filial II - Penha
                    </Link>
                  </li>
                </ul>

                <TitleFooter type="h3" className="mt-[47px]">SOBRE NÓS</TitleFooter>
                <ul className="pl-6 mt-3 menu-footer">
                  <li>
                    <Link href="/sobre-nos">
                      História da empresa
                    </Link>
                  </li>
                  <li>
                    <Link href="/sobre-nos/#politica">
                      Política de Qualidade
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 lg:mt-0 lg:mr-[-249px] lg:mb-[-115px] sm:hidden lg:block">
              <Mascot />
            </div>
          </div>
        </Container>

        <div className="border-t-orange border-t-[1px] py-5 lg:py-10 mt-[55px]">
          <Container type="div" className="flex flex-wrap flex-col lg:flex-row text-center lg:text-left items-center lg:gap-[170px]">
            <span className="text-white text-[15px]">© Soft Eletrônica 2024</span>

            <p className="text-white text-[15px]">
              Desenvolvido por &nbsp;
              <Link href="//www.dev2.com.br" target="_blank" className="transition-all hover:text-orange">
                Dev2 - Comunicação Integrada
              </Link>
            </p>
          </Container>
        </div>
      </footer>
    </>
  )
}
