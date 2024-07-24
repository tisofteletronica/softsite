import { httpClient } from "../httpClient";

export interface ContactResponse {
  content: {
    id: string;
    setor: string;
    whatsapp: string;
    phone1: string;
    email: string;
  }[]
}

export async function getCentral() {
  const { data } = await httpClient.get<ContactResponse>("/contatos-soft");

  return data;
}
