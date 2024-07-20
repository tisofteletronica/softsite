'use client'

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
    selectedAutomaker,
    selectedModel,
    handleSubmit,
    control,
    errors,
    setValue
  } = useFormSearchController();

  return (
    <div
      className="flex-1 flex flex-col gap-2 lg:gap-8 lg:flex-row w-full"
    >
      {/* <Controller
        control={control}
        name="automaker"
        defaultValue={selectedAutomaker}
        render={({ field: { onChange, value } }) => (
          <Select
            className="lg:w-[200px]"
            placeholder="Montadora..."
            onChange={(selectedValue: string) => {
              onChange(selectedValue);
              handleAutomakerChange(selectedValue); // Chama a função de atualização
            }}
            value={value}
            options={automakersData}
          />
        )}
      /> */}

      <Select
        className="lg:w-[200px]"
        placeholder="Montadora..."
        options={automakersData}
        onChange={handleAutomakerChange}
        value={selectedAutomaker}
      />

      <Select
        className="lg:w-[200px]"
        placeholder={isLoading ? "Carregando..." : "Modelo..."}
        options={modelsData}
        onChange={handleModelChange}
        value={selectedModel}
      />
      {/* {yearsData} */}
      <Select
        className="lg:w-[200px]"
        placeholder={isLoading ? "Carregando..." : "Ano..."}
        options={yearsData}
      />

      <Button type="submit" className="w-full gap-[5px] justify-center">
        BUSCAR
        <IoSearch size={20} />
      </Button>
    </div>
  )
}
