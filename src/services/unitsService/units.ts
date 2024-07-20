import { httpClient } from "../httpClient";


export interface UnitsResponse {
  content: {
    id: string;
    description: string;
    address: string;
    number: string;
    complement: string;
    cep: string;
    city: string;
    neighborhood: string;
    uf: string;
    country: string;
    phone1: string;
    phone2?: string;
    phone3?: string;
    imgUrl1?: string;
    imgUrl2?: string;
    imgUrl3?: string;
    imgUrl4?: string;
    imgUrl5?: string;
    imgUrl6?: string;
    imgUrl7?: string;
    imgUrl8?: string;
    imgUrl9?: string;
    imgUrl10?: string;
  }[]
}

export async function getUnits() {
  const { data } = await httpClient.get<UnitsResponse>('/unidades-soft');

  return data;
}
