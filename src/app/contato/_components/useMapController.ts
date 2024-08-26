import { getStatesCachedData } from "@/app/_actions/getActionContact";
import { StatesResponse } from "@/services/contactService/maps";
import { useEffect, useState } from "react";

export function useMapController() {
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [statesData, setStatesData] = useState<StatesResponse[]>([]);
  const [uniqueCities, setUniqueCities] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleState(uf: string) {
    setSelectedState(uf);
  };

  useEffect(() => {
    const fetchModels = async () => {
      try {
        setIsLoading(true);
        if (selectedState) {
          const states = await getStatesCachedData(selectedState);
          setStatesData(states);
          setUniqueCities(listUniqueCities(states))
        }
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching models:", error);
        setIsLoading(false);
      }
    };

    fetchModels();
  }, [selectedState])

  function listUniqueCities(data: StatesResponse[]) {
    const seenCities = new Set<string>();
    const uniqueCities = data.filter(item => {
      if (seenCities.has(item.cidade)) {
        return false;
      } else {
        seenCities.add(item.cidade);
        return true;
      }
    }).map(item => item.cidade);

    return uniqueCities;
  }

  return {
    handleState,
    isLoading,
    uniqueCities,
    statesData
  }
}
