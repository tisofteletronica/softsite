import { httpClient } from "../httpClient";

export interface AreasAssemblyResponse {
  content: {
    id: string;
    descricao: string;
    img_url: string;
  }[]
}

export async function getAreas() {
  const { data } = await httpClient.get<AreasAssemblyResponse>("/montagem-soft-atuacao");

  return data;
}
