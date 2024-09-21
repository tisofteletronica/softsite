import { httpClient } from "../httpClient";


export interface automakersLockResponse {
  id: string;
  montadora: string;
}

export async function getautomakersLock() {
  const { data } = await httpClient.get<automakersLockResponse[]>('/products/travaListaMontadora');

  return data;
}
