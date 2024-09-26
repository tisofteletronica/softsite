import { httpClient } from "../httpClient";

export interface CatalogsResponse {
  content: {
    id: string;
    descricao: string;
    local: string;
  }[]
}

export async function getCatalogs() {
  const { data } = await httpClient.get<CatalogsResponse>('/catalogo-soft');

  return data;
}
