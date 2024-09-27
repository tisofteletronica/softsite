'use client'

import { Controller } from "react-hook-form";
import { IoSearch } from "react-icons/io5";

import { Button } from "@/app/_components/Button";
import { Select } from "@/app/_components/Select";
import { Spinner } from "@/app/_components/Spinner";
import { useFilterUniqueController } from "./useFilterUniqueController";

interface SearchSelectOption {
  value: string;
  label: string;
}

interface FormSearchProps {
  defaulValue?: string;
  automakersData: SearchSelectOption[]
}

export function FilterUnique({ automakersData, defaulValue }: FormSearchProps) {
  const {
    handleAutomakerChange,
    handleSubmit,
    control,
    isLoading
  } = useFilterUniqueController();

  return (
    <div
      className="bg-lightGray shadow-[0px_3px_6px_#00000029] py-4 px-9 rounded-tr-[10px] rounded-bl-[10px] flex flex-col justify-between gap-4 lg:gap-[99px] lg:flex-row lg:items-center w-full max-w-[450px] m-auto"
    >
      <form
        className="flex-1 flex flex-col gap-2 lg:gap-8 lg:flex-row w-full"
        onSubmit={handleSubmit}
      >
        <Controller
          control={control}
          name="automaker"
          defaultValue={defaulValue?.toUpperCase()}
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

        <Button type="submit" className="w-full gap-[5px] justify-center">
          {isLoading ? <Spinner className="w-4 h-4 m-0 ml-1.5" /> : (
            <>
              BUSCAR
              <IoSearch size={20} />
            </>
          )}
        </Button>
      </form>
    </div>
  )
}
