'use client'
import { Button } from "@/app/_components/Button";
import { Input } from "@/app/_components/Input";
import { InputMaskCustom } from "@/app/_components/InputMaskCustom";
import { Spinner } from "@/app/_components/Spinner";
import { Textarea } from "@/app/_components/Textarea";
import { Controller } from "react-hook-form";
import { useContactController } from "../useContactController";

export function Form() {
  const {
    register,
    errors,
    handleSubmit,
    isLoading,
    success,
    control
  } = useContactController();

  return (
    <form
      onSubmit={handleSubmit}
    >
      {success && (
        <div className="bg-green-100 border border-green-600 rounded-[0_10px] mb-4 py-3 px-5 text-green-600 text-sm">
          E-mail enviado com sucesso!
        </div>
      )}
      <div className="grid lg:grid-cols-2 gap-4">
        <Input
          type="text"
          placeholder="Nome*"
          error={errors.nome?.message}
          {...register('nome')}
        />
        <Input
          type="email"
          placeholder="E-mail*"
          error={errors.email?.message}
          {...register('email')}
        />
        <Input
          type="text"
          placeholder="Cidade*"
          error={errors.cidade?.message}
          {...register('cidade')}
        />
        <Input
          type="text"
          placeholder="País*"
          error={errors.pais?.message}
          {...register('pais')}
        />
        <Input
          type="text"
          placeholder="Empresa*"
          error={errors.empresa?.message}
          {...register('empresa')}
        />

        <Controller
          control={control}
          name="telefone"
          defaultValue=""
          render={({ field: { onChange, value } }) => {
            return (
              <InputMaskCustom
                name="Telefone"
                value={value}
                onChange={onChange}
                placeholder="Telefone*"
                error={errors.telefone?.message}
              />
            )
          }}
        />
      </div>

      <div className="mt-4">
        <Input
          type="text"
          placeholder="Endereço*"
          error={errors.endereco?.message}
          {...register('endereco')}
        />
      </div>

      <div className="mt-4">
        <Textarea
          placeholder="Mensagem*"
          error={errors.mensagem?.message}
          {...register('mensagem')}
        />
      </div>

      <div className="mt-2.5">
        <Button type="submit" className="px-8 font-normal uppercase">
          Enviar
          {isLoading && <Spinner className="w-4 h-4 m-0 ml-1.5" />}
        </Button>
      </div>
    </form>
  )
}
