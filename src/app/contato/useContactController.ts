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
  telefone: z.string()
    .refine((val) => {
      const numericValue = val.replace(/\D/g, '');
      return numericValue.length === 10 || numericValue.length === 11;
    }, { message: 'Número de telefone inválido' }),
  endereco: z.string().min(1, 'Endereço é obrigatório'),
  mensagem: z.string().min(1, 'Mensagem é obrigatório'),
})

type FormData = z.infer<typeof schema>

export function useContactController() {
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const {
    reset,
    register,
    control,
    handleSubmit: hookFormSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema)
  })

  const handleSubmit = hookFormSubmit(async data => {
    try {
      setIsLoading(true);

      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        reset();
        setSuccess(true);

        setTimeout(() => {
          setSuccess(false)
        }, 2000)
      }

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      const result = await response.json();
      setIsLoading(false);
    } catch (error) {
      console.error("error send form contact.");
      setIsLoading(false);
    }
  });

  return {
    register,
    handleSubmit,
    errors,
    isLoading,
    success,
    control
  }
}
