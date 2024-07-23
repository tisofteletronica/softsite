'use client'

import { Controller } from "react-hook-form";
import { IoSearch } from "react-icons/io5";
import { Button } from "../Button";
import { Select } from "../Select";
import { useFormSearchController } from "./useFormSearchController";

interface SearchSelectOption {
  value: string;
  label: string;
}

interface FormSearchProps {
  automakersData: SearchSelectOption[]
}

export function FormSearch({ automakersData }: FormSearchProps) {
  const {
    handleAutomakerChange,
    handleModelChange,
    isLoading,
    modelsData,
    yearsData,
    handleSubmit,
    control,
    disabledModel,
    disabledYear
  } = useFormSearchController();

  return (
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
        name="models"
        defaultValue=""
        render={({ field: { onChange, value } }) => (
          <Select
            className="lg:w-[200px]"
            placeholder={isLoading ? "Carregando..." : "Modelo..."}
            onChange={(selectedValue: string) => {
              onChange(selectedValue);
              handleModelChange(selectedValue);
            }}
            value={value}
            options={modelsData}
            disabled={disabledModel}
          />
        )}
      />

      <Controller
        control={control}
        name="years"
        defaultValue=""
        render={({ field: { onChange, value } }) => (
          <Select
            className="lg:w-[200px]"
            placeholder={isLoading ? "Carregando..." : "Ano..."}
            onChange={(selectedValue: string) => {
              onChange(selectedValue);
              // handleModelChange(selectedValue);
            }}
            value={value}
            options={yearsData}
            disabled={disabledYear}
          />
        )}
      />

      <Button type="submit" className="w-full gap-[5px] justify-center">
        BUSCAR
        <IoSearch size={20} />
      </Button>
    </form>
  )
}
