'use server'

import { searchService } from "@/services/searchService";

interface SearchSelectOption {
  value: string;
  label: string;
}

export default async function getActionModels(value: string): Promise<SearchSelectOption[]> {
  const models = await searchService.getModelsById(value);
  return models.map(model => ({ value: model.id, label: model.name }));
}
