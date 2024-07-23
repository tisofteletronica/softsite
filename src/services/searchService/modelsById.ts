import { httpClient } from "../httpClient";

export interface ModelsIdResponse {
  id: string;
  name: string;
}

export async function getModelsById(idAutomakers: string) {
  const { data } = await httpClient.get<ModelsIdResponse[]>(`/modelos-instalesoft/ListByIdMontadora?montadoraId=${idAutomakers}`);

  return data;
}
