import { httpClient } from "../httpClient";


export interface AutomakersUniqueResponse {
  id: string;
  montadora: string;
}

export async function getAutomakersUnique() {
  const { data } = await httpClient.get<AutomakersUniqueResponse[]>('/products/uniqueListaMontadora');

  return data;
}
