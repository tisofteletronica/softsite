import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  automaker: z.string().min(1)
})

type FormData = z.infer<typeof schema>

export function useFilterUniqueController() {
  const [selectedAutomaker, setSelectedAutomaker] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter()

  const {
    control,
    register,
    handleSubmit: hookFormSubmit,
    formState: {errors},
  } = useForm<FormData>({
    resolver: zodResolver(schema)
  })

  function handleAutomakerChange(value: string) {
    setSelectedAutomaker(value);
  };

  const handleSubmit = hookFormSubmit(async data => {
    try {
      setIsLoading(true);
      const response = data.automaker.toLowerCase()

      router.push(`/automotivo/unique/${response}`);
      setIsLoading(false);
    } catch (error) {
      console.error("error search.")
    }
  });

  return {
    isLoading,
    handleAutomakerChange,
    selectedAutomaker,
    handleSubmit,
    control,
    errors,
    register,
  }
}
