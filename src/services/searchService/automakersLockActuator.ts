import { httpClient } from "../httpClient";


export interface AutomakersLockActuatorResponse {
  id: string;
  montadora: string;
}

export async function getAutomakersLockActuator() {
  const { data } = await httpClient.get<AutomakersLockActuatorResponse[]>('/products/atuadorListaMontadora');

  return data;
}
