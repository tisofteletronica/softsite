export interface MenuItem {
  href: string;
  label: string;
  submenu?: MenuItem[];
}

export const menu = [
  {
    href: "/",
    label: "HOME"
  },
  {
    href: "#",
    label: "DIVISÕES",
    submenu: [
      {
        href: "/automotivo",
        label: "AUTOMOTIVO",
        submenu: [
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
            href: "/automotivo/1",
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
        submenu: [
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
        submenu: [
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
        submenu: [
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
