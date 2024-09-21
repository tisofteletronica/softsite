import { CATEGORIES_AUTOMOTIVE, STATES, UF } from "@/config/constants";
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

export function titleRepresentativesMapper(value: string) {
  const mapperStates = STATES.map((state) => value === state.valueApi && value.replace(state.valueApi, state.valueTratament));

  return mapperStates;
}

export function ufMapper(value: string) {
  const mapper = UF.map(u => value === u.label && u.value);

  return mapper;
}

export function colorsMapper(value: string) {
  const color = CATEGORIES_AUTOMOTIVE.filter(color => color.id === value)

  return color[0]?.color;
}

export function mapperBg(id: string) {
  const img = CATEGORIES_AUTOMOTIVE.filter(img => img.id === id)

  return img[0]?.img;
}
