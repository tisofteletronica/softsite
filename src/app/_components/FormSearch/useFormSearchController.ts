import { getModelsByIdCachedData, getYearsCachedData } from "@/app/_actions/getActionSearch";
import { automakersMapper, yearsMapper } from "@/lib/mapers";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface useFormSearchControllerProps {
  modelSelected?: string | null;
}

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

export function useFormSearchController(automakerSelected?: string, modelSelected?: string) {
  const [selectedAutomaker, setSelectedAutomaker] = useState<string>(automakerSelected ?? "");
  const [selectedModel, setSelectedModel] = useState<string>(modelSelected ?? "");
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
    // console.log({ automakerSelected, modelSelected, yearSelected });

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

  useEffect(() => {
    const fetchYears = async () => {
      try {
        setIsLoading(true);
        if (selectedModel.length > 0) {
          const response = await getYearsCachedData(selectedModel);
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
      router.push(`/pesquisa?mon=${selectedAutomaker}&models=${data.models}&year=${data.years}`);
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
