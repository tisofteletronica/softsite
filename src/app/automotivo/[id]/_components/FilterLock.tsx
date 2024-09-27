'use client'
import { Button } from "@/app/_components/Button";
import { Select } from "@/app/_components/Select";
import { Spinner } from "@/app/_components/Spinner";
import { Controller } from "react-hook-form";
import { IoSearch } from "react-icons/io5";
import { useFilterLockController } from "./useFilterLockController";

interface FilterLockProps {
  type?: string;
  automaker?: string;
}

export function FilterLock({ type, automaker }: FilterLockProps) {
  const {
    handleAutomakerChange,
    handleTypeChange,
    handleSubmit,
    control,
    isLoading,
    disabledModel,
    automakersData
  } = useFilterLockController(type);

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
          name="types"
          defaultValue={type}
          render={({ field: { onChange, value } }) => (
            <Select
              className="lg:w-[200px]"
              placeholder="Tipo..."
              onChange={(selectedValue: string) => {
                onChange(selectedValue);
                handleTypeChange(selectedValue);
              }}
              value={value}
              options={[
                {
                  value: "trava",
                  label: "TRAVA"
                },
                {
                  value: "atuador",
                  label: "ATUADOR"
                }
              ]}
            />
          )}
        />

        <Controller
          control={control}
          name="automaker"
          defaultValue={automaker?.toUpperCase()}
          render={({ field: { onChange, value } }) => (
            <Select
              className="lg:w-[200px]"
              placeholder={isLoading ? "Carregando..." : "Montadora..."}
              onChange={(selectedValue: string) => {
                onChange(selectedValue);
                handleAutomakerChange(selectedValue);
              }}
              value={value}
              options={automakersData}
              disabled={disabledModel}
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
