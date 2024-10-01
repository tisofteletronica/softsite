import { httpClient } from "../httpClient";

export interface DifferencesResponse {
  content: {
    id: string;
    diferencial: string;
    descricao: string;
    urlImg1: string;
    urlImg2: string;
    urlImg3: string;
  }[]
}

export async function getDifferences() {
  const { data } = await httpClient.get<DifferencesResponse>("/montagem-diferenciais-soft");

  return data;
}
