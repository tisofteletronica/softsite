import { getAutomakers } from "./automakers";
import { getautomakersLock } from "./automakersLock";
import { getModelsById } from "./modelsById";
import { getModelsByName } from "./modelsByName";
import { getProductsByModelAndCategory } from "./products";
import { getCategoryByModelAndYear } from "./search";
import { getYears } from "./years";

export const searchService = {
  getAutomakers,
  getModelsByName,
  getYears,
  getModelsById,
  getCategoryByModelAndYear,
  getProductsByModelAndCategory,
  getautomakersLock
}
