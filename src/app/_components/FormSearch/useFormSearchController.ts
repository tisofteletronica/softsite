import { automakersMapper, yearsMapper } from "@/lib/mapers";
import { searchService } from "@/services/searchService";
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
  models: z.string().min(1).nullable(),
  years: z.string().nullable(),
})

type FormData = z.infer<typeof schema>

export function useFormSearchController() {
  const [selectedAutomaker, setSelectedAutomaker] = useState<string>("");
  const [selectedModel, setSelectedModel] = useState<string>("");
  const [modelsData, setModelsData] = useState<SearchSelectOption[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [yearsData, setYearsData] = useState<SearchSelectOption[]>([]);
  const [disabledModel, setDisabledModel] = useState(true);
  const [disabledYear, setDisabledYear] = useState(true);
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
          const responseModelsById = await searchService.getModelsById(selectedAutomaker);
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

  useEffect(() => {
    const fetchYears = async () => {
      try {
        setIsLoading(true);
        if (selectedModel.length > 0) {
          const response = await searchService.getYears(selectedModel);
          setYearsData(yearsMapper(response));
          response.length > 0 ? setDisabledYear(false) : setDisabledYear(true);
        }
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching years:", error);
      }
    };

    fetchYears();
  }, [selectedModel])

  function handleAutomakerChange(value: string) {
    setSelectedAutomaker(value);
    setSelectedModel("");
    setValue("models", null);
    setValue("years", null);
    setDisabledModel(true);
    setDisabledYear(true);
  };

  function handleModelChange(value: string) {
    setSelectedModel(value);
    setValue("years", null);
  };

  const handleSubmit = hookFormSubmit(async data => {
    try {
      router.push(`/pesquisa?models=${data.models}&year=${data.years}`);
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
    disabledModel,
    disabledYear
  }
}
