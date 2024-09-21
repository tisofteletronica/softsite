'use client'

import { Controller } from "react-hook-form";
import { IoSearch } from "react-icons/io5";

import { Button } from "@/app/_components/Button";
import { Select } from "@/app/_components/Select";
import { useFilterLockController } from "./useFilterLockController";

interface SearchSelectOption {
  value: string;
  label: string;
}

interface FormSearchProps {
  automakersData: SearchSelectOption[]
}

export function FilterLock({ automakersData }: FormSearchProps) {
  const {
    handleAutomakerChange,
    handleSubmit,
    control
  } = useFilterLockController();

  return (
    <div
      className="bg-lightGray shadow-[0px_3px_6px_#00000029] py-4 px-9 rounded-tr-[10px] rounded-bl-[10px] flex flex-col justify-between gap-4 lg:gap-[99px] lg:flex-row lg:items-center w-full max-w-[700px] m-auto"
    >
      <form
        className="flex-1 flex flex-col gap-2 lg:gap-8 lg:flex-row w-full"
        onSubmit={handleSubmit}
      >
        <Controller
          control={control}
          name="automaker"
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <Select
              className="lg:w-[200px]"
              placeholder="Montadora..."
              onChange={(selectedValue: string) => {
                onChange(selectedValue);
                handleAutomakerChange(selectedValue);
              }}
              value={value}
              options={automakersData}
            />
          )}
        />

        <Controller
          control={control}
          name="types"
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <Select
              className="lg:w-[200px]"
              placeholder="Tipo..."
              onChange={onChange}
              value={value}
              options={[
                  {
                    value: "trava",
                    label: "Trava"
                  },
                  {
                    value: "atuador",
                    label: "Atuador"
                  }
              ]}
            />
          )}
        />

        <Button type="submit" className="w-full gap-[5px] justify-center">
          BUSCAR
          <IoSearch size={20} />
        </Button>
      </form>
    </div>
  )
}
