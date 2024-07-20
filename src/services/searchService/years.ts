import { httpClient } from "../httpClient";

export interface YearsResponse {
  id: string;
  ano: number;
}

export async function getYears(idModels: string) {
  const { data } = await httpClient.get<YearsResponse[]>(`/app-instalesoft/modeloano?modeloId=${idModels}`);

  return data;
}
