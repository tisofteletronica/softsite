import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface SearchSelectOption {
  value: string;
  label: string;
}

const schema = z.object({
  automaker: z.string().min(1),
  types: z.string().min(1).nullable(),
})

type FormData = z.infer<typeof schema>

export function useFilterLockController() {
  const [selectedAutomaker, setSelectedAutomaker] = useState<string>("");
  const [selectedModel, setSelectedModel] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter()

  const {
    control,
    register,
    handleSubmit: hookFormSubmit,
    formState: {errors},
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(schema)
  })

  function handleAutomakerChange(value: string) {
    setSelectedAutomaker(value);
  };

  const handleSubmit = hookFormSubmit(async data => {
    try {
      console.log({data});

      // router.push(`/pesquisa?models=${data.types}`);
    } catch (error) {
      console.error("error search.")
    }
  });

  return {
    isLoading,
    handleAutomakerChange,
    selectedAutomaker,
    selectedModel,
    handleSubmit,
    control,
    errors,
    register,
  }
}
