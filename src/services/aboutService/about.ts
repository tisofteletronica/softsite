import { httpClient } from "../httpClient";

export interface AboutResponse {
  content: {
    id: string;
    historico: string;
    politica: string;
  }[]
}

export async function getAbout() {
  const { data } = await httpClient.get<AboutResponse>('/sobrenos-soft');

  return data;
}
