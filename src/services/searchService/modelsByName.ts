import { httpClient } from "../httpClient";

export interface ModelsResponse {
  content: {
    id: string;
    name: string;
    montadoraId: string;
  }[]
}

export async function getModelsByName(nameAutomakers: string) {
  const { data } = await httpClient.get<ModelsResponse>(`/modelos-instalesoft/filterByNameMontadora?montadora=${nameAutomakers}`);

  return data;
}
