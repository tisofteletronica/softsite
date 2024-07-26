import { getAutomakers } from "./automakers";
import { getModelsById } from "./modelsById";
import { getModelsByName } from "./modelsByName";
import { getYears } from "./years";

export const searchService = {
  getAutomakers,
  getModelsByName,
  getYears,
  getModelsById
}
