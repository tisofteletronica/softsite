import { httpClient } from "../httpClient";

export interface ModelsResponse {
  id: string;
  name: string;
}

export async function getModels(idAutomakers: string) {
  const { data } = await httpClient.get<ModelsResponse[]>(`/modelos-instalesoft/ListByIdMontadora?montadoraId=${idAutomakers}`);

  return data;
}
