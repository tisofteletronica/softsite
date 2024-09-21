import { httpClient } from "../httpClient";

export interface ProductsByCategoryIdResponse {
  content: {
    id: string;
    code: string;
    name: string;
    descriptionCommercial: string;
    descriptionInstalesoft: string;
    weight: string,
    length: string,
    width: string,
    height: string,
    capaImagem: string;
    imgUrl1: string;
    imgUrl2: string;
    imgUrl3: string;
    imgUrl4: string;
    imgUrl5: string;
    urlManual: string;
    nameCategoryCommercial: string;
  }[]
  size: number;
  totalPages: number;
  totalElements: number;
}

export async function getProductsByCategoryId(id: string, page?: number | string, size?: number | string) {
  const { data } = await httpClient.get<ProductsByCategoryIdResponse>(`/products/categoryById?categoryId=${id}&page=${page}&size=${size}`);

  return data;
}
