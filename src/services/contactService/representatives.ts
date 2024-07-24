import { httpClient } from "../httpClient";

export interface RepresentativeResponse {
  content: {
    id: string;
    representante: string;
    estadosRepresentantes: string;
    whatsapp: string;
    phone1: string;
    contato: string;
    email: string;
  }[]
}

export async function getRepresentatives() {
  const { data } = await httpClient.get<RepresentativeResponse>("/representantes-soft-site");

  return data;
}
