import { httpClient } from "../httpClient";

export interface SectorsResponse {
  content: {
    id: string;
    descricao: string;
    img_url: string;
  }[]
}

export async function getSectors() {
  const { data } = await httpClient.get<SectorsResponse>('/setores-atendimento-soft');

  return data;
}
