import { CentralEngate } from "@/app/_components/Icons/CentralEngate";
import { DesbloqueioTela } from "@/app/_components/Icons/DesbloqueioTela";
import { DesligaRadio } from "@/app/_components/Icons/DesligaRadio";
import { ModuloVidro } from "@/app/_components/Icons/ModuloVidro";
import { Retrovisor } from "@/app/_components/Icons/Retrovisor";
import { SubstituicaoOriginal } from "@/app/_components/Icons/SubstituicaoOriginal";
import { TetoSolar } from "@/app/_components/Icons/TetoSolar";
import { TravaEletrica } from "@/app/_components/Icons/TravaEletrica";
import { TravaEletricaV2 } from "@/app/_components/Icons/TravaEletricaV2";
import { Velocidade } from "@/app/_components/Icons/Velocidade";
import { Volante } from "@/app/_components/Icons/Volante";
import React from "react";
import { GiCarDoor } from "react-icons/gi";
import { SlLock } from "react-icons/sl";

const ICONS = [
  {
    label: 'LEVANTAMENTO DE VIDRO',
    value: <GiCarDoor size={50} className="text-gray group-hover:text-white transition-all" />
  },
  {
    label: 'AUTODOWN',
    value: <ModuloVidro className="w-[40px] text-gray group-hover:text-white transition-all" />
  },
  {
    label: 'SUBSTITUIÇÃO ORIGINAL',
    value: <SubstituicaoOriginal className="w-[50px] text-gray group-hover:text-white transition-all" />
  },
  {
    label: 'TRAVA ELÉTRICA',
    value: <TravaEletrica className="w-full max-w-[50px] text-gray group-hover:text-white transition-all" />
  },
  {
    label: 'CENTRAL DE ENGATE',
    value: <CentralEngate className="w-[50px] mt-2.5 block text-gray group-hover:text-white transition-all" />
  },
  {
    label: 'RETROVISOR',
    value: <Retrovisor className="w-[60px] pr-[10px] text-gray group-hover:text-white transition-all" />
  },
  {
    label: 'DESLIGA RÁDIO',
    value: <DesligaRadio className="w-[60px] text-gray group-hover:text-white transition-all" />
  },
  {
    label: 'ALARME',
    value: <TravaEletricaV2 className="w-[50px] mt-3 text-gray group-hover:text-white transition-all" />
  },
  {
    label: 'INTERFACE DE VOLANTE',
    value: <Volante className="w-[45px] mt-3 text-gray group-hover:text-white transition-all" />
  },
  {
    label: 'TRAVAMENTO POR VELOCIDADE',
    value: <Velocidade className="w-[45px] mt-2 text-gray group-hover:text-white transition-all" />
  },
  {
    label: 'SUBSTITUIÇÃO CENTRAL DE TRAVA ORIGINAL',
    value: <SlLock size={45} className=" text-gray group-hover:text-white transition-all" />
  },
  {
    label: 'TETO SOLAR',
    value: <TetoSolar className="w-[75px] mb-[-15px] text-gray group-hover:text-white transition-all" />
  },
  {
    label: 'DESBLOQUEIO DE TELA',
    value: <DesbloqueioTela className="w-[50px] mb-[-15px] text-gray group-hover:text-white transition-all" />
  }
]


export function CategoryIcons(value: string): React.ReactNode {
  const icon = ICONS.filter((icon) => icon.label === value)

  return icon[0]?.value;
}
