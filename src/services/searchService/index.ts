import { getAutomakers } from "./automakers";
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
  getProductsByModelAndCategory
}
