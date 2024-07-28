import { httpClient } from "../httpClient";

export interface AssemblyResponse {
  content: {
    id: string;
    servicos: string;
    descricao: string;
  }[]
}

export async function getServices() {
  const { data } = await httpClient.get<AssemblyResponse>("/montagem-servicos-soft");

  return data;
}
