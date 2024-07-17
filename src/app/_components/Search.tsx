import { IoSearch } from "react-icons/io5";
import { Button } from "./Button";
import { Select } from "./Select";

export function Search() {
  return (
    <div
      className="bg-lightGray shadow-[0px_3px_6px_#00000029] py-4 px-9 rounded-tr-[10px] rounded-bl-[10px] flex flex-col justify-between gap-4 lg:gap-[99px] lg:flex-row lg:items-center"
    >
      <div>
        <p className="text-sm text-gray leading-[17px] tracking-[1.4px]">
          Qual o produto ideal para<br /> o meu carro?
        </p>
      </div>

      <div className="flex-1 flex flex-col gap-2 lg:gap-8 lg:flex-row w-full">
        <Select
          className="lg:w-[200px]"
          placeholder="Montadora..."
          options={[
            {
              value: 'AUDI',
              label: 'Audi',
            },
            {
              value: 'RENAULT',
              label: 'Renault',
            },
            {
              value: 'CHEVROLET',
              label: 'Chevrolet',
            },
          ]}
        />

        <Select
          className="lg:w-[200px]"
          placeholder="Modelo..."
          options={[
            {
              value: 'CORSA',
              label: 'Corsa',
            },
            {
              value: 'PRISMA',
              label: 'Prisma',
            },
            {
              value: 'ONIX',
              label: 'Onix',
            },
          ]}
        />

        <Select
          className="lg:w-[200px]"
          placeholder="Ano..."
          options={[
            {
              value: '2010',
              label: '2010',
            },
            {
              value: '2015',
              label: '2015',
            },
            {
              value: '2022',
              label: '2022',
            },
          ]}
        />

        <Button type="submit" className="w-full gap-[5px] justify-center">
          BUSCAR
          <IoSearch size={20} />
        </Button>
      </div>
    </div>
  )
}
