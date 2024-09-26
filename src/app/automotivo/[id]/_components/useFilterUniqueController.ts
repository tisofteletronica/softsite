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
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(schema)
  })

  function handleAutomakerChange(value: string) {
    setSelectedAutomaker(value);
  };

  const handleSubmit = hookFormSubmit(async data => {
    try {
      const response = data.automaker.toLowerCase()
      // console.log(response);

      router.push(`/automotivo/unique/${response}`);
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
