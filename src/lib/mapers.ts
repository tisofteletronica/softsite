import { AutomakersResponse } from "@/services/searchService/automakers";
import { YearsResponse } from "@/services/searchService/years";

export function automakersMapper(items: AutomakersResponse[]) {
  const mapper = items.map((item) => {
    return {
      value: String(item.id),
      label: item.name,
    }
  })

  return mapper;
}

export function yearsMapper(items: YearsResponse[]) {
  const mapper = items.map((item) => {
    return {
      value: String(item.ano),
      label: String(item.ano),
    }
  })

  return mapper;
}
