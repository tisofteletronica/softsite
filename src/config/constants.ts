import imgAcessorios from "../../public/automotivo/bg/acessorios.png";
import imgAlarmes from "../../public/automotivo/bg/alarmes.png";
import imgAutomotivo from "../../public/automotivo/bg/automotivo.png";
import imgBeelink from "../../public/automotivo/bg/beelink.png";
import imgCentralTrava from "../../public/automotivo/bg/central-trava.png";
import imgVidro from "../../public/automotivo/bg/modulo-vidro.png";
import imgTrava from "../../public/automotivo/bg/trava.png";
import imgUnique from "../../public/automotivo/bg/unique.png";

export const MENU = [
  {
    href: "/",
    label: "HOME"
  },
  {
    href: "#",
    label: "DIVISÕES",
    sub: [
      {
        href: "/automotivo",
        label: "AUTOMOTIVO",
        sub: [
          {
            href: "/automotivo/5",
            label: "ACESSÓRIOS"
          },
          {
            href: "/automotivo/7",
            label: "ALARMES"
          },
          {
            href: "/automotivo/8",
            label: "BEE LINK"
          },
          {
            href: "/automotivo/2",
            label: "CENTRAL DE LEVANTAMENTO DE VIDRO"
          },
          {
            href: "/automotivo/4",
            label: "CENTRAL DE TRAVA ELÉTRICA"
          },
          {
            href: "automotivo/1",
            label: "MÓDULO DE VIDRO ELÉTRICO"
          },
          {
            href: "/automotivo/6",
            label: "TRAVAS ELÉTRICAS"
          },
          {
            href: "/automotivo/3",
            label: "UNIQUE"
          },
        ]
      },
      {
        href: "/montagem",
        label: "MONTAGEM",
        sub: [
          {
            href: "/montagem#servicos",
            label: "SERVIÇOS"
          },
          {
            href: "/montagem#areas",
            label: "ÁREAS DE ATUAÇÃO"
          },
          {
            href: "/montagem#diferenciais",
            label: "DIFERENCIAIS"
          },
          {
            href: "/montagem#estrutura",
            label: "CONHEÇA NOSSA ESTRUTURA"
          }
        ]
      },
      {
        href: "/leds",
        label: "LEDS",
        sub: [
          {
            href: "/leds#producao",
            label: "PRODUÇÃO"
          },
          {
            href: "/leds#projetos",
            label: "PROJETOS"
          },
          {
            href: "/leds#aplicacoes",
            label: "APLICAÇÕES"
          }
        ]
      },
      {
        href: "/conectividade",
        label: "CONECTIVIDADE",
        sub: [
          {
            href: "/conectividade#conexaoble",
            label: "SISTEMAS DE CONEXÃO BLE"
          },
          {
            href: "/conectividade#produtos",
            label: "CONHEÇA NOSSOS PRODUTOS"
          },
        ]
      },
    ]
  },
  {
    href: "/contato",
    label: "CONTATO"
  },
  {
    href: "/unidades",
    label: "UNIDADES"
  },
  {
    href: "/sobre-nos",
    label: "SOBRE NÓS"
  },

]

export const STATES = [
  {
    valueApi: "RS, PR, RR, AC, AM, RO, AM, PA, PI, CE, TO, MT, MS, RJ",
    valueTratament: "Venda Direta"
  },
  {
    valueApi: "ES, RJ (Interior)",
    valueTratament: "ESPÍRITO SANTO / INTERIOR DO RIO DE JANEIRO"
  },
  {
    valueApi: "SC",
    valueTratament: "SANTA CATARINA"
  },
  {
    valueApi: "BA, SE, AL",
    valueTratament: "BAHIA / SERGIPE / ALAGOAS"
  },
  {
    valueApi: "PE, PB, RN",
    valueTratament: "PARAÍBA / PERNAMBUCO / RIO GRANDE DO NORTE"
  },
  {
    valueApi: "GO, DF",
    valueTratament: "GOIÁS/ DISTRITO FEDERAL"
  },
  {
    valueApi: "SP (Interior)",
    valueTratament: "INTERIOR DE SÃO PAULO"
  },
  {
    valueApi: "SP (Capital)",
    valueTratament: "SÃO PAULO (CAPITAL)"
  }
]

export const UF = [
  {
    label: "AC",
    value: "Acre"
  },
  {
    label: "AL",
    value: "Alagoas"
  },
  {
    label: "AP",
    value: "Amapá"
  },
  {
    label: "AM",
    value: "Amazonas"
  },
  {
    label: "BA",
    value: "Bahia"
  },
  {
    label: "CE",
    value: "Ceará"
  },
  {
    label: "ES",
    value: "Espírito Santo"
  },
  {
    label: "GO",
    value: "Goiás"
  },
  {
    label: "MA",
    value: "Maranhão"
  },
  {
    label: "MT",
    value: "Mato Grosso"
  },
  {
    label: "MS",
    value: "Mato Grosso do Sul"
  },
  {
    label: "MG",
    value: "Minas Gerais"
  },
  {
    label: "PA",
    value: "Pará"
  },
  {
    label: "PB",
    value: "Paraíba"
  },
  {
    label: "PR",
    value: "Paraná"
  },
  {
    label: "PE",
    value: "Pernambuco"
  },
  {
    label: "PI",
    value: "Piauí"
  },
  {
    label: "RJ",
    value: "Rio de Janeiro"
  },
  {
    label: "RN",
    value: "Rio Grande do Norte"
  },
  {
    label: "RS",
    value: "Rio Grande do Sul"
  },
  {
    label: "RO",
    value: "Rondônia"
  },
  {
    label: "RR",
    value: "Roraima"
  },
  {
    label: "SC",
    value: "Santa Catarina"
  },
  {
    label: "SP",
    value: "São Paulo"
  },
  {
    label: "SE",
    value: "Sergipe"
  },
  {
    label: "TO",
    value: "Tocantins"
  },
  {
    label: "DF",
    value: "Distrito Federal"
  }
]

export const CATEGORIES_AUTOMOTIVE = [
  {
    color: "#473165",
    label: "Acessórios",
    id: "5",
    img: imgAcessorios.src
  },
  {
    color: "#044460",
    label: "Alarmes",
    id: "7",
    img: imgAlarmes.src
  },
  {
    color: "#F9B73A",
    label: "Bee Link",
    id: "8",
    img: imgBeelink.src
  },
  {
    color: "#1C61AC",
    label: "Central de Levantamento de Vidro",
    id: "2",
    img: imgAutomotivo.src
  },
  {
    color: "#E50914",
    label: "Central de Trava Elétrica",
    id: "4",
    img: imgCentralTrava.src
  },
  {
    color: "#99CC33",
    label: "Módulo de Vidro Elétrico",
    id: "1",
    img: imgVidro.src
  },
  {
    color: "#FC4C02",
    label: "Travas Elétricas",
    id: "6",
    img: imgTrava.src
  },
  {
    color: "#44D62C",
    label: "Unique",
    id: "3",
    img: imgUnique.src
  }
]
