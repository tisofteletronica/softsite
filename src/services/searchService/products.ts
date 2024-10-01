import { httpClient } from "../httpClient";

export interface ProductsByModelAndCategoryResponse {
  content: {
    id: string;
    modeloInstalesoftId: string;
    nameMontadoraInstaleSoft: string;
    nameModeloInstaleSoft: string;
    ano: string;
    anoDe: string;
    anoAte: string;
    categoryComercialId: string;
    categoryComercialName: string;
    categoryInstaleSoftId: string;
    categoryInstaleSoftName: string;
    productId: string;
    productName: string;
    codigo: string;
    descricaoInstaleSoft: string;
    descricaoComercial: string;
    quantidade: string;
    vidroConvencional: string;
    vidroInteligente: string;
    portas2: boolean;
    porta4: boolean;
    urlManual: string;
    urlVideo: string;
    observacao: string;
    urlEsquema: string;
    imgUrl1: string;
    imgUrl2: string;
    imgUrl3: string;
    imgUrl4: string;
    imgUrl5: string;
  }[]
  size: number;
  totalPages: number;
  totalElements: number;
}

export async function getProductsByModelAndCategory(model: string, year: string, category: string, page?: number | string, size?: number | string) {
  const { data } = await httpClient.get<ProductsByModelAndCategoryResponse>(`/app-instalesoft/modeloprodutos?ano=${year}&categoriaId=${category}&modeloId=${model}&page=${page}&size=${size}`);

  return data;
}
