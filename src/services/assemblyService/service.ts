import { httpClient } from "../httpClient";

export interface AssemblyResponse {
  content: {
    id: string;
    servicos: string;
    descricao: string;
    urlImg1: string;
    urlImg2: string;
    urlImg3: string;
  }[]
}

export async function getServices() {
  const { data } = await httpClient.get<AssemblyResponse>("/montagem-servicos-soft");

  return data;
}
