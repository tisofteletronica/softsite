import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"

const schema = z.object({
  nome: z.string().min(1, 'Nome é obrigatório'),
  email: z.string()
          .min(1, 'E-mail é obrigatório')
          .email('Informe um e-mail válido'),
  cidade: z.string().min(1, 'Cidade é obrigatório'),
  pais: z.string().min(1, 'País é obrigatório'),
  empresa: z.string().min(1, 'Empresa é obrigatório'),
  telefone: z.string().min(1, 'Telefone é obrigatório'),
  endereco: z.string().min(1, 'Endereço é obrigatório'),
  mensagem: z.string().min(1, 'Mensagem é obrigatório'),
})

type FormData = z.infer<typeof schema>

export function useContactController() {
  const [isLoading, setIsLoading] = useState(false);

  const {
    control,
    register,
    handleSubmit: hookFormSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema)
  })

  const handleSubmit = hookFormSubmit(async data => {
    try {
      setIsLoading(true);
      console.log(data);
      setIsLoading(false);
    } catch (error) {
      console.error("error send form contact.")
    }
  });

  return {
    register,
    handleSubmit,
    errors,
    isLoading
  }
}
