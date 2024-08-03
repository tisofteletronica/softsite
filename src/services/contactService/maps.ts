import { httpClient } from "../httpClient";

export interface StatesResponse {
  id: string;
  razaoSocial: string;
  email: string;
  telefone1: string;
  telefone2: string;
  cep: string;
  endereco: string;
  numero: string;
  bairro: string;
  cidade: string;
  uf: string;
  site: string;
}

export async function getStates(uf: string) {
  const { data } = await httpClient.get<StatesResponse[]>(`/clientes-soft-site/filterUfOrCity?uf=${uf}`);

  return data;
}
