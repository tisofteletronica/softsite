import { httpClient } from "../httpClient";


export interface AutomakersResponse {
  id: string;
  name: string;
}

export async function getAutomakers() {
  const { data } = await httpClient.get<AutomakersResponse[]>('/montadoras-instalesoft');

  return data;
}
