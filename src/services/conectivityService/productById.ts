import { httpClient } from "../httpClient";

export interface ProductByIdResponse {
  id: string;
  code: string;
  name: string;
  caracteristica: string;
  imgUrl1?: string | null;
  imgUrl2?: string | null;
  imgUrl3?: string | null;
  imgUrl4?: string | null;
  imgUrl5?: string | null;
  imgUrl6?: string | null;
  imgUrl7?: string | null;
  imgUrl8?: string | null;
  imgUrl9?: string | null;
  imgUrl10?: string | null;
  urlLogoImg?: string;
  urlManual?: string;
  urlManual_1?: string;
}

export async function getProductById(idProduct: string) {
  const { data } = await httpClient.get<ProductByIdResponse>(`/productextrasite-soft/${idProduct}`);

  return data;
}
