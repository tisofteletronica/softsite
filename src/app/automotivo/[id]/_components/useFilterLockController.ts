import { getAutomakersLockActuatorCachedData, getAutomakersLockCachedData } from "@/app/_actions/getActionSearch";
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
  types: z.string().min(1),
  automaker: z.string().nullable(),
})

type FormData = z.infer<typeof schema>


export function useFilterLockController(params?: string) {
  const [selectedAutomaker, setSelectedAutomaker] = useState<string>("");
  const [selectedType, setSelectedType] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [automakersData, setAutomakersData] = useState<SearchSelectOption[]>([]);
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
    const fetchAutomakers = async () => {
      try {
        setIsLoading(true);
        if (params) {
          if (params === 'trava') {
            const responseModelsById = await getAutomakersLockCachedData();
            setAutomakersData(responseModelsById.map(res => ({
              label: String(res.montadora),
              value: res.montadora
            })));
          } else {
            const responseModelsById = await getAutomakersLockActuatorCachedData();
            setAutomakersData(responseModelsById.map(res => ({
              label: String(res.montadora),
              value: res.montadora
            })));
          }

          setDisabledModel(false);
        }
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching automakers:", error);
      }
    };

    fetchAutomakers();
  }, [params])

  useEffect(() => {
    const fetchAutomakers = async () => {
      try {
        setIsLoading(true);
        if (selectedType) {
          if (selectedType === 'trava') {
            const responseModelsById = await getAutomakersLockCachedData();
            setAutomakersData(responseModelsById.map(res => ({
              label: String(res.montadora),
              value: res.montadora
            })));
          } else {
            const responseModelsById = await getAutomakersLockActuatorCachedData();
            setAutomakersData(responseModelsById.map(res => ({
              label: String(res.montadora),
              value: res.montadora
            })));
          }

          setDisabledModel(false);
        }
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching automakers:", error);
      }
    };

    fetchAutomakers();
  }, [selectedType])

  function handleAutomakerChange(value: string) {
    setSelectedAutomaker(value);
  };

  function handleTypeChange(value: string) {
    setSelectedType(value);
    setValue("automaker", null);
    setDisabledModel(true);
    setAutomakersData([]);
  }

  const handleSubmit = hookFormSubmit(async data => {
    try {
      setIsLoading(true)
      const automaker = data.automaker?.toLowerCase()

      router.push(`/automotivo/travas/${automaker}/${data.types}`);
      setIsLoading(false);
    } catch (error) {
      console.error("error search.")
    }
  });

  return {
    isLoading,
    handleAutomakerChange,
    handleTypeChange,
    selectedAutomaker,
    handleSubmit,
    control,
    errors,
    register,
    disabledModel,
    automakersData
  }
}
