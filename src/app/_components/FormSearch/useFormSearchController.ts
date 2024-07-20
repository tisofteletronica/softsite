import { automakersMapper, yearsMapper } from "@/lib/mapers";
import { searchService } from "@/services/searchService";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";


interface SearchSelectOption {
  value: string;
  label: string;
}

const schema = z.object({
  automaker: z.string().min(1),
  // models: z.string().min(1),
})

type FormData = z.infer<typeof schema>

export function useFormSearchController() {
  const [selectedAutomaker, setSelectedAutomaker] = useState<string>("");
  const [selectedModel, setSelectedModel] = useState<string>("");
  const [modelsData, setModelsData] = useState<SearchSelectOption[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [yearsData, setYearsData] = useState<SearchSelectOption[]>([]);

  const {
    control,
    register,
    handleSubmit: hookFormSubmit,
    formState: {errors},
    setValue
  } = useForm({
    resolver: zodResolver(schema)
  })

  useEffect(() => {
    const fetchModels = async () => {
      try {
        setIsLoading(true);
        const response = await searchService.getModels(selectedAutomaker);
        setModelsData(automakersMapper(response));
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching automakers:", error);
      }
    };

    fetchModels();
  }, [selectedAutomaker])

  useEffect(() => {
    const fetchYears = async () => {
      try {
        setIsLoading(true);
        const response = await searchService.getYears(selectedModel);
        setYearsData(yearsMapper(response));
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching automakers:", error);
      }
    };

    fetchYears();
  }, [selectedModel])

  function handleAutomakerChange(value: string) {
    setSelectedAutomaker(value);
    setSelectedModel("");
    setModelsData([])
  };

  function handleModelChange(value: string) {
    setSelectedModel(value);
  };

  const handleSubmit = hookFormSubmit(async data => {
    try {
      console.log(data);
    } catch (error) {
      console.error("error search.")
    }
  });

  return {
    modelsData,
    isLoading,
    yearsData,
    handleAutomakerChange,
    handleModelChange,
    selectedAutomaker,
    selectedModel,
    handleSubmit,
    control,
    errors,
    register,
    setValue
  }
}
