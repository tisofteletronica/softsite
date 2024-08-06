import { httpClient } from "../httpClient";

export interface SearchResponse {
  content: {
    categoriaId: string;
    name: string;
    modeloId: string;
    modelo: string;
    ano: string;
    imgUrl: string;
  }[]
}

export async function getCategoryByModelAndYear(model: string, year: string) {
  const { data } = await httpClient.get<SearchResponse>(`/app-instalesoft/modelocategoria?modeloId=${model}&ano=${year}`);

  return data;
}
