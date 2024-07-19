import { httpClient } from "../httpClient";

export interface LineTimeResponse {
  content: {
    id: string;
    anos: string;
    historico: string;
  }[]
}

export async function getLineTime() {
  const { data } = await httpClient.get<LineTimeResponse>('/sobrenoslinhatempo-soft');

  return data;
}
