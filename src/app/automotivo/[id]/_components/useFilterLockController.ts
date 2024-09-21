import { getModelsByIdCachedData } from "@/app/_actions/getActionSearch";
import { automakersMapper } from "@/lib/mapers";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
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
  const [modelsData, setModelsData] = useState<SearchSelectOption[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [disabledModel, setDisabledModel] = useState(true);

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

  useEffect(() => {
    const fetchModels = async () => {
      try {
        setIsLoading(true);
        if (selectedAutomaker) {
          const responseModelsById = await getModelsByIdCachedData(selectedAutomaker);
          setModelsData(automakersMapper(responseModelsById));
          setDisabledModel(false);
        }
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching models:", error);
      }
    };

    fetchModels();
  }, [selectedAutomaker])


  function handleAutomakerChange(value: string) {
    setSelectedAutomaker(value);
    setSelectedModel("");
    setValue("types", null);
    setDisabledModel(true);
  };

  function handleModelChange(value: string) {
    setSelectedModel(value);
  };

  const handleSubmit = hookFormSubmit(async data => {
    try {
      router.push(`/pesquisa?models=${data.types}`);
    } catch (error) {
      console.error("error search.")
    }
  });

  return {
    isLoading,
    handleAutomakerChange,
    handleModelChange,
    selectedAutomaker,
    selectedModel,
    handleSubmit,
    control,
    errors,
    register,
  }
}
