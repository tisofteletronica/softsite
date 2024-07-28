import { httpClient } from "../httpClient";

export interface StructureResponse {
  content: {
    id: string;
    tipo: string;
    maquina: string;
    descricao: string;
  }[]
}

export async function getStructure(page?: string) {
  const { data } = await httpClient.get<StructureResponse>(`/montagem-maquinas-soft?page=${page}`);

  return data;
}
