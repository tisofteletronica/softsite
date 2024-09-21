import { getAreas } from "./areas";
import { getAssembly } from "./assembly";
import { getDifferences } from "./differences";
import { getServices } from "./service";
import { getStructure } from "./structure";

export const assemblyService = {
  getServices,
  getDifferences,
  getStructure,
  getAssembly,
  getAreas
}
