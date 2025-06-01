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

    // Ordena os itens por id (convertendo para número, se necessário)
  const sortedContent = data.content.sort((a, b) => Number(a.id) - Number(b.id));

  return {
    ...data,
    content: sortedContent
  };
}
